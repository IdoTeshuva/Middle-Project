import "./App.css";
import Home from "./Components/Home";
import Artists from "./Components/Artists";
import Contact from "./Components/Contact";
import { Route, Routes, useLocation } from "react-router-dom";
import NavBar from "./Components/NavBar";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <NavBar />
      <AnimatePresence exitBeforeEnter>
        <Routes key={location.pathname} location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/Artists" element={<Artists />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
