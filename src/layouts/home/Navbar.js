import { AppBar, Toolbar, Typography, Box, Button, InputBase, Link } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import React, { useContext, useRef } from 'react'
import { styled, alpha } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { CustomThemeContext } from '../../contexts/ThemeContext';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    maxWidth: 1000,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '100ch',
      },
    },
  }));

export default function Navbar({setSearchInput}) {
    const {currentTheme, setTheme} = useContext(CustomThemeContext)
    const searchRef = useRef(null)

    function handleThemeChange(event) {
        currentTheme === 'dark' ? setTheme('light') : setTheme('dark')
    }

    function handleSubmit(e) {
        e.preventDefault()
        setSearchInput(searchRef.current.value)
    }

    return (
         <AppBar position='sticky'>
            <Toolbar>
                <Link href="/home" sx={{mt: 1}}><img style={{maxHeight: 35}} src='logo192.png' alt="N/A"/></Link>
                <Link href="/home" sx={{textDecoration: 'none'}} color={'#ffffff'}><Typography variant='h5' sx={{pl: 1, pr: 1, fontSize: {xs: 12, sm: 16, md: 32}}}>Ethermine Grapher</Typography></Link>
                
                <form onSubmit={handleSubmit}>
                    <Search >
                        <SearchIconWrapper>
                        <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                        placeholder="Ethereum Miner Address"
                        inputProps={{ 'aria-label': 'search' }}
                        inputRef={searchRef}
                        />
                    </Search>
                </form>


                <Box sx={{ flexGrow: 1 }} />
                <Box >
                    <IconButton onClick={handleThemeChange} color="inherit">
                        {currentTheme === 'light' ? <Brightness7Icon /> : <Brightness4Icon />}
                    </IconButton>
                </Box>

            </Toolbar>
        </AppBar>
    )
}
