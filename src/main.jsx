import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/home';
import Class from './Pages/classes';
import Contact from './Pages/contact';
import Gallery from './Pages/gallery';
import Prices from './Pages/pricing';
import About from './Pages/about';
import GalleryMore from './components/galleryMore';

function RouteSwitch() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/classes" element={<Class />} />
        <Route path="/contacts" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/prices" element={<Prices />} />
        <Route path="/about" element={<About />} />
        <Route path="/more" element={<GalleryMore />} />
      </Routes>
    </BrowserRouter>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouteSwitch />
  </React.StrictMode>,
)
