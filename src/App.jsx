import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'

import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Collection from './pages/Collection.jsx'
import Contact from './pages/Contact.jsx'
import Partners from './pages/Partners.jsx'
import Audia from './pages/Audia.jsx'
import Scab from './pages/Scab.jsx'
import Leadcom from './pages/Leadcom.jsx'
import Brunonic from './pages/Brunonic.jsx'
import Nitrocare from './pages/Nitrocare.jsx'
import Blog from './pages/Blog.jsx'
import BlogOfficeFurnitureOman from './pages/BlogOfficeFurnitureOman.jsx'
import LaunchGate from './components/LaunchGate.jsx'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <>
      <LaunchGate />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/audia" element={<Audia />} />
        <Route path="/scab" element={<Scab />} />
        <Route path="/leadcom" element={<Leadcom />} />
        <Route path="/brunonic" element={<Brunonic />} />
        <Route path="/nitrocare" element={<Nitrocare />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/office-furniture-oman" element={<BlogOfficeFurnitureOman />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  )
}
