import AnimatedPage from "../Components/AnimatedPage";
import "./home.css";
import SearchBar from "../Components/SearchBar";
import Events from "./Events";
import ArtistSlideShow from "../Components/artistSlideShow"
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { selectName,selectOpen  } from "../counterSlice";
import SignUpModal from "../Components/SignUpModal";
import "../Components/signup-modal.css"
import LoginModal from "../Components/LoginModal";
import Footer from "../Components/Footer";
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import Calendar from "../Components/Calendar";

const Home = () => {
  const name = useSelector(selectName);
  const isOpen = useSelector(selectOpen);



  return (
    <AnimatedPage>
      <div className="home-background">
        <div className="home-container">
          <button onClick={()=>{window.scrollTo({top:0,left:0,behavior: "smooth"})}} href="#" className="up-button"><ArrowCircleUpIcon /></button>
         
        <div>
          <SearchBar />
        </div>

          {isOpen &&
        <LoginModal/>}
          {name &&
        <SignUpModal/>}
          <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{duration:1}}>
          <img className="main-text" src="https://i.ibb.co/CP9sbG8/text.png" alt="" />
          </motion.div>
        </div>
          
        <div>
          <Events/>
          <div className="mid-background">
          <motion.div
            initial={{ opacity: 1 , x: -500, scale: 1}}
            whileInView={{ opacity: 1, x:0, scale: 1 }}
            viewport={{ once: true }}
            transition={{duration:1}}
            >
              <h1>It's different when it's LIVE.</h1>
          </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 1 , scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{duration:1}}
            >

          <ArtistSlideShow />
          </motion.div>
          <div className="calendar-div">
          <Calendar />
          </div>
          <Footer></Footer>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Home;
