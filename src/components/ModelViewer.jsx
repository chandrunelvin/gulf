import { useEffect, useRef, useState } from 'react'

/**
 * Renders a rotating GLB model using the vendored three.js modules in /public/vendor.
 * Mirrors the inline module script from the original audia.html. The three.js files
 * are loaded at runtime as native ES modules (Vite leaves the dynamic import alone),
 * exactly as the static site did.
 */
export default function ModelViewer({ glb, className = 'model-3d', maxPixelRatio = 2 }) {
  const containerRef = useRef(null)
  const [status, setStatus] = useState('Loading 3D…')

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    let renderer
    let rafId
    let disposed = false
    let onResize
    let visible = false
    let tick = null

    // Only render while on screen — several viewers spinning at once (home page
    // has five) otherwise keep the GPU busy and make the page janky on phones.
    const startLoop = () => {
      if (tick && visible && !rafId && !disposed) rafId = requestAnimationFrame(tick)
    }
    const visibilityIO = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting
      startLoop()
    })
    visibilityIO.observe(container)

    // Defer downloading three.js and the model until the viewer is close to the
    // viewport, so it doesn't compete with above-the-fold content on load.
    const lazyIO = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        lazyIO.disconnect()
        init()
      },
      { rootMargin: '300px 0px' }
    )
    lazyIO.observe(container)

    const init = async () => {
      try {
        // Build the specifiers at runtime so Vite/Rollup don't try to resolve or
        // bundle these vendored ES modules — the browser fetches them from /public.
        const base = `${window.location.origin}/vendor/three/`
        const THREE = await import(/* @vite-ignore */ `${base}three.module.js`)
        const { GLTFLoader } = await import(/* @vite-ignore */ `${base}addons/loaders/GLTFLoader.js`)
        const { DRACOLoader } = await import(/* @vite-ignore */ `${base}addons/loaders/DRACOLoader.js`)
        if (disposed) return

        const scene = new THREE.Scene()
        let w = container.clientWidth || 520
        let h = container.clientHeight || 520
        const camera = new THREE.PerspectiveCamera(40, w / h, 0.1, 100)
        camera.position.set(2.2, 1.5, 2.4)

        renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'low-power' })
        renderer.setSize(w, h)
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, maxPixelRatio))
        renderer.toneMapping = THREE.ACESFilmicToneMapping
        renderer.toneMappingExposure = 1.15
        container.appendChild(renderer.domElement)

        scene.add(new THREE.AmbientLight(0xffffff, 0.6))
        const d1 = new THREE.DirectionalLight(0xffffff, 0.9)
        d1.position.set(3, 5, 3)
        scene.add(d1)
        const d2 = new THREE.DirectionalLight(0x4db6ac, 0.35)
        d2.position.set(-3, 3, -2)
        scene.add(d2)
        const p1 = new THREE.PointLight(0x159b94, 0.5, 12)
        p1.position.set(0, 2, 2)
        scene.add(p1)

        const target = new THREE.Vector3(0, 0.6, 0)
        const viewDir = camera.position.clone().normalize()
        camera.lookAt(target)
        // The model spins inside this pivot so it turns about its own centre
        // instead of orbiting around the glTF origin.
        let model = null
        let fitPoints = []

        // Pull the camera back along its viewing angle just far enough that the
        // model stays fully in frame at every point of its spin, for whatever
        // aspect ratio the container has (phone cards are wide and short).
        const fitCamera = () => {
          if (!fitPoints.length) return
          const p = new THREE.Vector3()
          const fits = (dist) => {
            camera.position.copy(viewDir).multiplyScalar(dist).add(target)
            camera.lookAt(target)
            camera.updateMatrixWorld(true)
            return fitPoints.every((pt) => {
              p.copy(pt).project(camera)
              return p.z < 1 && Math.abs(p.x) <= 0.9 && Math.abs(p.y) <= 0.9
            })
          }
          let lo = 0.3
          let hi = 30
          for (let i = 0; i < 24; i++) {
            const mid = (lo + hi) / 2
            if (fits(mid)) hi = mid
            else lo = mid
          }
          fits(hi)
        }

        const gltfLoader = new GLTFLoader()
        const draco = new DRACOLoader()
        draco.setDecoderPath('/vendor/three/addons/libs/draco/gltf/')
        gltfLoader.setDRACOLoader(draco)

        gltfLoader.load(
          encodeURI(glb),
          (gltf) => {
            if (disposed) return
            const inner = gltf.scene
            inner.updateMatrixWorld(true)
            let box = new THREE.Box3().setFromObject(inner)
            const size = box.getSize(new THREE.Vector3())
            const maxDim = Math.max(size.x, size.y, size.z) || 1
            inner.scale.setScalar(1.7 / maxDim)
            inner.updateMatrixWorld(true)
            box = new THREE.Box3().setFromObject(inner)
            const c = box.getCenter(new THREE.Vector3())
            inner.position.x -= c.x
            inner.position.z -= c.z
            inner.position.y -= box.min.y
            model = new THREE.Group()
            model.add(inner)
            scene.add(model)

            // Box corners swept through a full turn — everything the spin can show.
            const hx = (box.max.x - box.min.x) / 2
            const hz = (box.max.z - box.min.z) / 2
            const height = box.max.y - box.min.y
            target.set(0, height * 0.5, 0)
            fitPoints = []
            for (let a = 0; a < 24; a++) {
              const ang = (a / 24) * Math.PI * 2
              const cos = Math.cos(ang)
              const sin = Math.sin(ang)
              for (const x of [-hx, hx]) for (const z of [-hz, hz]) for (const y of [0, height]) {
                fitPoints.push(new THREE.Vector3(x * cos + z * sin, y, -x * sin + z * cos))
              }
            }
            fitCamera()
            setStatus('')
          },
          undefined,
          (err) => {
            console.warn('GLB load failed:', err)
            setStatus(
              window.location.protocol === 'file:'
                ? 'Open via localhost, not file://'
                : '3D model failed to load'
            )
          }
        )

        tick = () => {
          rafId = null
          if (!visible || disposed) return
          if (model) model.rotation.y += 0.004
          renderer.render(scene, camera)
          rafId = requestAnimationFrame(tick)
        }
        startLoop()

        onResize = () => {
          w = container.clientWidth
          h = container.clientHeight
          if (!w || !h) return
          camera.aspect = w / h
          camera.updateProjectionMatrix()
          renderer.setSize(w, h)
          fitCamera()
        }
        window.addEventListener('resize', onResize)
      } catch (err) {
        console.warn('three.js failed to load:', err)
        setStatus('3D viewer unavailable')
      }
    }

    return () => {
      disposed = true
      lazyIO.disconnect()
      visibilityIO.disconnect()
      if (rafId) cancelAnimationFrame(rafId)
      if (onResize) window.removeEventListener('resize', onResize)
      if (renderer) {
        renderer.dispose()
        if (renderer.domElement && renderer.domElement.parentNode) {
          renderer.domElement.parentNode.removeChild(renderer.domElement)
        }
      }
    }
  }, [glb])

  return <div className={className} ref={containerRef} data-status={status || undefined} />
}
