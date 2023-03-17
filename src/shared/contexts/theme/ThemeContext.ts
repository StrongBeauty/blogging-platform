import { createContext } from 'react';

export enum Theme {
  DARK = 'dark',
  LIGHT = 'light',
  PURPLE = 'purple'
}

export type ThemeContextType = {
    theme?: Theme;
    setTheme?: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextType>({});

export const THEME_KEY = 'theme';
