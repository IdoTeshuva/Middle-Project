import"./about-us.css"
import {
    useScroll,
    motion,
    useTransform,
    useMotionValue
  } from 'framer-motion';
  import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const About = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 300], [0, 200]);

    return(
        <div className="main-about-us">
            <div className="main-photos">
               <motion.div
                style={{ y: y1 }}>
                <div className="stage"></div>
               </motion.div>
                <h1 className="header">About us</h1>
                <p className="scroll">SCROLL DOWN</p>
                <ArrowDownwardIcon className="scroll-icon"/>
                <div className="crowd"></div>

                <div className="about-us-text">
                    <h1>About Us</h1>
                    <h4>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                     Excepturi aliquid ipsam repellat ea asperiores nihil ab harum possimus debitis quam voluptas, 
                     explicabo sit totam, iste temporibus quis? Suscipit, temporibus dolorem?</h4>
                </div>
            </div>
        </div>
    )
}

export default About