import { THEME_KEY, ThemeContext, ThemesType } from 'shared/contexts/theme/ThemeContext';
import React, { FC, useMemo, useState } from 'react';

const defaultTheme = localStorage.getItem(THEME_KEY) as ThemesType || 'light';

type ThemeProviderProps = {
  initialTheme?: ThemesType;
}

export const ThemeProvider: FC<ThemeProviderProps> = ({ children, initialTheme }) => {
  const [theme, setTheme] = useState<ThemesType>(initialTheme || defaultTheme);

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
