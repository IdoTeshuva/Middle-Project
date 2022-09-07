// import { ErrorMessage, Formik } from "formik"
// import * as Yup from "yup" 
// import { useState } from "react";
// import "./loginForm.css";


// const LoginForms = () => {

//     const [openForm, setOpenForm] = useState(false)

//     const schema = Yup.object().shape({
        
//         email: Yup.string()
//         .required("pls enter a valid email")
//         .email("make sure that its a valid email"),

//         password: Yup.string()
//         .required("password is a required field")
//         .min(8, "the password must have 8 characters")

//     })

//     return (
        
//         <div className="login-form">

//             <button onClick={() => setOpenForm(!openForm)}>login</button>

//             {openForm && (

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

// export default LoginForms;