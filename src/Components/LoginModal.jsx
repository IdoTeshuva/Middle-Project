import { Button, TextField } from "@mui/material";
// import { useState } from "react";
// import { createPortal } from "react-dom";
import "./close-btn.css";
import "./login-modal.css";
// import SignUpModal from "./SignUpModal";
import { useDispatch } from "react-redux";
import { hello, notOpened } from "../counterSlice";

// const modal = document.getElementById("modal");

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
        <Button variant="contained" onClick={handleModalClose}>
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
        <button onClick={() => dispatch(hello()) && handleModalClose()}>
          Not registered?
        </button>
      </div>
    </div>
  );
  // return createPortal(html, modal);
};

export default LoginModal;
