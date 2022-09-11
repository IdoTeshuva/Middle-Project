import SignUp from "./SignUp.jsx";
import "./signup-modal.css";
import "./sign-up.css";
import { useDispatch } from "react-redux";
import { regisNotOpened } from "../counterSlice";
import { Button } from "@mui/material";

const SignUpModal = () => {
  const dispatch = useDispatch();
  const handleModalClose = () => {
    dispatch(regisNotOpened());
  };
  return (
    <div className="sign-up-modal-overlay" onClick={handleModalClose}>
      <div className="sign-up-modal-container" onClick={(e) => e.stopPropagation()}>
        <Button className="close-signup-button" variant="outlined" onClick={handleModalClose}>x</Button>
        <SignUp></SignUp>
      </div>
    </div>
  );
};

export default SignUpModal;
