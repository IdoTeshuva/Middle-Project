import { useState } from "react"
import "./payment.css"
import { Button, TextField } from "@mui/material";
import * as Yup from "yup";
import { Formik } from "formik";
import SelectPaymer from "./SelectPaymer";


const Payment = (props) => {
    const [counter, setCounter] = useState (0)
    const Price = counter*60

    const schema = Yup.object().shape({
        FullName: Yup.string().required("Please enter your full name"),
        CardNumber: Yup.string().max(16, "Not a valid card number").min(16, "Not a valid card number").required("Please enter your card number"),
        ExpDate: Yup.string().max(5, "Not a valid date").min(5,"Not a valid date").required("Please enter your expiration date"),
        CVV: Yup.string().max(3,"Not a valid CVV").min(3,"Not a valid CVV").required("Please enter your CVV")
    })

    return (
        <>
        {props.pay && (
            <div className="payOverlay">            
                    <div className="payModal">

                        <Button variant="outlined" className='close-button' onClick={() => props.setPay(!props.pay)} >X</Button>
                        <div className='tickets'>
                        <h2>How many tickets?</h2>
                        <br />
                        <Button className='countBtn' onClick={() => setCounter(counter + 1)}>+</Button>
                        <span className='counter'> {counter} </span>
                        <Button className='countBtn' onClick={() => setCounter(counter - 1)}>-</Button>
                        <br />
                        <label>Price:</label> <span className='counter'> {Price}₪</span>
                        </div>
                        <hr />
                        <div className='credit'>
                          <Formik
                          initialValues={{
                            FullName: "",
                            CardNumber: "",
                            ExpDate: "", 
                            CVV: ""
                          }}
                          onSubmit={(values) => {
                                alert(`Paid succesfully! Have a great time ${values.FullName}`)
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
                                autoComplete="off"
                                >
                            
                            
                            <label>Full Name</label>
                            <br />
                            <TextField 
                            name="FullName"
                            onChange={handleChange}
                            value={values.FullName}
                            onBlur={handleBlur}
                            size="small" 
                            type="text" />
                            <p className="error">
                                {errors.FullName && touched.FullName && errors.FullName}
                            </p>
                            <br />
                            <label>Card Number</label>
                            <br />
                            <TextField 
                            onChange={handleChange}
                            value={values.CardNumber}
                            onBlur={handleBlur}
                            name="CardNumber"
                            size="small"
                            type="text" />
                            <p className="error">
                                {errors.CardNumber && touched.CardNumber && errors.CardNumber}
                            </p>
                            <br />
                                <div className='formGroup'>
                                    <SelectPaymer />
                                </div>
                                <br />
                                <br />
                            <div className="form__cardInfo">
                                <div className='formGroup'>
                                    <label>Expiry Date</label>
                                    <TextField 
                                     onChange={handleChange}
                                     value={values.ExpDate}
                                     onBlur={handleBlur}
                                     name="ExpDate"
                                     size="small"
                                     className="inputShort"
                                     type="string"
                                     placeholder='MM/YY' />
                                     <p className="error">
                                        {errors.ExpDate && touched.ExpDate && errors.ExpDate}
                                    </p>
                                </div >
                                <div className='formGroup'>
                                    <label>CVV</label>
                                    <TextField 
                                    onChange={handleChange}
                                    value={values.CVV}
                                    onBlur={handleBlur}
                                    name="CVV"
                                    size="small" 
                                    className="inputShort" 
                                    type="string" 
                                    placeholder='---' />
                                    <p className="error">
                                        {errors.CVV && touched.CVV && errors.CVV}
                                    </p>
                                </div >
                            </div >
                            <Button type="submit" className="pay-button">Pay</Button>
                            </form>
                            )}
                        </Formik>
                        </div>
                        
                    </div>

                </div>
            )}
            </>
    )
}

export default Payment