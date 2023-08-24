import React, { useContext, useState } from 'react';

import Footer from 'src/components/Footer';
import Header from '../components/Header';
import { ThemeModeContext } from 'src/contexts/ThemeModeContext';

interface Props {
  children?: React.ReactNode;
}

const MainLayout = ({ children }: Props) => {
  const { themeMode } = useContext(ThemeModeContext);

  return (
    <div className={`${themeMode} scroll-smooth`}>
      <div>
        <Header />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
