import Footer from 'src/components/Footer/Footer';
import Header from '../components/Header';

interface Props {
  children?: React.ReactNode;
}
const MainLayout = ({ children }: Props) => {
  return (
    <div className='overflow-x-hidden font-body text-jacarta-500 dark:bg-jacarta-900'>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
