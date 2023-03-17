import {
  Theme, THEME_KEY, ThemeContext,
} from 'shared/contexts/theme/ThemeContext';
import React, { FC, useMemo, useState } from 'react';

const defaultTheme = localStorage.getItem(THEME_KEY) as Theme || Theme.LIGHT;

type ThemeProviderProps = {
  initialTheme?: Theme;
}

export const ThemeProvider: FC<ThemeProviderProps> = ({ children, initialTheme }) => {
  const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme);

  const defaultThemeContext = useMemo(() => ({
    theme,
    setTheme,
  }), [theme]);

  return (
    <ThemeContext.Provider value={defaultThemeContext}>
      {children}
    </ThemeContext.Provider>
  );
};
