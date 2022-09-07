import AnimatedPage from "./AnimatedPage";
import "./home.css";
import SearchBar from "./SearchBar";
import Events from "./Events";
import ArtistSlideShow from "./ArtistSlideShow";
import SignUp from "./SignUp.jsx";
import { createContext, useState } from "react";
import { motion } from "framer-motion";
const UserContext = createContext()

const Home = () => {

  const [id, setId] = useState('')

  return (
    <AnimatedPage>
      <div className="home-background">
        <div className="home-container">
          <SearchBar />
          <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{duration:1}}>
          <img className="main-text" src="https://i.ibb.co/CP9sbG8/text.png" alt="" />
          </motion.div>
        </div>
        <UserContext.Provider value={{ id: 'events' }}>
          <Events UserContext={UserContext}/>
        </UserContext.Provider>
          <ArtistSlideShow />
          <SignUp/>
      </div>
    </AnimatedPage>
  );
};

export default Home;
