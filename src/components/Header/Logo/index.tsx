import { Link } from 'react-router-dom';
import paths from 'src/constants/paths';

const Logo = () => {
  return (
    <>
      <Link to={paths.home} className='shrink-0'>
        <img src='img/logo.png' className='max-h-7 dark:hidden' alt='Xhibiter | NFT Marketplace' />
        <img src='img/logo_white.png' className='hidden max-h-7 dark:block' alt='Xhibiter | NFT Marketplace' />
      </Link>
    </>
  );
};

export default Logo;
