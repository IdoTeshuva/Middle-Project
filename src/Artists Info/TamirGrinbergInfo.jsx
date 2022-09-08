import AnimatedPage from "../Components/AnimatedPage";
import "./tamir-grinberg-info.css"


const Tamir = () => {
    return(
     <AnimatedPage>
        <div className="main">
            <div className="info-card">
            <div className="tamir-grinberg-img"></div>
            <h1>Tamir Grinberg</h1>
            <p>Tamir Greenberg (born October 26, 1994) is an Israeli singer-songwriter, pianist and composer.
                 Winner of the eighth season of the show "The Next Star".</p>
            <br />
            <div>
            <iframe 
            width="650" 
            height="200" 
            src="https://www.youtube.com/embed/Je6LCZH_wF8"
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
export default Tamir;