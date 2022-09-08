import LoginIcon from "@mui/icons-material/Login";
import { opened, selectOpen } from "../counterSlice";
import { useDispatch, useSelector } from "react-redux";

const LogInBtn = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector(selectOpen);

  return (
    <div className="login-container">
        <LoginIcon className="nav-login-btn" onClick={() => dispatch(opened())}/>
    </div>
  );
};

export default LogInBtn;
