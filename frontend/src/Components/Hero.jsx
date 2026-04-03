import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Navbar from './Navbar';
import line from '../assets/line2.png';
import hero1 from '../assets/hero1.jpg';
import hero2 from '../assets/hero2.jpeg';
import hero3 from '../assets/hero3.jpeg';

const foodImages = [hero1, hero2, hero3];

const Hero = () => {
  return (
    <section id="home" className="relative h-screen w-full">
      <Navbar />
      <Swiper
        modules={[Autoplay, EffectFade, Pagination, Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        loop
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        // pagination={{
        //   clickable: true,
        //   renderBullet: (index, className) =>
        //     `<span class="${className} w-3 h-3 mx-1 rounded-full bg-white opacity-60 
        //      [&.swiper-pagination-bullet-active]:bg-amber-500 [&.swiper-pagination-bullet-active]:opacity-100"></span>`
        // }}
        // navigation={{
        //   nextEl: '.swiper-button-next',
        //   prevEl: '.swiper-button-prev'
        // }}
        className="h-full"
      >
        {foodImages.map((img, i) => (
          <SwiperSlide key={i}>
            <div
              className="h-screen w-full bg-cover bg-center relative"
              style={{ backgroundImage: `url(${img})` }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/25 backdrop-blur-sm"></div>

              {/* Centered Content */}
              <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white px-4">
                <img src={line} alt="divider line" className="mb-4" />
                <h2 className="text-lg md:text-xl mb-4 tracking-widest uppercase animate-fade-in">
                  Where Delight Meets Taste
                </h2>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-slide-up">
                  Plate By Shiru
                </h1>
                <a
                  href="#reservation"
                  className="bg-amber-500 text-black py-3 px-10 rounded-md hover:scale-105 hover:bg-amber-600 transition font-bold"
                >
                  BOOK A TABLE
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom arrows styled with Tailwind */}
      <div className="swiper-button-next text-amber-500 text-3xl hover:scale-110 transition"></div>
      <div className="swiper-button-prev text-amber-500 text-3xl hover:scale-110 transition"></div>
    </section>
  );
};

export default Hero;
