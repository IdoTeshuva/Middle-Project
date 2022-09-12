import "./App.css";
import Home from "./Core-Components/Home";
import Contact from "./Core-Components/Contact";
import { Route, Routes, useLocation } from "react-router-dom";
import NavBar from "./Core-Components/NavBar";
import { AnimatePresence } from "framer-motion";
import MapRamatGan from "./Components/MapRamatGan";
import MapTlv from "./Components/MapTlv";
import MapBeerTuvia from "./Components/MapBeerTuvia";
import MapRishonLezion from "./Components/MapRishonLezion";
import MobileNavBar from "./Core-Components/MobileNavBar";
import About from "./Core-Components/AboutUs";
import JoinUs from "./Components/JoinUs";
import FAQ from "./Components/FAQ";
import TermsOfUse from "./Components/TermsOfUse";
import ArtistPage from "./Artists Info/ArtistPage";


function App() {
  const location = useLocation();
  return (
    <div className="App">
      <NavBar />
      <MobileNavBar />
      <AnimatePresence exitBeforeEnter>
        <Routes key={location.pathname} location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/AboutUs" element={<About />} />
          <Route path="/:name" element={<ArtistPage/>}/>
          <Route path="/MapRamatGan" element={<MapRamatGan />} />
          <Route path="/MapTlv" element={<MapTlv />} />
          <Route path="/MapBeerTuvia" element={<MapBeerTuvia />} />
          <Route path="/MapRishonLezion" element={<MapRishonLezion />} />
          <Route path="/JoinUs" element={<JoinUs />} />
          <Route path="/FAQ" element={<FAQ />} />
          <Route path="/TermsOfUse" element={<TermsOfUse />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
