import "./buy-tickets.css"

const BuyTickets = (props) => {
    return(
            <div className='img-overlay'>
             <button className="buy-t-btn" onClick={() => props.setPay(!props.pay)}>
                Buy Tickets
             </button>
            </div>
    )
}

export default BuyTickets