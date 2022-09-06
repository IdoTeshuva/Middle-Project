import "./App.css";
import Home from "./Components/Home";
import Artists from "./Components/Artists";
import Contact from "./Components/Contact";
import { Route, Routes, useLocation } from "react-router-dom";
import NavBar from "./Components/NavBar";
import { AnimatePresence } from "framer-motion";
import SlideShow from './Components/artistSlideShow';
import BasicForm from './Components/BasicForm';
import LoginForms from './Components/loginForm';
import SignUpForms from './Components/signUpForm';
import Events from './Components/Events';

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

      <br/>
      <br/> 
      <SlideShow></SlideShow>
      <br/>
      <br />
      <BasicForm></BasicForm>
      <br/>
      <br />
      <LoginForms></LoginForms>
      <br/>
      <br />
      <SignUpForms></SignUpForms>

    <Events></Events>
    </div>
  );
}

export default App;
