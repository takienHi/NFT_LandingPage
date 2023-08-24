import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs, Autoplay } from 'swiper';
import { Link } from 'react-router-dom';
import { hero_3_swiper_data } from 'src/data/hero_3_swiper_data';
import Hero from './Hero';

const Hero3 = () => {
  return (
    <>
      {/* <!-- Hero Slider --> */}
      <section className='relative h-screen'>
        <Swiper
          modules={[FreeMode, Navigation, Thumbs, Autoplay]}
          loop={true}
          spaceBetween={0}
          navigation={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          className='full-slider h-screen'
        >
          <SwiperSlide>
            <Hero />
          </SwiperSlide>
          {hero_3_swiper_data.map((item: any) => {
            const { image, id, title, name, titleLink, userLink } = item;
            return (
              <SwiperSlide key={id}>
                <div className='swiper-slide after:bg-jacarta-900/60 after:absolute after:inset-0'>
                  <div className='container relative z-10 h-full pt-40'>
                    <h2 className='font-display text-2xl font-semibold text-white'>
                      <Link to={titleLink}>
                        <div>{title}</div>
                      </Link>
                    </h2>
                    <Link to={userLink}>
                      <div className='text-2xs font-medium text-white'>{name}</div>
                    </Link>
                  </div>

                  <img src={image} className='absolute inset-0 h-full w-full object-cover' alt={title} />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
    </>
  );
};

export default Hero3;
