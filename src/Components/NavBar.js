import { useState } from "react";
import LogInBtn from "./LogInBtn";
import "./navbar.css";
import { Link } from "react-router-dom";
import LoginPopUp from "./LoginModal";


const NavBar = () => {
  const [isOpen,setIsOpen] = useState(false)
  return (
      <nav className="nav-bar">
        <Link className="nav-btn" to="/">
          Logo
        </Link>
        <Link className="nav-btn" to="/">
          Home
        </Link>
        <Link className="nav-btn" to="">Events</Link> {/* IDO */}
        <Link className="nav-btn" to="/Artists">{/* NIRO */}
          Artists
        </Link>
        <Link className="nav-btn" to="/Contact">{/* TBC */}
          Contact Us
        </Link>
        <LogInBtn className="nav-btn" setIsOpen={setIsOpen}>
          Log In
        </LogInBtn>
       {isOpen &&  <LoginPopUp setIsOpen={setIsOpen}/>}

      </nav>
    
  );
};

export default NavBar;
