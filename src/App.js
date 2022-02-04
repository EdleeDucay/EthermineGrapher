import React, {useState, useEffect} from 'react'
import {Box, CssBaseline, Typography} from '@mui/material'
import Navbar from './components/navbar';
import Intro from './components/intro'
import { CustomThemeProvider } from './contexts/ThemeContext';
import {getDashboard} from './utility/EthermineApi.js'

function App() {
  const [searchInput, setSearchInput] = useState('')   
  const [error, setError] = useState('')

  const fetchDashboard = async () => {
    const dash = await getDashboard(searchInput)
    if (dash.status == 'ERROR') {
      setError(dash.error)
      return
    } 

    console.log(dash)
  }

  useEffect(() => {
    setError('')
    if (searchInput) {
      fetchDashboard()
    }
    
  }, [searchInput]);
  

  return (
    <CustomThemeProvider>
        <CssBaseline/>
        {console.log(searchInput)}
        <Navbar setSearchInput={setSearchInput}/>
        <Box  >
          {searchInput}
        <Typography>error: {error}</Typography>
        <Intro/>
        </Box>        

    </CustomThemeProvider>
  );
}

export default App;
