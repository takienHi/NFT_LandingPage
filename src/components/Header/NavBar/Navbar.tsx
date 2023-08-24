import SearchInput from '../../SearchInput';
import { useEffect, useState } from 'react';
import LogoDesktop from 'src/components/LogoDesktop/LogoDesktop';
import Actions from './Actions/Actions';
import Menu from './Menu/Menu';

type TypeProps = {
  openMobileMenu: () => void;
};

const Navbar = ({ openMobileMenu }: TypeProps) => {
  const [addHeaderClass, setAddHeaderClass] = useState('');

  const listenScrollEvent = () => {
    window.scrollY > window.innerHeight * 0.8
      ? setAddHeaderClass('backdrop-brightness-95 dark:backdrop-brightness-75 dark:backdrop-blur-2xl')
      : setAddHeaderClass('');
  };

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);
    return () => {
      window.removeEventListener('scroll', listenScrollEvent);
    };
  }, []);

  return (
    <>
      <header className={`js-page-header fixed top-0 z-20 w-full backdrop-blur transition-colors ${addHeaderClass}`}>
        <div className='flex items-center px-6 py-6 xl:px-24 '>
          <LogoDesktop />
          <SearchInput />
          <div className='js-mobile-menu dark:bg-jacarta-800 invisible fixed inset-0 z-10 ml-auto items-center bg-white opacity-0 lg:visible lg:relative lg:inset-auto lg:flex lg:bg-transparent lg:opacity-100 dark:lg:bg-transparent'>
            <Menu />
          </div>
          <Actions openMobileMenu={openMobileMenu} />
        </div>
      </header>
    </>
  );
};

export default Navbar;
