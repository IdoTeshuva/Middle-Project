import "./buyTickets.css"

const BuyTickets = (props) => {
    return(
            <div className='imgOverlay'>
             <button className="btn" onClick={() => props.setPay(!props.pay)}>
                Buy Tickets
             </button>
            </div>
    )
}

export default BuyTickets