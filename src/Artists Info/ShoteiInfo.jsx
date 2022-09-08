import AnimatedPage from "../Components/AnimatedPage";
import "./shotei-info.css"


const Shotei = () => {
    return(
     <AnimatedPage>
        <div className="main">
            <div className="info-card">
            <div className="shotei-img"></div>
            <h1>Shotei Ha'nevua</h1>
            <p>Shotei Ha'nevua (שוטי הנבואה), or The Fools of Prophecy, was an Israeli musical group selected as Israel's "Band of the Year" in 2005. The band described its music as a fusion of dub with hip-hop and dance music, with an eastern Mediterranean flavor.
                 The band toured the United States in 2005, performing at major colleges and universities.</p>
            <br />
            <div>
            <iframe 
            width="650" 
            height="200" 
            src="https://www.youtube.com/embed/CMcSQDEt3vs"
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
export default Shotei;