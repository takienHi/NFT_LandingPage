const BgWhite = () => {
  return (
    <>
      <picture className='pointer-events-none absolute inset-0 -z-10 dark:hidden'>
        <img src='/images/gradient_light.jpg' alt='gradient' className='h-full w-full' />
      </picture>
    </>
  );
};

export default BgWhite;
