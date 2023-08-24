import { Link, useLocation } from 'react-router-dom';
import { home, page, explore, resource } from 'src/data/header_data';
import { isChildrenPageActive, isParentPageActive } from 'src/utils/dynamicNavigation';

const Menu = () => {
  const { pathname } = useLocation();

  return (
    <>
      <nav className='navbar w-full'>
        <ul className='flex flex-col lg:flex-row'>
          {/* home */}
          <li className='js-nav-dropdown group relative'>
            <button className='dropdown-toggle text-jacarta-700 font-display hover:text-accent  dark:hover:text-accent dark: flex items-center justify-between py-3.5 text-base dark:text-white lg:px-5 w-full'>
              <span className={isParentPageActive(home.pages, pathname) ? 'text-accent  dark:text-accent' : ''}>
                Home
              </span>
              <i className='lg:hidden'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  width={24}
                  height={24}
                  className='h-4 w-4 dark:fill-white'
                >
                  <path fill='none' d='M0 0h24v24H0z' />
                  <path d='M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z' />
                </svg>
              </i>
            </button>
          </li>

          {/* page */}
          <li className='js-nav-dropdown group relative'>
            <button className='dropdown-toggle text-jacarta-700 font-display hover:text-accent  dark:hover:text-accent  flex items-center justify-between py-3.5 text-base dark:text-white lg:px-5 w-full'>
              <span className={isParentPageActive(page.pages, pathname) ? 'text-accent dark:text-accent' : ''}>
                Pages
              </span>
              <i className='lg:hidden'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  width={24}
                  height={24}
                  className='h-4 w-4 dark:fill-white'
                >
                  <path fill='none' d='M0 0h24v24H0z' />
                  <path d='M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z' />
                </svg>
              </i>
            </button>
            <ul className='dropdown-menu left-0 top-[85%] z-10 hidden grid-flow-row grid-cols-[repeat(2,_1fr)] gap-x-4 whitespace-nowrap rounded-xl bg-white transition-all will-change-transform group-hover:visible group-hover:opacity-100 dark:bg-jacarta-800 lg:invisible lg:absolute lg:!grid lg:translate-y-4 lg:py-8 lg:px-2 lg:opacity-0 lg:shadow-2xl lg:group-hover:translate-y-2 relative'>
              {page?.pages?.map((page) => (
                <li key={page.id}>
                  <Link to=''>
                    <div className='dark:hover:bg-jacarta-600 hover:text-accent  hover:bg-jacarta-50 flex items-center rounded-xl px-5 py-2 transition-colors justify-between'>
                      <span
                        className={`font-display ${
                          isChildrenPageActive(page.path, pathname)
                            ? '!text-accent !dark:text-accent'
                            : 'text-jacarta-700 dark:text-white'
                        } text-sm `}
                      >
                        {page.name}
                      </span>
                      {page.condition ? (
                        <span className='rounded bg-green py-1 px-2 text-tiny font-bold uppercase leading-none text-white ml-4'>
                          new
                        </span>
                      ) : undefined}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </li>

          {/* explore */}
          <li className='js-nav-dropdown nav-item dropdown group relative'>
            <button className='dropdown-toggle text-jacarta-700 font-display hover:text-accent  dark:hover:text-accent dark: flex items-center justify-between py-3.5 text-base dark:text-white lg:px-5 w-full'>
              <span className={isParentPageActive(explore.pages, pathname) ? 'text-accent dark:text-accent' : ''}>
                Explore
              </span>
              <i className='lg:hidden'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  width={24}
                  height={24}
                  className='h-4 w-4 dark:fill-white'
                >
                  <path fill='none' d='M0 0h24v24H0z' />
                  <path d='M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z' />
                </svg>
              </i>
            </button>
            <ul
              className='dropdown-menu dark:bg-jacarta-800 -left-6 top-[85%] z-10 hidden grid-flow-col grid-rows-5 gap-x-4 whitespace-nowrap rounded-xl bg-white transition-all will-change-transform group-hover:visible group-hover:opacity-100 lg:invisible lg:absolute lg:!grid lg:translate-y-4 lg:py-8 lg:px-5 lg:opacity-0 lg:shadow-2xl lg:group-hover:translate-y-2 relative'
              aria-labelledby='navDropdown-1'
            >
              {explore?.pages?.map((page) => (
                <li key={page.id}>
                  <Link to='/'>
                    <div className='dark:hover:bg-jacarta-600 hover:text-accent  hover:bg-jacarta-50 flex items-center rounded-xl px-5 py-2 transition-colors'>
                      <span className='bg-light-base mr-3 rounded-xl p-[0.375rem]'>{page?.icon}</span>
                      <span className='font-display text-jacarta-700 text-sm dark:text-white'>{page?.name}</span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </li>

          {/* resource */}
          <li className='js-nav-dropdown group relative'>
            <button className='dropdown-toggle text-jacarta-700 font-display hover:text-accent  dark:hover:text-accent dark: flex items-center justify-between py-3.5 text-base dark:text-white lg:px-5 w-full'>
              <span className={isParentPageActive(resource.pages, pathname) ? 'text-accent dark:text-accent' : ''}>
                Resources
              </span>
              <i className='lg:hidden'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  width={24}
                  height={24}
                  className='h-4 w-4 dark:fill-white'
                >
                  <path fill='none' d='M0 0h24v24H0z' />
                  <path d='M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z' />
                </svg>
              </i>
            </button>
            <ul
              className='dropdown-menu dark:bg-jacarta-800 left-0 top-[85%] z-10 hidden min-w-[200px] gap-x-4 whitespace-nowrap rounded-xl bg-white transition-all will-change-transform group-hover:visible group-hover:opacity-100 lg:invisible lg:absolute lg:grid lg:translate-y-4 lg:py-4 lg:px-2 lg:opacity-0 lg:shadow-2xl lg:group-hover:translate-y-2 relative'
              aria-labelledby='navDropdown-4'
            >
              {resource?.pages?.map?.((page) => (
                <li key={page.id}>
                  <Link to=''>
                    <div className='dark:hover:bg-jacarta-600 hover:text-accent  hover:bg-jacarta-50 flex items-center rounded-xl px-5 py-2 transition-colors'>
                      <span
                        className={`font-display ${
                          isChildrenPageActive(page.path, pathname)
                            ? 'text-accent dark:text-accent'
                            : 'text-jacarta-700'
                        } text-sm dark:text-white`}
                      >
                        {page?.name}
                      </span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </li>

          {/* create */}
          <li className='group'>
            <Link to='/create'>
              <div>
                <button className='text-jacarta-700 font-display hover:text-accent  dark:hover:text-accent dark: flex items-center justify-between py-3.5 text-base dark:text-white lg:px-5'>
                  <span className={isChildrenPageActive(pathname, '/create') ? 'text-accent dark:text-accent' : ''}>
                    Create
                  </span>
                </button>
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Menu;
