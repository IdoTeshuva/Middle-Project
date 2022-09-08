import { useState } from "react"
import "./payment.css"
import { Button, TextField } from "@mui/material";

const Payment = (props) => {
    const [success,setSuccess] = useState(false)
    const [counter, setCounter] = useState (0)
    const Price = counter*60

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
                            <label>Full Name</label>
                            <TextField size="small" type="text" />
                            <br />
                            <label>Card Number</label>
                            <TextField  size="small" type="text" />
                            <br />
                            <div className="form__cardInfo">
                                <div className='formGroup'>
                                    <label>Expiry Date</label>
                                    <TextField  size="small" className="inputShort" type="string" placeholder='MM/YY' />
                                </div >
                                <div className='formGroup'>
                                    <label>CVV</label>
                                    <TextField size="small" className="inputShort" type="string" placeholder='---' />
                                </div >
                            </div >
                        </div>
                        
                        <Button className="pay-button" onClick={() => setSuccess(!success)}>Make Pay</Button>
                    </div>

                </div>
            )}
            </>
    )
}

export default Payment