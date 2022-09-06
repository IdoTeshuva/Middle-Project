import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./events.css";
import { Autoplay, Navigation } from "swiper";
import React, { useState } from "react";
import BuyTickets from './BuyTickets';
import { motion } from "framer-motion";
import Payment from './Payment';
import Calendar from './Calendar';

const Events = () => {
    const [pay, setPay]  = useState (false)
    let windowwidth = window.innerWidth

    return (
        <>
    <button onClick={() => console.log()}></button>
        <Payment pay = {pay} setPay = {setPay} />
          <motion.div>
          <Swiper
            slidesPerView={windowwidth < 768 ? 1 : 4}
            spaceBetween={5}
            loop={true}
            loopFillGroupWithBlank={true}
            centeredSlides={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            navigation={true}
            modules={[Autoplay, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
                <BuyTickets setPay = {setPay} pay = {pay} />
                <img src="https://www.zappa-club.co.il/obj/media/IL-eventim/teaser/evo/2x2/2022/tamirg-2x2-1807.jpeg" alt="" /></SwiperSlide>
            <SwiperSlide>
                <BuyTickets setPay = {setPay} pay = {pay} />
                <img src="https://www.zappa-club.co.il/obj/media/IL-eventim/teaser/evo/2x2/2022/hatikva6-2x2-2407.jpg" alt="" /></SwiperSlide>
            <SwiperSlide>
                <BuyTickets setPay = {setPay} pay = {pay} />
                <img src="https://www.zappa-club.co.il/obj/media/IL-eventim/teaser/evo/2x2/2022/evyatar-2x2-0908.jpg" alt="" /></SwiperSlide>
            <SwiperSlide>
                <BuyTickets setPay = {setPay} pay = {pay} />
                <img src="https://www.zappa-club.co.il/obj/media/IL-eventim/teaser/evo/2x2/2022/avivg-2x2-1708.jpg" alt="" /></SwiperSlide>
            <SwiperSlide>
                <BuyTickets setPay = {setPay} pay = {pay} /> 
                <img src="https://www.zappa-club.co.il/obj/media/IL-eventim/teaser/evo/2x2/2022/7canaf-2x2-2212.jpg" alt="" /></SwiperSlide>
            <SwiperSlide>
                <BuyTickets setPay = {setPay} pay = {pay} />
                <img src="https://www.zappa-club.co.il/obj/media/IL-eventim/teaser/evo/2x2/2022/raichel-2x2-0409.jpg" alt="" /></SwiperSlide>
            <SwiperSlide>
                <BuyTickets setPay = {setPay} pay = {pay} />
                <img src="https://www.zappa-club.co.il/obj/media/IL-eventim/teaser/evo/2x2/2022/omeradam-2x2-1708.jpg" alt="" /></SwiperSlide>
            <SwiperSlide>
                <BuyTickets setPay = {setPay} pay = {pay} />
                <img src="https://www.zappa-club.co.il/obj/media/IL-eventim/teaser/evo/2x2/2022/mercuryrev-2x2-3108.jpg" alt="" /></SwiperSlide>
            <SwiperSlide>
                <BuyTickets setPay = {setPay} pay = {pay} />
                <img src="https://www.zappa-club.co.il/obj/media/IL-eventim/teaser/evo/2x2/2022/mashinaceleb-2x2-2606.jpg" alt="" /></SwiperSlide>
          </Swiper>
          </motion.div>  
          <br /> 
          <br /> 
              <Calendar />
        </>
      );
}

export default Events