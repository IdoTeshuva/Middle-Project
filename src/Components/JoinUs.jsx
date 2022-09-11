import "./join-us.css"
import { useFormik } from "formik";
import { basicSchema } from "./schemas/indexBasicForm";
import { Button, TextField } from "@mui/material";

const JoinUs = () => {

const onSubmit = async (actions) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
};

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
      fullname: "",
      phonenumber: "",
    },
    validationSchema: basicSchema,
    onSubmit,
  });

    return (
        <form>
            <div className="join-us-overlay">
                <div className="join-us-modal">
                    <h1>JOIN US NOW</h1>
                    <h4>leave your detail and we'll contact you</h4>
                    <br />
                    <br />
                    <br />
                    <h4>enter your full name below</h4>
                    <br />

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

                    <br />
                    <br />

                    <h4>enter your phone number below</h4>
                    <br />
                    
                    <TextField
                        size="small"
                        id="age"
                        type="number"
                        placeholder="enter your phone number"
                        value={values.age}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={errors.age && touched.age ? "input-error" : ""}
                    />
                    {errors.age && touched.age && <p className="error">{errors.age}</p>}
                    
                    <br />
                    <br />
                  
                    <Button className="signup-button" disabled={isSubmitting} variant="contained">SUBMIT</Button>
                </div>
            </div>
        </form>
    )
}

export default JoinUs;