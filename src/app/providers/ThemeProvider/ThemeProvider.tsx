import {THEME_KEY, ThemeContext, ThemesType} from "shared/config/theme/ThemeContext";
import React, {FC, useMemo, useState} from "react";

const defaultTheme = localStorage.getItem(THEME_KEY) as ThemesType || 'light';

export const ThemeProvider: FC = ({children}) => {
    const [theme, setTheme] = useState<ThemesType>(defaultTheme);

    const defaultThemeContext = useMemo(() => ({
        theme: theme,
        setTheme: setTheme,
    }), [theme])

    return (
        <ThemeContext.Provider value={defaultThemeContext}>
            {children}
        </ThemeContext.Provider>
    );
};