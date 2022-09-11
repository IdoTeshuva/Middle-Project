import LogInBtn from "../Components/LogInBtn";
import "./navbar.css";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion"
import { useSelector } from "react-redux";
import { selectLog  } from "../counterSlice";
import LoginIcon from "./LoginIcon";




const NavBar = () => {
  const isLogged = useSelector(selectLog);
  return (
    <nav className='nav-bar'>
    <motion.div
      >
      <Link to="/">
        <img
          className='logo-img'
          src="https://i.ibb.co/hdBGDk3/logo-white.png"
        ></img>
      </Link>
    </motion.div>
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
        <li>
          <NavLink className='nav-btn' to="/AboutUs">
            About Us
          </NavLink>
        </li>
      </ul>
      {isLogged ? <LoginIcon /> : <LogInBtn />}
    </nav>
  );
};

export default NavBar;