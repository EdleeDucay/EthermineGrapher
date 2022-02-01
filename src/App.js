import { createTheme, ThemeProvider } from '@mui/material/styles';
import {Box, CssBaseline} from '@mui/material'
import Navbar from './components/navbar';
import { themeOptions } from './styles/theme';

const theme = createTheme(themeOptions)

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>

      <Navbar/>
      <Box sx={{height: 1000}}>

        </Box>        
    </ThemeProvider>

  );
}

export default App;
