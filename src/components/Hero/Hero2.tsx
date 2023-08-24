import HeroCarousel from '../Carousel/HeroCarousel';

const Hero = () => {
  return (
    <>
      <section className='hero-section relative pt-32 pb-28 lg:pt-32 lg:pb-20'>
        <div className='container mx-auto relative px-4 z-10'>
          <HeroCarousel />
        </div>
      </section>
    </>
  );
};

export default Hero;
