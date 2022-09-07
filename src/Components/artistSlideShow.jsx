import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./artist-slide-show.css";
import { Autoplay, Pagination, Navigation } from "swiper";

const ArtistSlideShow = () => {
  return (
    <>
      <Swiper
        spaceBetween={5}
        slidesPerView={2}
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
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="artist-overlay">
            <h1 className="artist-header">תמיר גרינברג</h1>
          </div>
          <img
            src="https://images.maariv.co.il/image/upload/f_auto,fl_lossy/c_fill,g_faces:center,h_792,w_900/703016"
            alt=""
          />
        </SwiperSlide>

        <SwiperSlide>
          <div className="artist-overlay">
            <h1 className="artist-header">עומר אדם</h1>
          </div>
          <img
            src="https://images.jpost.com/image/upload/f_auto,fl_lossy/t_JM_ArticleMainImageFaceDetect/434079"
            alt=""
          />
        </SwiperSlide>

        <SwiperSlide>
          <div className="artist-overlay">
            <h1 className="artist-header">אביתר בנאי</h1>
          </div>
          <img
            src="https://images.maariv.co.il/image/upload/f_auto,fl_lossy/c_fill,g_faces:center,w_500/409279"
            alt=""
          />
        </SwiperSlide>

        <SwiperSlide>
          <div className="artist-overlay">
            <h1 className="artist-header">עידן רייכל</h1>
          </div>
          <img
            src="https://nillydagan.com/media/k2/items/cache/2293e4482ba4cc3c3a287dbbf30f9136_XL.jpg"
            alt=""
          />
        </SwiperSlide>

        <SwiperSlide>
          <div className="artist-overlay">
            <h1 className="artist-header">להקת שלוה</h1>
          </div>
          <img
            src="https://www.eventim.co.il/obj/media/IL-eventim/teaser/222x222/2022/psanterikanaf-teaser.jpg"
            alt=""
          />
        </SwiperSlide>

        <SwiperSlide>
          <div className="artist-overlay">
            <h1 className="artist-header">תקוה 6</h1>
          </div>
          <img
            src="https://upload.wikimedia.org/wikipedia/he/d/d9/%D7%94%D7%AA%D7%A7%D7%95%D7%95%D7%94_6.jpg"
            alt=""
          />
        </SwiperSlide>

        <SwiperSlide>
          <div className="artist-overlay">
            <h1 className="artist-header">אביב גפן</h1>
          </div>
          <img
            src="https://images.maariv.co.il/image/upload/f_auto,fl_lossy/c_fill,g_faces:center,h_912,w_1200/662505"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default ArtistSlideShow;
