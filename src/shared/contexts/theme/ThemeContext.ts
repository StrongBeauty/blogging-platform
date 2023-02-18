import { createContext } from 'react';

export type ThemesType = 'dark' | 'light';

export type ThemeContextType = {
    theme?: ThemesType;
    setTheme?: (theme: ThemesType) => void;
}

export const ThemeContext = createContext<ThemeContextType>({});

export const THEME_KEY = 'theme';
