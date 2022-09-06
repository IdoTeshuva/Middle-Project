import LoginIcon from '@mui/icons-material/Login';
const LogInBtn = ({ setIsOpen }) => {
  return (
    <div className="login-container">
      <button className="nav-btn" onClick={() => setIsOpen(value => !value)}>
        <LoginIcon/>
      </button>
      </div>
  );
};

export default LogInBtn;
