import Benefits from 'src/components/Benefits/Benefits';
import Bids from 'src/components/Bids';
import Collections from 'src/components/Collections';
import Top_collection from 'src/components/Collections/Top_Collection';
import Hero3 from 'src/components/Hero/Hero3';
import Partners from 'src/components/Partners';
import Subscribe from 'src/components/Subscribe/Subscribe';

import { nanoid } from 'nanoid/non-secure';
export type HomeContentType = {
  content: HomeContentItem[];
};

export type HomeContentItem = {
  id: string;
  component: JSX.Element;
  title: string;
};

export const homeContent: HomeContentType = {
  content: [
    {
      id: 'id' + nanoid(),
      component: <Hero3 />,
      title: 'Hero',
    },
    {
      id: 'id' + nanoid(),
      component: <Partners />,
      title: 'Partners',
    },
    {
      id: 'id' + nanoid(),
      component: <Collections bgWhite={true} />,
      title: 'Collections',
    },
    {
      id: 'id' + nanoid(),
      component: <Bids />,
      title: 'Bids',
    },
    {
      id: 'id' + nanoid(),
      component: <Subscribe bgWhite={true} />,
      title: 'Subscribe',
    },
    {
      id: 'id' + nanoid(),
      component: <Benefits />,
      title: 'Benefits',
    },
    {
      id: 'id' + nanoid(),
      component: <Top_collection bgWhite={true} />,
      title: 'Top Collection',
    },
  ],
};
