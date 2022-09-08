import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./artist-slide-show.css";
import { Autoplay, Navigation } from "swiper";
import { Link } from "react-router-dom";

const ArtistSlideShow = () => {
  let windowwidth = window.innerWidth;

  return (
    <>
      <Swiper
        spaceBetween={5}
        slidesPerView={windowwidth < 768 ? 1 : 4}
        loop={true}
        loopFillGroupWithBlank={true}
        centeredSlides={true}
        autoplay={{
          delay: 2800,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="artist-overlay">
            <h1 className="artist-header">Tamir Grinberg</h1>
            <Link to="./TamirGrinberg">
              <button className="info-button">Info</button>
            </Link>
          </div>
          <img
            src="https://www.zappa-club.co.il/obj/media/IL-eventim/teaser/evo/1x1/2022/tamirglivepark-poster.jpg"
            alt=""
          />
        </SwiperSlide>

        <SwiperSlide>
          <div className="artist-overlay">
            <h1 className="artist-header">Omer Adam</h1>
            <Link to="./OmerAdam">
              <button className="info-button">Info</button>
            </Link>
          </div>
          <img
            src="https://www.zappa-club.co.il/obj/media/IL-eventim/teaser/evo/1x1/2022/omeradam-1x1-1708.jpg"
            alt=""
          />
        </SwiperSlide>

        <SwiperSlide>
          <div className="artist-overlay">
            <h1 className="artist-header">Evyatar Banai</h1>
            <Link to="./EvyatarBanai">
              <button className="info-button">Info</button>
            </Link>
          </div>
          <img
            src="https://www.zappa-club.co.il/obj/media/IL-eventim/teaser/evo/1x1/2022/eviyatar2-poster.jpg"
            alt=""
          />
        </SwiperSlide>

        <SwiperSlide>
          <div className="artist-overlay">
            <h1 className="artist-header">Ehuad Banai</h1>
            <Link to="./EhudBanai">
              <button className="info-button">Info</button>
            </Link>
          </div>
          <img
            src="https://www.zappa-club.co.il/obj/media/IL-eventim/teaser/evo/1x1/2022/ehud-banai-shuni-poster.jpeg"
            alt=""
          />
        </SwiperSlide>

        <SwiperSlide>
          <div className="artist-overlay">
            <h1 className="artist-header">Shotei Hanevuah</h1>
            <Link to="./ShoteiHanevuah">
              <button className="info-button">Info</button>
            </Link>
          </div>
          <img
            src="https://www.zappa-club.co.il/obj/media/IL-eventim/teaser/evo/1x1/2022/shotei2-poster.jpg"
            alt=""
          />
        </SwiperSlide>

        <SwiperSlide>
          <div className="artist-overlay">
            <h1 className="artist-header">Idan Haviv</h1>
            <Link to="./IdanHaviv">
              <button className="info-button">Info</button>
            </Link>
          </div>
          <img
            src="https://www.zappa-club.co.il/obj/media/IL-eventim/teaser/evo/1x1/2022/haviv-idan-shuni-poster.jpeg"
            alt=""
          />
        </SwiperSlide>

        <SwiperSlide>
          <div className="artist-overlay">
            <h1 className="artist-header">Aviv Geffen</h1>
            <Link to="./AvivGeffen">
              <button className="info-button">Info</button>
            </Link>
          </div>
          <img
            src="https://www.zappa-club.co.il/obj/media/IL-eventim/teaser/evo/1x1/2021/gefen-poster.jpg"
            alt=""
          />
        </SwiperSlide>

        <SwiperSlide>
          <div className="artist-overlay">
            <h1 className="artist-header">Yehuda Poliker</h1>
            <Link to="./YehudaPoliker">
              <button className="info-button">Info</button>
            </Link>
          </div>
          <img
            src="https://www.zappa-club.co.il/obj/media/IL-eventim/teaser/evo/1x1/2021/poliker1-poster.jpg"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default ArtistSlideShow;
