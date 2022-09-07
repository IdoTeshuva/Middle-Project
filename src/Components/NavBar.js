import { useState } from "react";
import LogInBtn from "./LogInBtn";
import "./navbar.css";
import { Link } from "react-router-dom";
import LoginPopUp from "./LoginModal";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="nav-bar">
        <Link to="/">
          <img className="logo-img" src="https://i.ibb.co/hdBGDk3/logo-white.png"></img>
        </Link>
      <div className="nav-btns">
        <Link className="nav-btn" to="/">
          Home
        </Link>
        <a className="nav-btn" href="#events">
          Events
        </a>
        {/* IDO */}
        <Link className="nav-btn" to="/">
          {/* NIRO */}
          Artists
        </Link>
        <Link className="nav-btn" to="/Contact">
          {/* TBC */}
          Contact Us
        </Link>
      </div>
      <LogInBtn setIsOpen={setIsOpen}>
        Log In
      </LogInBtn>
      {isOpen && <LoginPopUp setIsOpen={setIsOpen} />}
    </nav>
  );
};

export default NavBar;
