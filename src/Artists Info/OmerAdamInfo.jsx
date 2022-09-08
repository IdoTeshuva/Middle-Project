import AnimatedPage from "../Components/AnimatedPage";
import "./omer-adam-info.css"


const Omer = () => {
    return(
     <AnimatedPage>
        <div className="main">
            <div className="info-card">
            <div className="omer-adam-img"></div>
            <h1>Omer Adam</h1>
            <p>Omer Adam, born October 22, 1993. is an Israeli singer whose music fuses elements of eastern Mizrahi music (Oriental-Middle Eastern) and Western Pop instrumentation. In 2009, he participated in the seventh season of Kokhav Nolad (in Hebrew כוכב נולד), a popular Idol series show in Israel, but was disqualified because of being underage at the time of application.</p>
            <br />
            <div>
            <iframe 
            width="650" 
            height="200" 
            src="https://www.youtube.com/embed/fXXQBmYuSuk"
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
export default Omer;