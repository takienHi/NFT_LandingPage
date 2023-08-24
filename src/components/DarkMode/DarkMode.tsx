import { useContext } from 'react';
import { ThemeModeContext } from 'src/contexts/ThemeModeContext';
import { RiMoonClearFill, RiSunFoggyFill } from 'react-icons/ri';

const DarkMode = () => {
  const { toggleThemeMode } = useContext(ThemeModeContext);
  return (
    <>
      <button
        className='js-dark-mode-trigger dark:bg-accent group ml-2 flex h-10 w-10 items-center justify-center rounded-full border border-jacarta-100 bg-white transition-colors hover:border-transparent hover:bg-accent  dark:border-transparent dark:bg-white/[.15] dark:hover:bg-accent'
        aria-label='light'
        onClick={toggleThemeMode}
      >
        <RiMoonClearFill className='dark-mode-light h-4 w-4 fill-jacarta-700 transition-colors group-hover:fill-white  dark:hidden' />
        {/* <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          width={24}
          height={24}
          className='dark-mode-light h-4 w-4 fill-jacarta-700 transition-colors group-hover:fill-white  dark:hidden'
        >
          <path fill='none' d='M0 0h24v24H0z' />
          <path d='M11.38 2.019a7.5 7.5 0 1 0 10.6 10.6C21.662 17.854 17.316 22 12.001 22 6.477 22 2 17.523 2 12c0-5.315 4.146-9.661 9.38-9.981z' />
        </svg> */}
        <RiSunFoggyFill className='dark-mode-dark hidden h-4 w-4 fill-jacarta-700 transition-colors group-hover:fill-white  dark:block dark:fill-white' />
      </button>
    </>
  );
};

export default DarkMode;
