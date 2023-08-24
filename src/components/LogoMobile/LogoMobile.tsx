const Logo = 'img/logo.svg';
const WhiteLogo = 'img/logo_white.svg';
const LogoMobile = () => {
  return (
    <>
      <div className='dark:hidden'>
        <img src={Logo} height={28} width={130} alt='Binance | NFT Marketplace' className='max-h-7 h-auto ' />
      </div>

      <div className='hidden dark:block'>
        <img src={WhiteLogo} height={28} width={130} alt='Binance | NFT Marketplace' />
      </div>
    </>
  );
};

export default LogoMobile;
