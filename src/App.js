import "./App.css";
import Home from "./Core-Components/Home";
import Contact from "./Core-Components/Contact";
import { Route, Routes, useLocation } from "react-router-dom";
import NavBar from "./Core-Components/NavBar";
import { AnimatePresence } from "framer-motion";
import Omer from "./Artists Info/OmerAdamInfo";
import Ehud from "./Artists Info/EhudBanaiInfo";
import Aviv from "./Artists Info/AvivGeffenInfo";
import Yehuda from "./Artists Info/YehudaPolikerInfo";
import Shotei from "./Artists Info/ShoteiInfo";
import Evyatar from "./Artists Info/EvyatarBanaiInfo";
import Tamir from "./Artists Info/TamirGrinbergInfo";
import Idan from "./Artists Info/IdanHavivInfo";
import MapRamatGan from "./Components/MapRamatGan";
import MapTlv from "./Components/MapTlv";
import MapBeerTuvia from "./Components/MapBeerTuvia";
import MapRishonLezion from "./Components/MapRishonLezion";
import MobileNavBar from "./Core-Components/MobileNavBar";
import About from "./Core-Components/AboutUs";
import JoinUs from "./Components/JoinUs";
import FAQ from "./Components/FAQ";
import TermsOfUse from "./Components/TermsOfUse";


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
          <Route path="/OmerAdam" element={<Omer />} />
          <Route path="/EhudBanai" element={<Ehud />} />
          <Route path="/AvivGeffen" element={<Aviv />} />
          <Route path="/YehudaPoliker" element={<Yehuda />} />
          <Route path="/ShoteiHanevuah" element={<Shotei />} />
          <Route path="/EvyatarBanai" element={<Evyatar />} />
          <Route path="/TamirGrinberg" element={<Tamir />} />
          <Route path="/IdanHaviv" element={<Idan />} />
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
