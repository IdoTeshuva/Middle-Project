import AnimatedPage from "../Components/AnimatedPage";
import "./yehuda-poliker-info.css"


const Yehuda = () => {
    return(
     <AnimatedPage>
        <div className="main">
            <div className="info-card">
            <div className="yehuda-poliker-img"></div>
            <h1>Yehuda Poliker</h1>
            <p>Yehuda Leon Poliker  born December 25, 1950 is an Israeli singer, songwriter, musician, and painter. Poliker first became known in the 1980s as the lead vocalist for the band Benzene. In 1985, after Benzene broke up,
                 he began a varied solo career that included motifs from rock, pop, and traditional Greek music.</p>
            <br />
            <div>
            <iframe 
            width="650" 
            height="200" 
            src="https://www.youtube.com/embed/hKP601ASJaw"
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
export default Yehuda;