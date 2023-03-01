import { useContext } from 'react';
import { THEME_KEY, ThemeContext, ThemesType } from './ThemeContext';

type UseThemeResultType = {
    toggleTheme: () => void;
    theme: ThemesType;
}

export const useTheme = (): UseThemeResultType => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    const currentTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(currentTheme);
    document.body.className = currentTheme;
    localStorage.setItem(THEME_KEY, currentTheme);
  };

  return {
    theme,
    toggleTheme,
  };
};
