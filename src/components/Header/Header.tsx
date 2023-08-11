import { useEffect, useState } from 'react';
import Logo from './Logo';
import SearchInput from './SearchInput';
import Menu from './Menu';
import MobileActions from './Menu/MobileActions';
import MobileSidebar from './Menu/MobileSidebar';
import MenuDesktop from './MenuDesktop';
import HeaderDesktop from './HeaderDesktop';

const Header = () => {
  const [toggleMobileMenu, setToggleMobileMenu] = useState(false);

  // window resize
  useEffect(() => {
    window.addEventListener('resize', () => {
      if (window.innerWidth >= 1024) {
        setToggleMobileMenu(false);
      }
    });
  });

  const openMobileMenu = () => {
    console.log('openMobileMenu');

    setToggleMobileMenu(true);
  };
  return (
    <>
      <HeaderDesktop openMobileMenu={openMobileMenu} />

      {/* <header className={`js-page-header fixed top-0 z-20 w-full backdrop-blur transition-colors`}>
        <div className='flex items-center px-6 py-6 xl:px-24'>
          <Logo />
          <SearchInput />
          <Menu />
          <MobileActions openMobileMenu={openMobileMenu} />
        </div>
      </header> */}
    </>
  );
};

export default Header;
