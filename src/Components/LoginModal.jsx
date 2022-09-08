import { Button, TextField } from "@mui/material";
import "./close-btn.css";
import "./login-modal.css";
import { useDispatch } from "react-redux";
import { hello, notOpened } from "../counterSlice";


const LoginModal = () => {
  const dispatch = useDispatch();

  const handleModalClose = () => {
    dispatch(notOpened());
  };
  return (
    <div onClick={handleModalClose} className="login-modal-overlay">
      <div
        onClick={(e) => e.stopPropagation()}
        className="login-modal-container"
      >
        <Button className="close-login-button" variant="contained" onClick={handleModalClose}>
          X
        </Button>
        <TextField
          id="standard-helperText"
          helperText="Email/User Name"
          defaultValue="User@mail.com"
          label="User Name"
          type="search"
          variant="standard"
        />
        <TextField
          id="standard-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="standard"
        />
        <Button className="login-button" variant="contained">Log In</Button>
        <Button className="not-reg-button" variant="outlined" onClick={() => dispatch(hello()) && handleModalClose()}>
          Not registered?
        </Button>
      </div>
    </div>
  );
  // return createPortal(html, modal);
};

export default LoginModal;
