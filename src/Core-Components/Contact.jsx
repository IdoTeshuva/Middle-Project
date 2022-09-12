import { Formik } from "formik";
import * as Yup from "yup";
import React from "react";
import "./contact.css";
import { TextField } from "@mui/material";
import { Button } from "@mui/material"

const Contact = () => {
  const schema = Yup.object().shape({
    firstName: Yup.string().required("Please Enter Your First Name"),
    lastName: Yup.string().required("Please Enter Your Last Name"),
    PhoneNumber: Yup.string().required("Please Enter Your Phone Number").max(10, "Not a valid number").min(10, "Not a valid number"),
    contact: Yup.string().max(200, "You can't use more than 200 characters"),
  });
  return (
    <div className="formik1">
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          PhoneNumber: "",
          contact: "",
        }}
        onSubmit={(values) => {
          alert(`Thanks for contacting us, ${values.firstName}`);
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
            onSubmit={handleSubmit}
            noValidate
            className="contact-container"
          >
            <h1>Contact us!</h1>
            <TextField
              id="outlined-search"
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
              id="outlined-search"
              type="text"
              name="lastName"
              placeholder="Last Name"
              onChange={handleChange}
              value={values.lastName}
              onBlur={handleBlur}
            />
            <p className="error">
              {errors.lastName && touched.lastName && errors.lastName}
            </p>

            <TextField
              id="outlined-search"
              type="text"
              name="PhoneNumber"
              placeholder="Phone Number"
              onChange={handleChange}
              value={values.PhoneNumber}
              onBlur={handleBlur}
            />
            <p className="error">
              {errors.PhoneNumber && touched.PhoneNumber && errors.PhoneNumber}
            </p>

            <textarea
              id="standard-search"
              variant="standard"
              type="text"
              className="text-area"
              name="contact"
              placeholder="What's On Your Mind?"
              onChange={handleChange}
              value={values.contact}
            />
            <p className="error">
              {errors.contact && touched.contact && errors.contact}
            </p>
            <Button variant="contained" className="submit-contact" type="submit">Submit</Button>
          </form>
        )}
      </Formik>
    </div>
  );
};
export default Contact;