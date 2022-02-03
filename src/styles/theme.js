import { createTheme } from "@mui/material";

export const lightTheme = createTheme({
    palette: {
        type: 'light',
        primary: {
            main: '#3c3c3d',
        },
        secondary: {
            main: '#c99d66',
        },
        error: {
            main: '#f44336',
        },
        success: {
            main: '#4caf50',
        },
        },
    });

export const darkTheme = createTheme({
    palette: {
        type: 'dark',
        primary: {
            main: '#3c3c3d',
        },
        secondary: {
            main: '#c99d66',
        },
        error: {
            main: '#f44336',
        },
        success: {
            main: '#4caf50',
        },
        background: {
            default: '#303030',
            transition: '0.5s ease'
        },
    },
});