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



function App() {
  const location = useLocation();
  return (
    <div className="App">
      <NavBar />
      <AnimatePresence exitBeforeEnter>
        <Routes key={location.pathname} location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/OmerAdam" element={<Omer />} />
          <Route path="/EhudBanai" element={<Ehud />} />
          <Route path="/AvivGeffen" element={<Aviv />} />
          <Route path="/YehudaPoliker" element={<Yehuda />} />
          <Route path="/ShoteiHanevuah" element={<Shotei />} />
          <Route path="/EvyatarBanai" element={<Evyatar />} />
          <Route path="/TamirGrinberg" element={<Tamir />} />
          <Route path="/IdanHaviv" element={<Idan />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
