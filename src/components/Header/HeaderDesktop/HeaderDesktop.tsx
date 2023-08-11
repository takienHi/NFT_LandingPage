import Logo from '../Logo';
import MobileActions from '../Menu/MobileActions';
import MenuDesktop from '../MenuDesktop';
import SearchInput from '../SearchInput';

type TypeProps = {
  openMobileMenu: () => void;
};

const HeaderDesktop = ({ openMobileMenu }: TypeProps) => {
  return (
    <>
      {/* main desktop menu start*/}
      <header className='js-page-header fixed top-0 z-20 w-full backdrop-blur transition-colors'>
        <div className='flex items-center px-6 py-6 xl:px-24 '>
          <Logo />
          {/* End  logo */}

          <SearchInput />
          {/* End Desktop search form */}

          <MenuDesktop />
          {/* header menu content end for desktop */}

          <MobileActions openMobileMenu={openMobileMenu} />
          {/* End header right content  for mobile */}
        </div>
        {/* End flex item */}
      </header>

      {/* main desktop menu end */}
    </>
  );
};

export default HeaderDesktop;
