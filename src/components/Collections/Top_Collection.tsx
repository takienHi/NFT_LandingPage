import React, { useState } from 'react';
import { collection_data } from '../../data/collection_data';
import HeadLine from '../HeadLine';
import { Link } from 'react-router-dom';
import BgWhite from '../SectionBackground/BgWhite';

type Props = {
  bgWhite?: boolean;
};

const Top_collection = ({ bgWhite }: Props) => {
  const [timeActiveText, setTimeActiveText] = useState('last 7 days');
  const [data, setData] = useState(collection_data);
  const [dropdownShow, setDropdownShow] = useState(false);
  const timeText = [
    {
      id: 1,
      text: 'Last 24 Hours',
    },
    {
      id: 2,
      text: 'Last 7 days',
    },
    {
      id: 3,
      text: 'Last 30 days',
    },
  ];

  const handleFilter = (text: string) => {
    setTimeActiveText(text);
    const newCollectionData = collection_data.filter((item: any) => {
      if (text === 'Last 30 days') {
        return item;
      }
      return item.postDate === text;
    });
    setData(newCollectionData);
  };

  const handleDropdown = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    window.addEventListener('click', (w) => {
      if ((w.target as HTMLElement).closest('.dropdown-toggle')) {
        if (dropdownShow) {
          setDropdownShow(false);
        } else {
          setDropdownShow(true);
        }
      } else {
        setDropdownShow(false);
      }
    });
  };

  return (
    <div>
      <section className='dark:bg-jacarta-800 relative py-24'>
        {bgWhite && <BgWhite />}

        <div className='container'>
          <div className='font-display text-jacarta-700 mb-12 text-center text-lg sm:text-3xl dark:text-white flex justify-center items-center gap-x-3'>
            <HeadLine text='Top collections over' classes='inline' />

            <div className='dropdown cursor-pointer relative'>
              <button
                className='dropdown-toggle text-accent inline-flex items-center'
                type='button'
                onClick={(e) => handleDropdown(e)}
              >
                {timeActiveText}
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  width='24'
                  height='24'
                  className='fill-accent h-8 w-8'
                >
                  <path fill='none' d='M0 0h24v24H0z'></path>
                  <path d='M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z'></path>
                </svg>
              </button>

              <div
                className={
                  dropdownShow
                    ? 'dropdown-menu dark:bg-jacarta-800 z-10  min-w-[200px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl show text-jacarta-700 dark:text-white absolute m-0 top-full'
                    : 'dropdown-menu dark:bg-jacarta-800 z-10  min-w-[200px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl hidden text-jacarta-700 dark:text-white absolute m-0 top-full'
                }
              >
                {timeText.map(({ id, text }) => {
                  return (
                    <button
                      key={id}
                      onClick={() => {
                        handleFilter(text);
                      }}
                      className='block dropdown-text'
                    >
                      <span className='dropdown-item font-normal text-base dark:hover:bg-jacarta-600 hover:bg-jacarta-50 block rounded-xl px-5 py-2 transition-colors'>
                        {text}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <div className='grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-[1.875rem] lg:grid-cols-4'>
            {data.map((item: any) => {
              const { id, image, title, icon, amount, postTime } = item;
              const itemLink = image.split('/').slice(-1).toString().replace('.jpg', '');

              return (
                <div
                  className='border-jacarta-100 dark:bg-jacarta-700 rounded-2xl flex border bg-white py-4 px-7 transition-shadow hover:shadow-lg dark:border-transparent'
                  key={id}
                >
                  <figure className='mr-4 shrink-0'>
                    <Link to=''>
                      <div className='relative block'>
                        {/* <img src={image} alt={title} className="rounded-2lg" /> */}
                        <img
                          src={image}
                          alt={title}
                          className='rounded-2lg'
                          width={48}
                          style={{ aspectRatio: '1 / 1', objectFit: 'cover' }}
                        />
                        <div className='dark:border-jacarta-600 bg-jacarta-700 absolute -left-3 top-1/2 flex h-6 w-6 -translate-y-2/4 items-center justify-center rounded-full border-2 border-white text-xs text-white'>
                          {id}
                        </div>
                        {icon && (
                          <div
                            className='dark:border-jacarta-600 bg-green absolute -left-3 top-[60%] flex h-6 w-6 items-center justify-center rounded-full border-2 border-white'
                            data-tippy-content='Verified Collection'
                          >
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              viewBox='0 0 24 24'
                              width='24'
                              height='24'
                              className='h-[.875rem] w-[.875rem] fill-white'
                            >
                              <path fill='none' d='M0 0h24v24H0z'></path>
                              <path d='M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z'></path>
                            </svg>
                          </div>
                        )}
                      </div>
                    </Link>
                  </figure>
                  <div>
                    <Link to=''>
                      <div className='block'>
                        <span className='font-display text-jacarta-700 hover:text-accent font-semibold dark:text-white'>
                          {title}
                        </span>
                      </div>
                    </Link>
                    <span className='dark:text-jacarta-300 text-sm'>{amount} ETH</span>
                  </div>
                </div>
              );
            })}
          </div>
          <div className='mt-10 text-center'>
            <Link to=''>
              <div className='bg-accent shadow-accent-volume hover:bg-accent-dark inline-block rounded-full py-3 px-8 text-center font-semibold text-white transition-all'>
                Go to Rankings
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Top_collection;
