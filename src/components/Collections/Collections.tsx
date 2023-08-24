import HeadLine from '../HeadLine';
import BgWhite from '../SectionBackground/BgWhite';
import { tranding_category_filter, trendingCategoryData } from '../../data/categories_data';
import { useEffect, useState } from 'react';
import RecentlyAddedDropdown from '../Dropdown/RecentlyAddedDropdown';
import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react';
import Likes from '../Likes';
import _ from 'lodash';

// import Trending_categories_items from "./trending_categories_items";

type Props = {
  bgWhite?: boolean;
};

const Collections = ({ bgWhite }: Props) => {
  const [dataItem, setDataItem] = useState<any[]>([]);

  const getDataItem = () => {
    const newData = _.cloneDeep(trendingCategoryData).slice(0, 8);
    setDataItem(newData);
  };
  const [filterVal, setFilterVal] = useState(0);

  const sortText = [
    {
      id: 1,
      text: 'Recently Added',
    },
    {
      id: 2,
      text: 'Price: Low to High',
    },
    {
      id: 3,
      text: 'Price: high to low',
    },
    {
      id: 4,
      text: 'Auction Ending Soon',
    },
  ];

  useEffect(() => {
    getDataItem();
  }, []);

  return (
    <section className='dark:bg-jacarta-800 relative py-24'>
      {bgWhite && <BgWhite />}
      <div className='container'>
        <HeadLine
          text='Hot Nft'
          image='https://cdn.jsdelivr.net/npm/emoji-datasource-apple@7.0.2/img/apple/64/26a1.png'
          classes='font-display text-jacarta-700 mb-8 text-center text-3xl dark:text-white'
        />
        {/* Filter */}
        <div className='mb-8 flex flex-wrap items-center justify-between'>
          <ul className='flex flex-wrap items-center'>
            {tranding_category_filter.map(({ id, svg, text }) => {
              if (text === 'all') {
                return (
                  <li className='my-1 mr-2.5' key={id}>
                    <button
                      className={
                        filterVal === id
                          ? 'dark:border-jacarta-600 group bg-accent border-jacarta-100 font-display flex h-9 items-center rounded-lg border px-4 text-sm font-semibold transition-colors border-transparent text-white dark:border-transparent capitalize'
                          : 'dark:border-jacarta-600 dark:bg-jacarta-900 dark:hover:bg-accent group hover:bg-accent border-jacarta-100 font-display text-jacarta-500 flex h-9 items-center rounded-lg border bg-white px-4 text-sm font-semibold transition-colors hover:border-transparent hover:text-white dark:text-white dark:hover:border-transparent dark:hover:text-white capitalize'
                      }
                      onClick={() => {
                        // handleFilter(text);
                        setFilterVal(id);
                      }}
                    >
                      {text}
                    </button>
                  </li>
                );
              } else {
                return (
                  <li className='my-1 mr-2.5' key={id}>
                    <button
                      onClick={() => {
                        // handleFilter(text);
                        setFilterVal(id);
                      }}
                    >
                      <div
                        className={
                          filterVal === id
                            ? 'dark:border-jacarta-600 group bg-accent border-jacarta-100 font-display flex h-9 items-center rounded-lg border px-4 text-sm font-semibold transition-colors border-transparent text-white dark:border-transparent capitalize'
                            : 'dark:border-jacarta-600 dark:bg-jacarta-900 dark:hover:bg-accent group hover:bg-accent border-jacarta-100 font-display text-jacarta-500 flex h-9 items-center rounded-lg border bg-white px-4 text-sm font-semibold transition-colors hover:border-transparent hover:text-white dark:text-white dark:hover:border-transparent dark:hover:text-white capitalize'
                        }
                      >
                        <svg
                          className={
                            filterVal === id
                              ? 'icon mr-1 h-4 w-4 transition-colors fill-white'
                              : 'icon fill-jacarta-700 dark:fill-jacarta-100 mr-1 h-4 w-4 transition-colors group-hover:fill-white'
                          }
                        >
                          <use xlinkHref={`/icons.svg#icon-${svg}`}></use>
                        </svg>
                        <span>{text}</span>
                      </div>
                    </button>
                  </li>
                );
              }
            })}
          </ul>
          <RecentlyAddedDropdown data={sortText} />
        </div>
        {/* Grid */}
        <div className='grid grid-cols-1 gap-[1.875rem] md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {dataItem.map((item: any) => {
            const { id, image, title, price, bidLimit, bidCount, likes, creator, owner } = item;
            const itemLink = image.split('/').slice(-1).toString().replace('.jpg', '').replace('.gif', '');
            return (
              <article key={id} className='group'>
                <div className='group-hover:translate-y-[-10px] group-hover:duration-500'>
                  <div className='dark:bg-jacarta-700 dark:border-jacarta-700 border-jacarta-100 rounded-2xl block border bg-white p-[1.1875rem] transition-shadow hover:shadow-lg text-jacarta-500 group-hover:border-accent group-hover:absolute  group-hover:border-2 w-full'>
                    <figure className='relative'>
                      <Link to=''>
                        <div className='w-full overflow-hidden rounded-[0.625rem]'>
                          <img
                            src={image}
                            alt='item 5'
                            width={230}
                            loading='lazy'
                            className='rounded-[0.625rem] w-full object-cover group-hover:scale-110 group-hover:ease-in group-hover:duration-700'
                            style={{ aspectRatio: '1 / 1' }}
                          />
                        </div>
                      </Link>

                      <Likes like={likes} />

                      <div className='absolute left-3 -bottom-3'>
                        <div className='flex -space-x-2'>
                          <Link to=''>
                            <div>
                              <Tippy content={<span>creator: {creator.name}</span>}>
                                <img
                                  src={creator.image}
                                  alt='creator'
                                  className='dark:border-jacarta-600 hover:border-accent dark:hover:border-accent h-6 w-6 rounded-full border-2 border-white'
                                />
                              </Tippy>
                            </div>
                          </Link>
                          <Link to=''>
                            <div>
                              <Tippy content={<span>creator: {owner.name}</span>}>
                                <img
                                  src={owner.image}
                                  alt='owner'
                                  className='dark:border-jacarta-600 hover:border-accent dark:hover:border-accent h-6 w-6 rounded-full border-2 border-white'
                                />
                              </Tippy>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </figure>
                    <div className='mt-7 flex items-center justify-between'>
                      <Link to=''>
                        <div>
                          <span className='font-display text-jacarta-700 hover:text-accent text-base dark:text-white'>
                            {title}
                          </span>
                        </div>
                      </Link>

                      {/* auction dropdown  */}
                      {/* <Auctions_dropdown classes='dark:hover:bg-jacarta-600 dropup hover:bg-jacarta-100 rounded-full ' /> */}
                    </div>
                    <div className='mt-2 text-sm'>
                      <span className='dark:text-jacarta-200 text-jacarta-700 mr-1'>{price}</span>
                      <span className='dark:text-jacarta-300 text-jacarta-500'>
                        {bidCount}/{bidLimit}
                      </span>
                    </div>

                    <div className='mt-8 flex items-center justify-between'>
                      <button className='text-accent font-display text-sm font-semibold' onClick={() => {}}>
                        Buy now
                      </button>
                      <Link to=''>
                        <div className='group flex items-center'>
                          <svg className='icon icon-history group-hover:fill-accent dark:fill-jacarta-200 fill-jacarta-500 mr-1 mb-[3px] h-4 w-4'>
                            <use xlinkHref='/icons.svg#icon-history'></use>
                          </svg>
                          <span className='group-hover:text-accent font-display dark:text-jacarta-200 text-sm font-semibold'>
                            View History
                          </span>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
        <div className='mt-10 text-center'>
          <Link to=''>
            <div className='text-accent shadow-white-volume hover:bg-accent-dark inline-block hover:shadow-accent-volume w-36 rounded-full bg-white py-3 px-8 text-center font-semibold transition-all hover:text-white'>
              view more
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Collections;
