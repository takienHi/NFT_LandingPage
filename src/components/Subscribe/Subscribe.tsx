import BgWhite from '../SectionBackground/BgWhite';

type Props = {
  bgWhite?: boolean;
};

const Subscribe = ({ bgWhite }: Props) => {
  const calltoActionContent = {
    title: 'Earn up to $13 worth of crypto',
    text: `Discover how specific cryptocurrencies work — and get a bit of each crypto to try out for yourself.`,
    btnText: 'Start Earning',
  };
  return (
    <section className='dark:bg-jacarta-800 relative py-24'>
      {bgWhite && <BgWhite />}
      <div className='container'>
        <div className='relative z-10 overflow-hidden rounded-2.5xl px-16 py-24 lg:px-24'>
          <picture className='pointer-events-none absolute inset-0 -z-10 h-[150%] dark:hidden'>
            <img src='/images/gradient.jpg' alt='gradient' className='h-full w-full' />
          </picture>
          <picture className='pointer-events-none absolute inset-0 -z-10 hidden h-[150%] dark:block'>
            <img src='/images/gradient_dark.jpg' alt='gradient dark' className='h-full w-full' />
          </picture>
          <img
            src='/images/crypto-trading/crypto_trading_cta_icons.png'
            alt=''
            className='pointer-events-none absolute top-1/2 right-1/4 -z-10 -translate-y-1/2'
            loading='lazy'
          />
          {/* End images */}

          <div className='lg:flex lg:justify-between'>
            <div className='mb-6 max-w-lg lg:mb-0'>
              <h2 className='mb-5 font-display text-3xl text-jacarta-700 dark:text-white'>
                {calltoActionContent.title}
              </h2>
              <p className='text-lg leading-normal dark:text-jacarta-300'>{calltoActionContent.text}</p>
            </div>
            <a
              href='#'
              className='inline-block self-center rounded-full bg-accent py-3 px-8 text-center font-semibold text-white shadow-accent-volume transition-all hover:bg-accent-dark'
            >
              {calltoActionContent.btnText}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
