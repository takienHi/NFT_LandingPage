import { useActiveMenu } from 'react-active-menu';
import MenuScroll from 'src/components/MenuScroll/MenuScroll';

import { homeContent, type HomeContentItem } from 'src/templates/HomeContent';

const Home = () => {
  const { registerSection, registerTrigger } = useActiveMenu({
    offset: 60,
    smooth: true,
  });

  const sectionList = homeContent.content.map((content) => ({
    id: content.id,
    title: content.title,
    registerTrigger: registerTrigger,
  }));
  return (
    <>
      <main>
        {homeContent.content.map(({ id, component, title }: HomeContentItem) => {
          return (
            <div key={id} id={id} ref={registerSection(id)}>
              {component}
            </div>
          );
        })}

        <MenuScroll sectionList={sectionList} />
      </main>
    </>
  );
};

export default Home;
