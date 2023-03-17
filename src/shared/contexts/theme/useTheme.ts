import { useContext } from 'react';
import { Theme, THEME_KEY, ThemeContext } from './ThemeContext';

type UseThemeResultType = {
    toggleTheme: () => void;
    theme: Theme;
}

export const useTheme = (): UseThemeResultType => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    let newTheme: Theme;
    switch (theme) {
    case Theme.DARK:
      newTheme = Theme.PURPLE;
      break;
    case Theme.LIGHT:
      newTheme = Theme.DARK;
      break;
    case Theme.PURPLE:
      newTheme = Theme.LIGHT;
      break;
    default:
      newTheme = Theme.LIGHT;
    }
    setTheme?.(newTheme);
    document.body.className = newTheme;
    localStorage.setItem(THEME_KEY, newTheme);
  };

  return {
    theme: theme || Theme.LIGHT,
    toggleTheme,
  };
};
