import { Link } from 'react-router-dom';
import paths from 'src/constants/paths';

const LogoDesktop = () => {
  return (
    <>
      <Link to={paths.home} className='shrink-0'>
        <img src={'img/logo.svg'} width={230} className='max-h-7 dark:hidden' alt='Binance | NFT Marketplace' />
        <img
          src='img/logo_white.svg'
          width={230}
          className='hidden max-h-7 dark:block'
          alt='Binance | NFT Marketplace'
        />
      </Link>
    </>
  );
};

export default LogoDesktop;
