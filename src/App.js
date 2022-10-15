import { Routes, Route, NavLink } from "react-router-dom";
import Home from './components/Home'
import NotFound from "./components/NotFound";
import GalleryFooter from "./components/GalleryFooter";
import GalleryRoutes from "./components/GalleryRoutes";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/about' element={<About />}></Route>
    </Routes>
  );
}

export default App;
