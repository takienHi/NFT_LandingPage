import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar } from 'swiper';

import 'tippy.js/dist/tippy.css';
import { bidsData } from '../../data/bids_data';
import Tippy from '@tippyjs/react';
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md';
import Likes from '../Likes/Likes';
import { Link } from 'react-router-dom';
import Card from '../Cards/Card';

const BidsCarousel = () => {
  const handleClick = () => {
    console.log('clicked on ');
  };

  return (
    <>
      <Swiper
        modules={[Navigation, Scrollbar]}
        spaceBetween={30}
        slidesPerView='auto'
        loop={true}
        breakpoints={{
          240: {
            slidesPerView: 1,
          },
          565: {
            slidesPerView: 2,
          },
          1000: {
            slidesPerView: 3,
          },
          1100: {
            slidesPerView: 4,
          },
        }}
        navigation={{
          nextEl: '.bids-swiper-button-next',
          prevEl: '.bids-swiper-button-prev',
        }}
        className={' card-slider-4-columns !py-5'}
      >
        {bidsData.map((item: any) => {
          const { id, image, title, bid_number, eth_number, react_number } = item;
          const itemLink = image.split('/').slice(-1).toString().replace('.jpg', '');
          return (
            <SwiperSlide className='text-white' key={id}>
              <Card
                itemLink={itemLink}
                title={title}
                image={image}
                bid_number={bid_number}
                eth_number={eth_number}
                react_number={react_number}
                handleClick={handleClick}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
      {/* <!-- Slider Navigation --> */}
      <div className='group bids-swiper-button-prev swiper-button-prev shadow-white-volume absolute !top-1/2 !-left-4 z-10 -mt-6 flex !h-12 !w-12 cursor-pointer items-center justify-center rounded-full bg-white p-3 text-jacarta-700 text-xl sm:!-left-6 after:hidden'>
        <MdKeyboardArrowLeft />
      </div>
      <div className='group bids-swiper-button-next swiper-button-next shadow-white-volume absolute !top-1/2 !-right-4 z-10 -mt-6 flex !h-12 !w-12 cursor-pointer items-center justify-center rounded-full bg-white p-3 text-jacarta-700 text-xl sm:!-right-6 after:hidden'>
        <MdKeyboardArrowRight />
      </div>
    </>
  );
};

export default BidsCarousel;
