import LogInBtn from "../Components/LogInBtn";
import "./mobile-navbar.css";
import { Link, NavLink } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import InfoIcon from '@mui/icons-material/Info';

const MobileNavBar = () => {
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
        <li className='mobile-nav-btn'>
      <LogInBtn />
        </li>
      </ul>
    </nav>
    </>
  );
};

export default MobileNavBar;