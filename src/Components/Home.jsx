import AnimatedPage from "./AnimatedPage";
import "./home.css";
import SearchBar from "./SearchBar";
import Events from "./Events";
import ArtistSlideShow from "./ArtistSlideShow";
import SignUp from "./SignUp";
import { createContext, useState } from "react";
const UserContext = createContext()

const Home = () => {

  const [id, setId] = useState('')

  return (
    <AnimatedPage>
      <div className="home-background">
        <div className="home-container">
          <SearchBar />
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
