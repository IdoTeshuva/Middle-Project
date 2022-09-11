import * as yup from "yup"; 

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/

 export const basicSchema = yup.object().shape({
    email: yup.string().email("enter a valid email").required("Please enter email"),
    username: yup.string().required("Please enter username"),
    age: yup.number().positive().integer().required("Please enter age"),
    password: 
        yup.string()
        .min(8)
        .matches(passwordRules, {message: "please enter a strong password"})
        .required("required"),
    confirmPassword: yup.string().oneOf([yup.ref('password'), null]).required()
});