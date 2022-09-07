// import { ErrorMessage, Formik } from "formik"
// import * as Yup from "yup" 
// import { useState } from "react";
// import "./loginForm.css";


// const SignUpForms = () => {

//     const [openSignForm, setOpenSignForm] = useState(false)

//     const schema = Yup.object().shape({
        
//         email: Yup.string()
//             .required("enter a valid email")
//             .email("make sure that its a valid email"),

//         password: Yup.string()
//             .required("password is a required field")
//             .min(8, "the password must have 8 characters"),

//         firstName: Yup.string()
//             .required("first name is required")
//             .min(2, "please enter a valid name"),

//         lastName: Yup.string()
//             .required("last name is required")
//             .min(2, "please enter a valid name"),

//         phomeNumber: Yup.string()
//             .required("phone number is required")
//             .min(10, "please enter a valid phone number")
//     })

//     return (
        
//         <div className="login-form">

//             <button onClick={() => setOpenSignForm(!openSignForm)}>login</button>

//             {openSignForm && (

//                 <div className="form-overlay">

//                     <div className="form">

//                         <h1>sign in!</h1>

//                         <Formik 
                
//                             initialValues={{email:'',password:''}}
//                             onSubmit = {(values) => alert('numa numa hi' + JSON.stringify(values))}
//                             validationSchema = {schema}>

//                             {({handleSubmit, handleChange, values, errors, handleBlur, touched}) => (
                                
//                                 <form action="" onSubmit={handleSubmit} noValidate> 

//                                     <input
//                                     type="email" 
//                                     name="email" 
//                                     placeholder="email" 
//                                     onChange={handleChange} 
//                                     value={values.email}
//                                     onBlur={handleBlur}
//                                     />

//                                     <p style={{color:'red'}}>{errors.email && touched.email && errors.email}</p>

//                                     <input
//                                     type="password" 
//                                     name="password" 
//                                     placeholder="password"
//                                     onChange={handleChange} 
//                                     value={values.password} 
//                                     onBlur={handleBlur}
//                                     />

//                                     <p>{errors.password && touched.password && errors.password}</p>

//                                     <input 
//                                     type="text"
//                                     name="firstName"
//                                     placeholder="first name" 
//                                     onChange={handleChange} 
//                                     value={values.firstName} 
//                                     onBlur={handleBlur}
//                                     />

//                                     <p>{errors.firstName && touched.firstName && errors.firstNamed}</p>


//                                     <input 
//                                     type="text"
//                                     name="lastName"
//                                     placeholder="last name" 
//                                     onChange={handleChange} 
//                                     value={values.lastName} 
//                                     onBlur={handleBlur}
//                                     />

//                                     <p>{errors.lastName && touched.lastName && errors.lastName}</p>

//                                     <input 
//                                     type="text"
//                                     name="numbers"
//                                     placeholder="phone number" 
//                                     onChange={handleChange} 
//                                     value={values.phoneNumber} 
//                                     onBlur={handleBlur}
//                                     />

//                                     <p>{errors.phoneNumber && touched.phoneNumber && errors.phoneNumber}</p>

//                                     <button className="sub-button" type="submit">submit</button>

//                                 </form>
//                             )}

//                         </Formik> 

//                     </div>

//                </div>  

//             )}

//         </div>

//     )

// }

// export default SignUpForms;