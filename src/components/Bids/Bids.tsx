import 'swiper/css';
import 'swiper/css/navigation';
import 'tippy.js/dist/tippy.css';
import HeadLine from 'src/components/HeadLine';
import BidsCarousel from 'src/components/Carousel/BidsCarousel';
import BgWhite from '../SectionBackground/BgWhite';

type Props = {
  bgWhite?: boolean;
};

const Bids = ({ bgWhite }: Props) => {
  return (
    <section className={'relative pt-10 pb-24'}>
      {/* <!-- Hot Bids --> */}
      {bgWhite && <BgWhite />}
      <div className='container'>
        <HeadLine
          text='Hot Bids'
          image='https://cdn.jsdelivr.net/npm/emoji-datasource-apple@7.0.2/img/apple/64/1f525.png'
          classes='font-display text-jacarta-700 mb-8 text-center text-3xl dark:text-white'
        />

        <div className='relative'>
          {/* <!-- Slider --> */}
          <BidsCarousel />
        </div>
      </div>
      {/* <!-- end hot bids --> */}
    </section>
  );
};

export default Bids;
