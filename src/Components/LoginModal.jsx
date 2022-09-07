import { Button, TextField } from "@mui/material";
import { createPortal } from "react-dom";
import "./close-btn.css";
import "./login-modal.css";

const modal = document.getElementById("modal");

const LoginPopUp = ({ setIsOpen }) => {
  const handleModalClose = () => {
    setIsOpen(false);
  };
  const html = (
    <div onClick={handleModalClose} className="login-modal-overlay">
      <div
        onClick={(e) => e.stopPropagation()}
        className="login-modal-container"
      >
        <Button
          variant="contained"
          // className="modal-close-btn"
          onClick={handleModalClose}
        >
          X
        </Button>
        <Button variant="contained">Log In</Button>
        <TextField
          id="standard-search"
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
      </div>
    </div>
  );
  return createPortal(html, modal);
};

export default LoginPopUp;
