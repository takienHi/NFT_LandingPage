import Tippy from '@tippyjs/react';
import { useState } from 'react';

type DataType = {
  id: string | number;
  text: string;
};

type PropsType = {
  data: DataType[];
};

const RecentlyAddedDropdown = ({ data }: PropsType) => {
  const [sortActive, setSortActive] = useState(1);
  const [sortFilterText, setSortFilterText] = useState('');

  const inputData = [
    {
      id: 1,
      text: 'Verified Only',
    },
    {
      id: 2,
      text: 'NFSW Only',
    },
    {
      id: 3,
      text: 'Show Lazy Minted',
    },
  ];

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>, text: string) => {
    if (e.target.checked) {
      // console.log(text);
      // dispatch(updateTrendingCategoryItemByInput(text));
    } else {
      // dispatch(updateTrendingCategoryItemByInput(''));
    }
  };

  return (
    <>
      <div>
        {/* dropdown */}
        <div className='dropdown relative my-1 cursor-pointer'>
          <Tippy
            animation='fade'
            arrow={false}
            trigger='click'
            interactive={true}
            placement='bottom'
            className='tooltip-container'
            content={
              <div
                className='dropdown-menu dark:bg-jacarta-800 z-10 hidden min-w-[220px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl show text-jacarta-500'
                aria-labelledby='categoriesSort'
              >
                <span className='font-display text-jacarta-300 block px-5 py-2 text-sm font-semibold'>Sort By</span>
                {data.map((item: any) => {
                  const { id, text } = item;
                  return (
                    <button
                      key={id}
                      className='dropdown-item font-display text-jacarta-700 dark:hover:bg-jacarta-600 hover:bg-jacarta-50 flex w-full items-center justify-between rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white'
                      onClick={() => {
                        setSortActive(id);

                        setSortFilterText(text);
                      }}
                    >
                      {text}
                      {sortActive === id && (
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 24 24'
                          width='24'
                          height='24'
                          className='fill-accent mb-[3px] h-4 w-4'
                        >
                          <path fill='none' d='M0 0h24v24H0z' />
                          <path d='M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z' />
                        </svg>
                      )}
                    </button>
                  );
                })}

                <span className='font-display text-jacarta-300 block px-5 py-2 text-sm font-semibold'>Options</span>
                {inputData.map(({ id, text }: any) => {
                  return (
                    <div
                      key={id}
                      className='dropdown-item font-display dark:hover:bg-jacarta-600 hover:bg-jacarta-50 block w-full rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white'
                    >
                      <span className='flex items-center justify-between'>
                        <span>{text}</span>
                        <input
                          type='checkbox'
                          name='check'
                          className='checked:bg-accent checked:focus:bg-accent checked:hover:bg-accent after:bg-jacarta-400 bg-jacarta-100 relative h-4 w-7 cursor-pointer appearance-none rounded-lg border-none shadow-none after:absolute after:top-0.5 after:left-0.5 after:h-3 after:w-3 after:rounded-full after:transition-all checked:bg-none checked:after:left-3.5 checked:after:bg-white focus:ring-transparent focus:ring-offset-0'
                          onChange={(e) => handleInput(e, text)}
                        />
                      </span>
                    </div>
                  );
                })}
              </div>
            }
          >
            <div className='dark:bg-jacarta-700 dropdown-toggle border-jacarta-100 dark:border-jacarta-600 inline-flex w-48 items-center justify-between rounded-lg border bg-white py-2 px-3 text-sm dark:text-white'>
              <span className='font-display'>Trending</span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                width='24'
                height='24'
                className='fill-jacarta-500 h-4 w-4 dark:fill-white'
              >
                <path fill='none' d='M0 0h24v24H0z'></path>
                <path d='M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z'></path>
              </svg>
            </div>
          </Tippy>
        </div>
      </div>
    </>
  );
};

export default RecentlyAddedDropdown;
