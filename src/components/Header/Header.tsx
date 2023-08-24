import { useEffect, useState } from 'react';
import Navbar from './NavBar';
import SlideBar from './SlideBar';

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
    setToggleMobileMenu(true);
  };

  const closeMobileMenu = () => {
    setToggleMobileMenu(false);
  };

  useEffect(() => {
    console.log(toggleMobileMenu);
    setTimeout(() => document.body.classList.toggle('nav-open-noscroll', toggleMobileMenu), 1000);
  }, [toggleMobileMenu]);

  return (
    <>
      <Navbar openMobileMenu={openMobileMenu} />

      <SlideBar toggleMobileMenu={toggleMobileMenu} closeMobileMenu={closeMobileMenu} />
    </>
  );
};

export default Header;
