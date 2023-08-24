import { FC, useState, createContext } from 'react';
import { getThemeModeFromLS, setThemeModeToLS } from 'src/utils/themeMode';

type ThemeModeContext = {
  themeMode: any;
  toggleThemeMode: () => void;
};

const initialThemeModeContext: ThemeModeContext = {
  themeMode: getThemeModeFromLS(),
  toggleThemeMode: () => null,
};

export const ThemeModeContext = createContext<ThemeModeContext>({} as ThemeModeContext);

export const ThemeModeProvider: FC<any> = ({ children }) => {
  const [themeMode, setThemeModeToggle] = useState<string>(initialThemeModeContext.themeMode);

  const toggleThemeMode = () => {
    if (themeMode === 'light') {
      setThemeModeToggle('dark');
      setThemeModeToLS('dark');
    } else {
      setThemeModeToggle('light');
      setThemeModeToLS('light');
    }
  };

  return <ThemeModeContext.Provider value={{ themeMode, toggleThemeMode }}>{children}</ThemeModeContext.Provider>;
};
