import { Link, useLocation } from 'react-router-dom';
import { isChildrenPageActive, isParentPageActive } from 'src/utils/dynamicNavigation';

type SidebarChildMenu = {
  childMenu: any;
  isCollapse: string | number | null;
};

const SidebarChildMenu = ({ childMenu, isCollapse }: SidebarChildMenu) => {
  const { pathname } = useLocation();

  return (
    <>
      <ul
        className={`dropdown-menu h-fit dark:bg-jacarta-800 left-0 top-[85%] z-10 min-w-[200px] gap-x-4 whitespace-nowrap rounded-xl bg-white  group-hover:visible group-hover:opacity-100 lg:invisible lg:absolute lg:grid lg:translate-y-4 lg:py-4 lg:px-2 lg:opacity-0 lg:shadow-2xl lg:group-hover:translate-y-2 relative  overflow-hidden  ${
          isCollapse === childMenu.id ? '' : ''
        }`}
      >
        <div className={isCollapse === childMenu.id ? ' isCollapse' : ' isNotCollapse'}>
          {childMenu?.pages?.map((page: any) => (
            <li key={page.id}>
              <Link to={page.path}>
                <div className='dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 flex items-center rounded-xl px-5 py-2 transition-colors justify-between'>
                  <div className=' flex items-center'>
                    {page.icon ? (
                      <span className='bg-light-base mr-3 rounded-xl p-[0.375rem]'>{page.icon}</span>
                    ) : undefined}
                    <span
                      className={`font-display ${
                        isChildrenPageActive(pathname, page.path) ? 'text-accent dark:text-accent' : 'text-jacarta-700'
                      } text-sm dark:text-white`}
                    >
                      {page.name}
                    </span>
                  </div>
                  {page.condition ? (
                    <span className='rounded bg-green py-1 px-2 text-tiny font-bold uppercase leading-none text-white ml-4'>
                      new
                    </span>
                  ) : undefined}
                </div>
              </Link>
            </li>
          ))}
        </div>
      </ul>
    </>
  );
};

export default SidebarChildMenu;
