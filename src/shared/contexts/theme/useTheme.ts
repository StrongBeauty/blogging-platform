import { useContext } from 'react';
import { THEME_KEY, ThemeContext, ThemesType } from './ThemeContext';

interface UseThemeResult {
    toggleTheme: () => void;
    theme: ThemesType;
}

export const useTheme = (): UseThemeResult => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    const currentTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(currentTheme);
    localStorage.setItem(THEME_KEY, currentTheme);
  };

  return {
    theme,
    toggleTheme,
  };
};
