import SignUp from "./SignUp.jsx";
import "./signup-modal.css";
import "./sign-up.css";
import { useDispatch } from "react-redux";
import { matan } from "../counterSlice";

const SignUpModal = () => {
  const dispatch = useDispatch();
  const handleModalClose = () => {
    dispatch(matan());
  };
  return (
    <div className="sign-up-modal-overlay" onClick={handleModalClose}>
      <div className="sign-up-modal-container" onClick={(e) => e.stopPropagation()}>
        <SignUp></SignUp>
        <button onClick={handleModalClose}>x</button>
      </div>
    </div>
  );
};

export default SignUpModal;
