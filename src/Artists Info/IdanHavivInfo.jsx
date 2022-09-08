import AnimatedPage from "../Components/AnimatedPage";
import "./idan-haviv-info.css"


const Idan = () => {
    return(
     <AnimatedPage>
        <div className="main">
            <div className="info-card">
            <div className="idan-haviv-img"></div>
            <h1>Idan Haviv</h1>
            <p>Idan Raphael Haviv (born February 7, 1980) is an Israeli singer-songwriter, composer, songwriter, musician and actor.</p>
            <br />
            <div>
            <iframe 
            width="650" 
            height="200" 
            src="https://www.youtube.com/embed/vH0MFXV0dcE"
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
export default Idan;