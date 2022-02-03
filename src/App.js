import {Box, CssBaseline} from '@mui/material'
import Navbar from './components/navbar';
import { CustomThemeProvider } from './contexts/ThemeContext';


function App() {

  return (
    <CustomThemeProvider>
        <CssBaseline/>

        <Navbar/>
        <Box sx={{height: 1000}}>

          </Box>        
    </CustomThemeProvider>
  );
}

export default App;
