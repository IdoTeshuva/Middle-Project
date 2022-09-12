import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import React from 'react';
import { useSelector } from "react-redux";
import { loginName } from '../counterSlice';
import "./login-icon.css";

const firstUppercase = (str)=>{
   return str.at(0).toUpperCase() + str.slice(1)
}

const LoginIcon = () => {
  const login = useSelector(loginName);
    
    return(
        <React.Fragment>
        <div className="login-icon">
        {login && <span>Welcome {firstUppercase(login)}!</span>}
            <AccountCircleIcon className="logged-btn" />
        </div>
        </React.Fragment>
    )
}

export default LoginIcon