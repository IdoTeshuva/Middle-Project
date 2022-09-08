import { Formik } from "formik";
import * as Yup from "yup";
import React from "react";
import "./contact.css";
import { TextField } from "@mui/material";
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';

const Contact = () => {
  const schema = Yup.object().shape({
    firstName: Yup.string().required("Please Enter Your First Name"),
    lastName: Yup.string().required("Please Enter Your Last Name"),

    contact: Yup.string().max(200, "You can't use more than 200 characters"),
    select: Yup.string().required("Required"),
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
          <form
            onSubmit={handleSubmit}
            noValidate
            className="contact-container"
          >
            <TextField
              id="outlined-search"
              label="First Name"
              type="search"
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
              label="Last Name"
              type="search"
              name="lastName"
              placeholder="Last Name"
              onChange={handleChange}
              value={values.lastName}
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
            <h3 className="how">How Did You Hear About Us?</h3>
            <FormControl sx={{ m: 1, minWidth: 200 }}>
              <InputLabel id="demo-simple-select-label">Choose an option</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Reason"
                onChange={handleChange}
              >
                <MenuItem>From a friend</MenuItem>
                <MenuItem>From a family member</MenuItem>
                <MenuItem>From an online ad</MenuItem>
              </Select>
            </FormControl>


            {values.select === "Other" && (
              <input placeholder="Other..."></input>
            )}
            <p className="error">
              {errors.select && touched.select && errors.select}
            </p>
            <button type="submit">Submit</button>
          </form>
        )}
      </Formik>
    </div>
  );
};
export default Contact;