import AnimatedPage from "../Components/AnimatedPage";
import { Formik } from "formik";
import * as Yup from "yup";
import React from "react";
import "./contact.css";
import { TextField } from "@mui/material";

const Contact = () => {
  const schema = Yup.object().shape({
    firstName: Yup.string().required("Please Enter your first name"),
    lastName: Yup.string().required("Please Enter your last name"),

    contact: Yup.string().max(200, "maximum 200 charachters"),
    select: Yup.string().required("required"),
  });
  return (
    <div className="formik1">
      <Formik
        initialValues={{
          firstName: "",
          contact: "",
          select: "",
        }}
        onSubmit={(values) => {
          alert(JSON.stringify(values));
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
          <form onSubmit={handleSubmit} noValidate>
            <TextField
              id="standard-search"
              variant="standard"
              type="text"
              name="firstName"
              placeholder="First Name"
              onChange={handleChange}
              value={values.firstName}
              onBlur={handleBlur}
            />
            <p className="error">
              {errors.firstName && touched.firstName && errors.firstName}
            </p>
            <TextField
              id="standard-search"
              variant="standard"
              type="text"
              name="lastName"
              placeholder="Last Name"
              onChange={handleChange}
              value={values.lasttName}
              onBlur={handleBlur}
            />
            <p className="error">
              {errors.lastName && touched.lastName && errors.lastName}
            </p>

            <textarea
              id="standard-search"
              variant="standard"
              type="text"
              name="contact"
              placeholder="What's On Your Mind?"
              onChange={handleChange}
              value={values.contact}
            />
            <p className="error">
              {errors.contact && touched.contact && errors.contact}
            </p>
            <h1>How Did You Hear About Us?</h1>
            <select
              type="select"
              name="select"
              placeholder="How did you hear from us?"
              onChange={handleChange}
              value={values.select}
              onBlur={handleBlur}
            >
              <option>Friend</option>
              <option>Family</option>
              <option>Facebook</option>
              <option>Instagram</option>
              <option>Other</option>
            </select>
            <p className="error">
              {errors.select && touched.select && errors.select}
            </p>
            <button type="submit">Login</button>
          </form>
        )}
      </Formik>
    </div>
  );
};
export default Contact;
