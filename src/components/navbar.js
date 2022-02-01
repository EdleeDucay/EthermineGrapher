import { AppBar, Toolbar, Typography, Box, Button, InputBase } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import React from 'react'
import { styled, alpha } from '@mui/material/styles';

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
        width: '20ch',
      },
    },
  }));

export default function Navbar() {
    return (
        // <AppBar>
         <AppBar position='sticky'>
            <Toolbar>
                <img style={{maxHeight: 50}} src='logo192.png' alt="N/A" />
                <Typography variant='h5' sx={{pl: 1}}>Ethermine Grapher</Typography>
                <Search>
                    <SearchIconWrapper>
                    <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                    placeholder="Ethereum Miner Address"
                    inputProps={{ 'aria-label': 'search' }}
                    />
                </Search>


                <Box sx={{ flexGrow: 1 }} />
                <Box sx={{pr: 5}}>
                    <Button href='./login' color='secondary' variant='contained'><Typography>Logout</Typography></Button>
                </Box>

            </Toolbar>
        </AppBar>
    )
}
