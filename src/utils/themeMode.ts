export const clearThemeMode = () => {
  localStorage.removeItem('themeMode');
};

export const getThemeModeFromLS = () => {
  const result2 = localStorage.getItem('themeMode');
  if (result2) {
    return result2;
  }
  return 'light';
};

export const setThemeModeToLS = (newThemeMode: string) => {
  localStorage.setItem('themeMode', newThemeMode);
};
