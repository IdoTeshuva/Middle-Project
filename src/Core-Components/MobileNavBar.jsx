import LogInBtn from "../Components/LogInBtn";
import "./mobile-navbar.css";
import {  NavLink } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import InfoIcon from '@mui/icons-material/Info';
import { useSelector } from "react-redux";
import { selectLog  } from "../counterSlice";
import LoginIcon from "./LoginIcon";

const MobileNavBar = () => {
  const isLogged = useSelector(selectLog);

  return (
    <>
    
    <nav className='mobile-nav-bar'>
      <ul className='mobile-nav-btns' >
        <li>
          <NavLink className='mobile-nav-btn' to="/">
            <HomeIcon />
          </NavLink>
        </li>
        <li>
          <NavLink className='mobile-nav-btn' to="/Contact">
            <ContactPhoneIcon />
          </NavLink>
        </li>
        <li>
          <NavLink className='mobile-nav-btn' to="/AboutUs">
            <InfoIcon  />
          </NavLink>
        </li>
        <li className='mobile-nav-login-btn'>
        {isLogged ? <LoginIcon /> : <LogInBtn />}
        </li>
      </ul>

    </nav>
    </>
  );
};

export default MobileNavBar;