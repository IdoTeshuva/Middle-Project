import { useState } from "react"
import "./calendar.css"
import { motion } from "framer-motion"
import {Button} from "@mui/material"

const Calendar = () => {
    const [open,setOpen] = useState(false)

    return(
        <div>
            <Button className="calendar-button" variant="contained" onClick={() => setOpen(!open)}>Checkout our schedule</Button>
            {open && (
            <motion.div
            initial={{ opacity: 1 , scale: 0.1 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{duration:1}}>

            <div>
                <iframe  className="calendar-iframe" src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=Asia%2FJerusalem&src=aWRvdHNoMUBnbWFpbC5jb20&src=aXcuamV3aXNoI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%237986CB&color=%230B8043" width="450" height="300" frameborder="0" scrolling="no"></iframe>
             </div>
            </motion.div>
            )}
        </div>
    )
}

export default Calendar