import AnimatedPage from "../Components/AnimatedPage";
import "./evyatar-banai-info.css"


const Evyatar = () => {
    return(
     <AnimatedPage>
        <div className="main">
            <div className="info-card">
            <div className="evyatar-banai-img"></div>
            <h1>Evyatar Banai</h1>
            <p>Evyatar Banai  is an Israeli musician, singer and songwriter. Banai was born in 1973 in Beersheba. The extended Banai family is notable as an outstanding family of Israeli artists; Eviatar is the younger brother of the actress Orna Banai and the singer and songwriter Meir Banai,
                 although their father, Yitzhak Banai, was a judge.</p>
            <br />
            <div>
            <iframe 
            width="650" 
            height="200" 
            src="https://www.youtube.com/embed/RRxFeLjWCZ0"
            title="YouTube video player"
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen>               
            </iframe>
            </div>
            </div>
        </div>
    </AnimatedPage>
    );
};
export default Evyatar;