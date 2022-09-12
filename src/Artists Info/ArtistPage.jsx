import { useParams } from "react-router-dom";
import AnimatedPage from "../Components/AnimatedPage";
import "./ArtistPage.css";
import artistsInfo from "./artistsInfo";

const ArtistPage = () => {
  const param = useParams();
  if (!artistsInfo[param.name]) {
    return (
      <h1 style={{ marginTop: "25%", textAlign: "center" }}>
        {param.name} &mdash; NOT FOUND
      </h1>
    );
  }
  const { name, description, iframe, img } = artistsInfo[param.name];
  return (
    <AnimatedPage>
      <div className="main">
        <div className="info-card">
          <img src={img} alt={name} className="artist-img" />
          <div className="card-content">
            <h1>{name}</h1>
            <p>{description}</p>
            <br />
            <div>
              <iframe
                width="500"
                height="300"
                src={iframe}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
};
export default ArtistPage;
