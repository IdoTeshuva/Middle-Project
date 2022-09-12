import { Formik } from "formik";
import { useState } from "react";
import { basicSchema } from "./schemas/indexBasicForm";
import "./sign-up.css";
import { Button, TextField } from "@mui/material";
import { regisNotOpened, loginOpened} from "../counterSlice";
import { useDispatch } from "react-redux";
import * as Yup from "yup"

const SignUp = () => {
  const handleModalClose = () => {
    dispatch(regisNotOpened());
    dispatch(loginOpened());}
const dispatch = useDispatch();

const schema = Yup.object().shape({
  email: Yup.string().required("Please enter email").email("Not a valid email"),
  username: Yup.string().required("please enter username"),
  age: Yup.number().positive().integer().required("please enter your age"),
  password: Yup.string().min(8).required("please enter password"),
  confirmpassword: Yup.string().oneOf(Yup.ref("password"), null).required()
})
  return (
    <div >
    <Formik
    initialValues={{
      email: "",
      username: "",
      age: "",
      password: "",
      confirmpassword: ""
    }}
    onSubmit={(values) => {
      //your code
    }}
    validationSchema = {schema}
    >
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        errors,
        touched
      })=> (
    
    <form  className="main-signup" onSubmit={handleSubmit} autoComplete="off">

      
      <label htmlFor="email">Email</label>
      <TextField
        size="small"
        id="email"
        type="email"
        placeholder="enter your email"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        className={errors.email && touched.email ? "input-error" : ""}
      />
      <p>{errors.email && touched.email && errors.email}</p>
      

      <label htmlFor="username">username</label>
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
      <p>{errors.username && touched.username && errors.username}</p>


      <label htmlFor="age">age</label>
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
      <p>{errors.age && touched.age && errors.age}</p>



      <label htmlFor="password">password</label>    
      <TextField
        size="small"
        id="password"
        type="password"
        placeholder="enter your password"
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <p>{errors.password && touched.password && errors.password}</p>



      <label htmlFor="confirmPassword">confirm password</label>
      <TextField
        size="small"
        id="confirmPassword"
        type="password"
        placeholder="confirm password"
        value={values.confirmPassword}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <p>{errors.confirmpassword && touched.confirmpassword && errors.confirmpassword}</p>



      <Button type="submit" className="signup-button" variant="contained">sign up</Button>
      <br />
      <Button className="already-button" onClick={handleModalClose} variant="outlined" >Already have an account?</Button>
    
    </form>
    )}
    </Formik>
    </div>
  );
};

export default SignUp;
