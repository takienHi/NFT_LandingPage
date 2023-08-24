import Tippy from '@tippyjs/react';
import { useState } from 'react';
import ScrollTo from 'react-scroll-into-view';

type DataType = {
  id: string;
  title: string;
  registerTrigger: (id: string) => (el: any) => void;
};

type PropsType = {
  data: DataType[];
};

const MenuScrollDropdown = ({ data }: PropsType) => {
  const [sortActive, setSortActive] = useState(1);

  return (
    <>
      <div>
        {/* dropdown */}
        <div className='dropdown rounded-l-xl cursor-pointer'>
          <div
            className=' dark:bg-jacarta-800 z-10 whitespace-nowrap rounded-l-xl bg-white py-4 px-2 text-left shadow-xl show text-jacarta-500'
            aria-labelledby='categoriesSort'
          >
            <span className='font-display text-jacarta-300 block px-5 py-2 text-sm font-semibold'>Move to</span>
            {data.map((item: DataType) => {
              const { id, title, registerTrigger } = item;
              return (
                <ScrollTo key={id} selector={`#${id}`}>
                  <div
                    ref={registerTrigger(id)}
                    className='menuScrollDropdown dropdown-item font-display text-jacarta-700 dark:hover:bg-jacarta-600 hover:bg-jacarta-50 flex w-full items-center justify-between rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white'
                  >
                    {title}
                  </div>
                </ScrollTo>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuScrollDropdown;
