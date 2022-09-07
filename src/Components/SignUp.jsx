import { useFormik } from "formik";
import { useState } from "react";
import { basicSchema } from "./schemas/indexBasicForm";
import "./sign-up.css";

const onSubmit = async (actions) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
};

const SignUp = () => {
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
    validationSchema: basicSchema,
    onSubmit,
  });

  const [signUpModal, setSignUpModal] = useState(false)

  console.log(errors);

  return (
    <div className="main-signup">

    
    <form onSubmit={handleSubmit} autoComplete="off">
      <label htmlFor="email">Email</label>
      <br /> {/*EDIT*/}
      <input
        id="email"
        type="email"
        placeholder="enter your email"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        className={errors.email && touched.email ? "input-error" : ""}
      />
      {errors.email && touched.email && <p className="error">{errors.email}</p>}
      <br />
      {/*EDIT*/}
      <label htmlFor="username">username</label>
      <br /> 
      {/*EDIT*/}
      <input
        id="username"
        type="text"
        placeholder="enter your username"
        value={values.username}
        onChange={handleChange}
        onBlur={handleBlur}
        className={errors.username && touched.username ? "input-error" : ""}
      />
      {errors.username && touched.username && <p className="error">{errors.username}</p>}

      <br />
      {/*EDIT*/}
      <label htmlFor="age">age</label>
      <br />
      {/*EDIT*/}
      <input
        id="age"
        type="number"
        placeholder="enter your age"
        value={values.age}
        onChange={handleChange}
        onBlur={handleBlur}
        className={errors.age && touched.age ? "input-error" : ""}
      />
      {errors.age && touched.age && <p className="error">{errors.age}</p>}
      <br />
      {/*EDIT*/}
      <label htmlFor="password">password</label>
      <br />
      {/*EDIT*/}
      <input
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
      <br />
      {/*EDIT*/}
      <label htmlFor="confirmPassword">confirm password</label>
      <br />
      {/*EDIT*/}
      <input
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
      <br />
      {/*EDIT*/}
      <br />
      {/*EDIT*/}
      <button disabled={isSubmitting}>submit</button>
    </form>
    </div>
  );
};

export default SignUp;
