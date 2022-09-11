import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import React, { useState } from "react";
import BuyTickets from "../Components/BuyTickets";
import { motion } from "framer-motion";
import Payment from "../Components/Payment";
import Calendar from "../Components/Calendar";
import "./events.css"

const Events = () => {
  const [pay, setPay] = useState(false);
  let windowwidth = window.innerWidth;

  return (
    <>
      <Payment pay={pay} setPay={setPay} />
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{duration:1}}>
        <Swiper
          slidesPerView={windowwidth < 768 ? 1 : 4}
          spaceBetween={5}
          loop={true}
          loopFillGroupWithBlank={true}
          centeredSlides={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Autoplay, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <BuyTickets setPay={setPay} pay={pay} />
            <img
              src="https://www.zappa-club.co.il/obj/media/IL-eventim/teaser/evo/2x2/2022/tamirg-2x2-1807.jpeg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <BuyTickets setPay={setPay} pay={pay} />
            <img
              src="https://www.zappa-club.co.il/obj/media/IL-eventim/teaser/evo/2x2/2022/hatikva6-2x2-2407.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <BuyTickets setPay={setPay} pay={pay} />
            <img
              src="https://www.zappa-club.co.il/obj/media/IL-eventim/teaser/evo/2x2/2022/evyatar-2x2-0908.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <BuyTickets setPay={setPay} pay={pay} />
            <img
              src="https://www.zappa-club.co.il/obj/media/IL-eventim/teaser/evo/2x2/2022/avivg-2x2-1708.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <BuyTickets setPay={setPay} pay={pay} />
            <img
              src="https://www.zappa-club.co.il/obj/media/IL-eventim/teaser/evo/2x2/2022/7canaf-2x2-2212.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <BuyTickets setPay={setPay} pay={pay} />
            <img
              src="https://www.zappa-club.co.il/obj/media/IL-eventim/teaser/evo/2x2/2022/raichel-2x2-0409.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <BuyTickets setPay={setPay} pay={pay} />
            <img
              src="https://www.zappa-club.co.il/obj/media/IL-eventim/teaser/evo/2x2/2022/omeradam-2x2-1708.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <BuyTickets setPay={setPay} pay={pay} />
            <img
              src="https://www.zappa-club.co.il/obj/media/IL-eventim/teaser/evo/2x2/2022/mercuryrev-2x2-3108.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <BuyTickets setPay={setPay} pay={pay} />
            <img
              src="https://www.zappa-club.co.il/obj/media/IL-eventim/teaser/evo/2x2/2022/mashinaceleb-2x2-2606.jpg"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </motion.div>
      {/* <Calendar /> */}
    </>
  );
};

export default Events;
