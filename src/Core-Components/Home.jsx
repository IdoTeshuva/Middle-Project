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

const Home = () => {
  const name = useSelector(selectName);
  const isOpen = useSelector(selectOpen);



  return (
    <AnimatedPage>
      <div className="home-background">
        <div className="home-container">
          <SearchBar />


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
          <Events/>
          <ArtistSlideShow />
      </div>
    </AnimatedPage>
  );
};

export default Home;
