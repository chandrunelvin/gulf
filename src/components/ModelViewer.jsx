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

    ;(async () => {
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

        renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
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
        camera.lookAt(target)
        let model = null

        const gltfLoader = new GLTFLoader()
        const draco = new DRACOLoader()
        draco.setDecoderPath('/vendor/three/addons/libs/draco/gltf/')
        gltfLoader.setDRACOLoader(draco)

        gltfLoader.load(
          encodeURI(glb),
          (gltf) => {
            if (disposed) return
            model = gltf.scene
            model.updateMatrixWorld(true)
            let box = new THREE.Box3().setFromObject(model)
            const size = box.getSize(new THREE.Vector3())
            const maxDim = Math.max(size.x, size.y, size.z) || 1
            model.scale.setScalar(1.7 / maxDim)
            box = new THREE.Box3().setFromObject(model)
            const c = box.getCenter(new THREE.Vector3())
            model.position.x -= c.x
            model.position.z -= c.z
            model.position.y -= box.min.y
            target.set(0, (box.max.y - box.min.y) * 0.5, 0)
            camera.lookAt(target)
            scene.add(model)
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

        const animate = () => {
          rafId = requestAnimationFrame(animate)
          if (model) model.rotation.y += 0.004
          renderer.render(scene, camera)
        }
        animate()

        onResize = () => {
          w = container.clientWidth
          h = container.clientHeight
          if (!w || !h) return
          camera.aspect = w / h
          camera.updateProjectionMatrix()
          renderer.setSize(w, h)
        }
        window.addEventListener('resize', onResize)
      } catch (err) {
        console.warn('three.js failed to load:', err)
        setStatus('3D viewer unavailable')
      }
    })()

    return () => {
      disposed = true
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
