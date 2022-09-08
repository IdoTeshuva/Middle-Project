import "./aviv-geffen-info.css"
import AnimatedPage from "../Components/AnimatedPage"

const Aviv = () => {
    return(
     <AnimatedPage>
        <div className="main">
            <div className="info-card">

            <div className="aviv-geffen-img"></div>
            <h1>Aviv Geffen</h1>
            <p>Aviv Geffen born 10 May 1973 is an Israeli rock musician, singer, songwriter and the son of writer and poet Yehonatan Geffen and Nurit Makover, brother of actress Shira Geffen, and an alumnus of Rimon School of Jazz and Contemporary Music. In addition to his solo career, Geffen is a founding member of the band Blackfield,
                 he was also the global music director for WeWork.</p>
                 <iframe 
            width="650" 
            height="200" 
            src="https://www.youtube.com/embed/jyIlgJJoHLU"
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
export default Aviv;