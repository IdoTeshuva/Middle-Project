import {createPortal} from 'react-dom';
import "./close-btn.css"
import "./login-modal.css"

const modal = document.getElementById("modal");

const LoginPopUp = ({setIsOpen }) => {
    const handleModalClose =() =>{
        setIsOpen(false)
    }
  const html = (
    <div onClick={handleModalClose} className="login-modal-overlay">
      <div onClick={(e) => e.stopPropagation()} className="login-modal-container">
        <button>Log In</button>
        <button
          className="modal-close-btn"
          onClick={handleModalClose}
        >
          X
        </button>
      </div>
    </div>
  );
  return createPortal(html, modal);
};

export default LoginPopUp;
