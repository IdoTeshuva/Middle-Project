import LogInBtn from "../Components/LogInBtn";
import "./navbar.css";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className='nav-bar'>
      <Link to="/">
        <img
          className='logo-img'
          src="https://i.ibb.co/hdBGDk3/logo-white.png"
        ></img>
      </Link>
      <ul className='nav-btns' >
        <li>
          <NavLink className='nav-btn' to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className='nav-btn' to="/Contact">
            {/* TBC */}
            Contact Us
          </NavLink>
        </li>
      </ul>
      <LogInBtn />
    </nav>
  );
};

export default NavBar;
