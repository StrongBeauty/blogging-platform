import {createContext} from "react";

export type ThemesType = 'dark' | 'light';

export interface ThemeContext {
    theme?: ThemesType;
    setTheme?: (theme: ThemesType) => void;
}

export const ThemeContext = createContext<ThemeContext>({});

export const THEME_KEY = 'theme';