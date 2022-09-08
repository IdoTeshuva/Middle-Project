import LogInBtn from "../Components/LogInBtn";
import "./mobile-navbar.css";
import { Link, NavLink } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';

const MobileNavBar = () => {
  return (
    <>
    
    <nav className='mobile-nav-bar'>
    <div className="circle"> 
        <img
          className='mobile-logo-img'
          src="https://i.ibb.co/hdBGDk3/logo-white.png"
        ></img>
    </div>
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
      <LogInBtn />
        </li>
      </ul>
    </nav>
    </>
  );
};

export default MobileNavBar;