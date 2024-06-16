import "./App.css";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Contact from './components/Contact'
import Service from './components/Service'
import GDService from './components/GDService'
import UXService from './components/UXService'
import PVService from './components/PVService'
import Errorpage from './components/Errorpage'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/GDService" element={<GDService />} />
          <Route path="/UXService" element={<UXService />} />
          <Route path="/PVService" element={<PVService />} />

          <Route path="*" element={<Errorpage />} />

        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}
export default App

