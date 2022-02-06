import { createTheme } from "@mui/material";

export const lightTheme = createTheme({
    palette: {
        type: 'light',
        primary: {
            main: '#3c3c3d',
            light: '#636363',
            dark: '#2A2A2A',
        },
        secondary: {
            main: '#c99d66',
            light: '#D3B084',
            dark: '#8C6D47',
        },
        error: {
            main: '#f44336',
        },
        success: {
            main: '#4caf50',
        },
        background: {
            default: '#fafafa',
            paper: 'fff'
        },

    },
    typography: {
        "fontFamily": "Trebuchet MS"
    }
});

export const darkTheme = createTheme({
    palette: {
        type: 'dark',
        primary: {
            main: '#3c3c3d',
            light: '#636363',
            dark: '#2A2A2A',
        },
        secondary: {
            main: '#c99d66',
            light: '#D3B084',
            dark: '#8C6D47',
        },
        error: {
            main: '#f44336',
        },
        success: {
            main: '#4caf50',
        },
        background: {
            default: '#303030',
            paper: '#424242'
        },
        text: {
            primary: '#ffffff',
          },
    },
    typography: {
        "fontFamily": "Trebuchet MS"
    }
});