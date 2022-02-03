import React from "react";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { lightTheme, darkTheme } from "../styles/theme";

const themes = {
    'light': lightTheme,
    'dark': darkTheme,
}

export const CustomThemeContext = React.createContext({
    currentTheme: 'light',
    setTheme: null
});

export function CustomThemeProvider ({children}) {
    const currentTheme = localStorage.getItem('appTheme') || 'light'
    const [themeName, setThemeName] = React.useState(currentTheme)

    const theme = themes[themeName];

    const setTheme = (name) => {
        localStorage.setItem('appTheme', name)
        setThemeName(name)
    }

    const value = {
        currentTheme: themeName,
        setTheme: setTheme
    }
     
    return (
        <CustomThemeContext.Provider value={value}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>            
        </CustomThemeContext.Provider>
    )
}