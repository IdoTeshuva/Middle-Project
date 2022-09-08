import "./ehud-banai-info.css"
import AnimatedPage from "../Components/AnimatedPage";

const Ehud = () => {
    return(
     <AnimatedPage>
        <div className="main">
            <div className="info-card">

            <div className="ehud-banai-img"></div>
            <h1>Ehud Banai</h1>
            <p>Ehud Banai was born in Jerusalem. His father was the actor Yaakov Banai, one of the Banai siblings. The family moved to Givatayim when Banai was four. At the age of ten he learned to play the cello. In 1971 he was drafted to the Israel Defense Forces, and served in the Nahal infantry brigade. After his discharge, he moved to London, where he played in the London Underground for six months.
            anai is married to Odeliah, with whom he has three daughters.</p>
            <iframe 
            width="650" 
            height="200" 
            src="https://www.youtube.com/embed/eonD8jTygTM"
            title="YouTube video player"
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen>               
            </iframe>
            </div>
        </div>
    </AnimatedPage>
    );
};
export default Ehud;