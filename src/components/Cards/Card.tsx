import Tippy from '@tippyjs/react';
import Likes from '../Likes';
import { Link } from 'react-router-dom';

const Card = ({ itemLink, image, title, bid_number, eth_number, react_number, handleClick }: any) => {
  return (
    <>
      <article className='group'>
        <div className='group-hover:translate-y-[-10px] group-hover:duration-500'>
          <div className='dark:bg-jacarta-700 dark:border-jacarta-700 border-jacarta-100 rounded-2xl block border bg-white p-[1.1875rem] transition-shadow hover:shadow-lg text-jacarta-500 group-hover:border-accent group-hover:absolute  group-hover:border-2 '>
            <figure>
              {/* {`item/${itemLink}`} */}

              <Link to=''>
                <div className='w-full overflow-hidden rounded-[0.625rem]'>
                  <img
                    src={image}
                    alt={title}
                    width={230}
                    className='rounded-[0.625rem] w-full object-cover group-hover:scale-110 group-hover:ease-in group-hover:duration-700'
                    loading='lazy'
                    style={{ aspectRatio: '1 / 1' }}
                  />
                </div>
              </Link>
            </figure>
            <div className='mt-4 flex items-center justify-between'>
              <Link to=''>
                <span className='font-display text-jacarta-700 hover:text-accent text-base dark:text-white'>
                  {title}
                </span>
              </Link>
              <span className='dark:border-jacarta-600 border-jacarta-100 flex items-center whitespace-nowrap rounded-md border py-1 px-2'>
                <Tippy content={<span>ETH</span>}>
                  <img src='/images/eth-icon.svg' alt='' className='w-3 h-3 mr-1' />
                </Tippy>

                <span className='text-green text-sm font-medium tracking-tight'>{eth_number} ETH</span>
              </span>
            </div>
            <div className='mt-2 text-sm'>
              <span className='dark:text-jacarta-300 text-jacarta-500'>Current Bid</span>
              <span className='dark:text-jacarta-100 text-jacarta-700'>{bid_number} ETH</span>
            </div>

            <div className='mt-8 flex items-center justify-between'>
              <button type='button' className='text-accent font-display text-sm font-semibold' onClick={handleClick}>
                Place bid
              </button>

              <Likes like={react_number} classes='flex items-center space-x-1' />
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default Card;
