import { useState } from 'react';
import { SiPowerpages } from 'react-icons/si';
import { IoClose } from 'react-icons/io5';
import MenuScrollDropdown from '../Dropdown/MenuScrollDropdown';

type MenuScrollProps = {
  sectionList: any;
};

const MenuScroll = ({ sectionList }: MenuScrollProps) => {
  const [toggleMenuScroll, setToggleMenuScroll] = useState(false);

  const openMenuScroll = () => {
    setToggleMenuScroll(true);
  };

  const closeMenuScroll = () => {
    setToggleMenuScroll(false);
  };

  return (
    <>
      <div>
        <div
          className={`transition duration-1000 flex z-20 fixed right-0 top-1/4  shadow-2xl
        ${toggleMenuScroll ? 'translate-x-full' : ''}`}
        >
          <div className='bg-accent hover:bg-accent-dark  text-white dark:border-jacarta-600  border-jacarta-100   border'>
            <div
              onClick={openMenuScroll}
              className='js-likes relative inline-flex h-10 w-10 cursor-pointer items-center justify-center text-sm'
            >
              <SiPowerpages />
            </div>
          </div>
        </div>
        <div
          className={`transition duration-1000 flex flex-col z-25 fixed right-0 top-1/4 shadow-2xl
        ${toggleMenuScroll ? '' : 'translate-x-full'}`}
        >
          <div className='bg-accent hover:bg-accent-dark  text-white dark:border-jacarta-600  border-jacarta-100   border'>
            <div
              onClick={closeMenuScroll}
              className='js-likes relative inline-flex h-10 w-10 cursor-pointer items-center justify-center text-sm'
            >
              <IoClose />
            </div>
          </div>
        </div>
        <div
          className={` transition duration-1000 flex flex-col z-20 fixed right-0 top-1/4 
        ${toggleMenuScroll ? '' : 'translate-x-full'}`}
        >
          <div className='translate-x-full bg-accent hover:bg-accent-dark  text-white dark:border-jacarta-600  border-jacarta-100   border'>
            <div
              onClick={closeMenuScroll}
              className='js-likes relative inline-flex h-10 w-10 cursor-pointer items-center justify-center text-sm'
            >
              <IoClose />
            </div>
          </div>

          <MenuScrollDropdown data={sectionList} />
        </div>
      </div>
    </>
  );
};

export default MenuScroll;
