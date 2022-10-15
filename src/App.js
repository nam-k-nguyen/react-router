import { Routes, Route, NavLink } from "react-router-dom";
import Home from './components/Home'
import NotFound from "./components/NotFound";
import GalleryFooter from "./components/GalleryFooter";
import GalleryRoutes from "./components/GalleryRoutes";

function App() {
  return (
    <>
      {/* Navigation Bar */}
      <nav className='navbar'>
        <NavLink end to="/"><div className="link">Home</div></NavLink>
        <NavLink end to="/gallery"><div className="link">Gallery</div></NavLink>
      </nav>
      {/* Main Routes */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/gallery/*' element={<GalleryRoutes />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      {/* Footer Routes */}
      <Routes >
        <Route path='/' element={''} />
        <Route path='/gallery' element={<GalleryFooter />} />
        <Route path='/gallery/:id/:name' element={<GalleryFooter />} />
      </Routes>
    </>
  );
}

export default App;
