import React from 'react'
import {CssBaseline} from '@mui/material'
import { CustomThemeProvider } from './contexts/ThemeContext';
import Router from './routes'

function App() {    
  return (
    <CustomThemeProvider>
        <CssBaseline/>
        <Router/>

    </CustomThemeProvider>
  );
}

export default App;
