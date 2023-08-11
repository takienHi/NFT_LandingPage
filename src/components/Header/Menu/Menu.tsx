import NavBar from './NavBar';
import Actions from './Actions';
import MobileSidebar from './MobileSidebar';

const Menu = () => {
  return (
    <>
      <div
        className={`js-mobile-menu invisible lg:visible fixed inset-0 z-10 ml-auto items-center bg-white opacity-0 dark:bg-jacarta-800 lg:relative lg:inset-auto lg:flex lg:bg-transparent lg:opacity-100 dark:lg:bg-transparent `}
      >
        <NavBar />

        <MobileSidebar />
        <Actions />
      </div>
    </>
  );
};

export default Menu;
