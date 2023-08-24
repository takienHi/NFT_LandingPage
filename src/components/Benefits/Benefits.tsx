import { partners_data } from '../../data/partners_data';
import BgWhite from '../SectionBackground/BgWhite';

type Props = {
  bgWhite?: boolean;
};

const Benefits = ({ bgWhite }: Props) => {
  return (
    <>
      <section className='relative pt-32 pb-24'>
        {bgWhite && <BgWhite />}

        <div className='container'>
          <div className='mx-auto max-w-xl text-center'>
            <h1 className='font-display text-jacarta-700 mb-6 text-center text-4xl font-medium dark:text-white'>
              Binance Affiliate Partnership
            </h1>
            <p className='dark:text-jacarta-200 mb-16 text-lg leading-normal'>
              Interested in making money with Binance? Earn A 20% Commission For Every Sale You Refer By Recommending
              The Most Powerful NFT marketplace.
            </p>
          </div>
          <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
            {partners_data.map(({ id, title, text, icon }) => {
              return (
                <div
                  key={id}
                  className='relative rounded-2.5xl border border-jacarta-100 text-center   bg-white p-10 shadow-[0_5px_0_0_#8358ff] transition-shadow hover:shadow-[0_16px_24px_-8px_rgba(131,88,255,.3)] dark:border-jacarta-700 dark:bg-jacarta-700'
                >
                  <div className='mb-6 inline-flex rounded-full bg-[#CDBCFF] p-2.5'>
                    <div className='bg-accent inline-flex h-[4.25rem] w-[4.25rem] items-center justify-center rounded-full'>
                      <svg className='icon h-[2.25rem] w-[2.25rem] fill-white'>
                        <use xlinkHref={`/icons.svg#icon-${icon}`}></use>
                      </svg>
                    </div>
                  </div>
                  <h3 className='mb-4 font-display text-lg text-jacarta-700 dark:text-white'>{title}</h3>
                  <p className='dark:text-jacarta-300'>{text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Benefits;
