import { useState } from "react"
import "./payment.css"
const Payment = (props) => {
    const [success,setSuccess] = useState(false)
    const [counter, setCounter] = useState (0)
    const Price = counter*60

    return (
        <>
        {props.pay && (
            <div className="payOverlay">            
                    <div className="payModal">
                        <button className='Close' onClick={() => props.setPay(!props.pay)} >X</button>
                        <div className='tickets'>
                        <h2>How many tickets?</h2>
                        <br />
                        <button className='countBtn' onClick={() => setCounter(counter + 1)}>+</button>
                        <span className='counter'> {counter} </span>
                        <button className='countBtn' onClick={() => setCounter(counter - 1)}>-</button>
                        <br />
                        <label>Price:</label> <span className='counter'> {Price}₪</span>
                        </div>
                        <hr />
                        <div className='credit'>
                            <label>Full Name</label>
                            <input type="text" />
                            <br />
                            <label>Card Number</label>
                            <input type="text" />
                            <br />
                            <div className="form__cardInfo">
                                <div className='formGroup'>
                                    <label>Expiry Date</label>
                                    <input className="inputShort" type="string" placeholder='MM/YY' />
                                </div >
                                <div className='formGroup'>
                                    <label>CVV</label>
                                    <input className="inputShort" type="string" placeholder='---' />
                                </div >
                            </div >
                        </div>
                        
                        <button onClick={() => setSuccess(!success)} className='pay'>Make Pay</button>
                    </div>

                </div>
            )}
            </>
    )
}

export default Payment