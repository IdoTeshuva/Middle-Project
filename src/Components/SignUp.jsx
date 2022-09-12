import { useFormik } from "formik";
import { basicSchema } from "./schemas/indexBasicForm";
import "./sign-up.css";
import { Button, TextField } from "@mui/material";
import { regisNotOpened, loginOpened} from "../counterSlice";
import { useDispatch } from "react-redux";

const SignUp = () => {
  const handleModalClose = () => {
    dispatch(regisNotOpened());
    dispatch(loginOpened());}
const dispatch = useDispatch();

  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      email: "",
      username: "",
      age: "",
      password: "",
      confirmPassword: "",
    },
    
    validationSchema: basicSchema 
  });

  return (
    <div >

    <form  className="main-signup" onSubmit={handleSubmit} autoComplete="off">

      
      <label htmlFor="email">Email</label>
      <TextField
        size="small"
        id="Email"
        type="email"
        placeholder="enter your email"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        className={errors.email && touched.email ? "input-error" : ""}
      />
      {errors.email && touched.email && <p className="error">{errors.email}</p>}
      

      <label htmlFor="username">Username</label>
      <TextField
        size="small"
        id="username"
        type="text"
        placeholder="enter your username"
        value={values.username}
        onChange={handleChange}
        onBlur={handleBlur}
        className={errors.username && touched.username ? "input-error" : ""}
      />
      {errors.username && touched.username && <p className="error">{errors.username}</p>}


      <label htmlFor="age">Age</label>
      <TextField
        size="small"
        id="age"
        type="number"
        placeholder="enter your age"
        value={values.age}
        onChange={handleChange}
        onBlur={handleBlur}
        className={errors.age && touched.age && errors.age}
      />
      {errors.age && touched.age && <p className="error">{errors.age}</p>}



      <label htmlFor="password">Password</label>    
      <TextField
        size="small"
        id="password"
        type="password"
        placeholder="enter your password"
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        className={errors.password && touched.password ? "input-error" : ""}
      />
      {errors.password && touched.password && (
        <p className="error">{errors.password}</p>
      )}


      <label htmlFor="confirm Password">Confirm password</label>
      <TextField
        size="small"
        id="confirmPassword"
        type="password"
        placeholder="confirm password"
        value={values.confirmPassword}
        onChange={handleChange}
        onBlur={handleBlur}
        className={
          errors.confirmPassword && touched.confirmPassword ? "input-error" : ""
        }
      />
      {errors.confirmPassword && touched.confirmPassword && (
        <p className="error">{errors.confirmPassword}</p>
      )}


      <Button type="submit" className="signup-button" disabled={isSubmitting} variant="contained">sign up</Button>
      <br />
      <Button className="already-button" onClick={handleModalClose} variant="outlined" >Already have an account?</Button>
    
    </form>
    </div>
  );
};

export default SignUp;
