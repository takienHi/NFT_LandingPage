import { Link } from 'react-router-dom';
import DarkMode from 'src/components/DarkMode/DarkMode';
import WalletButton from 'src/components/WalletButton/WalletButton';
import ActionsDesktop from './ActionsDesktop';
import NavbarDesktop from './NavbarDesktop';

const MenuDesktop = () => {
  return (
    <>
      <div className='js-mobile-menu dark:bg-jacarta-800 invisible fixed inset-0 z-10 ml-auto items-center bg-white opacity-0 lg:visible lg:relative lg:inset-auto lg:flex lg:bg-transparent lg:opacity-100 dark:lg:bg-transparent'>
        <NavbarDesktop />
        {/* End menu for desktop */}
        <ActionsDesktop />
        {/* End header right content (metamask and other) for desktop */}
      </div>
    </>
  );
};

export default MenuDesktop;
