import { Routes, Route, NavLink } from "react-router-dom";
import Home from './components/Home'
import NotFound from "./components/NotFound";
import GalleryFooter from "./components/GalleryFooter";
import GalleryRoutes from "./components/GalleryRoutes";

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
