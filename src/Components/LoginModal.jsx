import { Button, TextField } from "@mui/material";
import "./close-btn.css";
import "./login-modal.css";
import { useDispatch } from "react-redux";
import { regisOpened, loginNotOpened, logged } from "../counterSlice";
import * as Yup from "yup";
import { Formik } from "formik";

const LoginModal = () => {
  const dispatch = useDispatch();

  const handleModalClose = () => {
    dispatch(loginNotOpened());
  };
  const handleLoginName = () => {
    ;
  };
  const handleLogin = (e) => {
    dispatch(logged());
    e.preventDefault()
  };
  const schema = Yup.object().shape({
    Username: Yup.string().required("Please enter your username"),
    Password: Yup.string().required("Please enter your password")
  })

  return (
    <div onClick={handleModalClose} className="login-modal-overlay">
      <div
        onClick={(e) => e.stopPropagation()}
        className="login-modal-container"
      >
        <Button className="close-login-button" variant="outlined" onClick={handleModalClose}>
          X
        </Button>
        <Formik
        initialValues={{
          Username: "",
          Password: ""
        }}
        onSubmit={(values) => {
          alert(`Welcome Back ${values.Username}`)
          handleLogin()
        }}
        validationSchema={schema}
        >
          {({
            handleSubmit,
            handleChange,
            values,
            errors,
            handleBlur,
            touched,
          }) => (
         <form
         className="login-form"
         onSubmit={handleSubmit}
         noValidate
         >  
        <TextField
          name="Username"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.Username}
          id="standard-helperText"
          helperText="Email/User Name"
          defaultValue="User@mail.com"
          label="User Name"
          type="search"
          variant="standard"
        />
        <p className="error">
            {errors.Username && touched.Username && errors.Username}
        </p>
        <TextField
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.Password}
          name="Password"
          id="standard-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="standard"
        />
        <p className="error">
            {errors.Password && touched.Password && errors.Password}
        </p>
        <Button type="submit" className="login-button" variant="contained">Log In</Button>
        <br />
        <Button className="not-reg-button" variant="outlined" onClick={() => dispatch(regisOpened()) && handleModalClose()}>
          Not registered?
        </Button>
        </form>
        )}
        </Formik>
      </div>
    </div>
  );
};

export default LoginModal;
