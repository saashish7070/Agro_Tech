import styled from '@emotion/styled'
import { AppBar, Box, CssBaseline, Link, Stack, Toolbar, Typography } from '@mui/material'
import React from 'react'
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import PersonAddAltRoundedIcon from '@mui/icons-material/PersonAddAltRounded';
import EssentialSearch from './EssentialSearch';

const Navbar = () => {
  const NavTool = styled(Toolbar)({
    justifyContent: 'space-between'
  });
  const MenuData = styled(Box)({
    justifyContent:'space-between'
  })
  const Typo = styled(Typography)({
    minWidth: 20,
     color: 'white',
      cursor: 'pointer',
       p:0.1,
  })
  const NavElement = styled(Stack)({
    marginRight: '30px',
    cursor: 'pointer',
    "&:hover":{
      color: 'white'
      }
  })
  return (
    <AppBar position='static' sx={{background: 'linear-gradient(to right bottom,#118708, #a65602)'}}>
      <CssBaseline />
      <NavTool>
        <Link href='http://localhost:3000/' sx={{textDecoration: 'none'}}>
          <Typography variant='h5' sx={{color: 'white',cursor:'pointer'}} >AgroTech</Typography>
        </Link>
        <EssentialSearch />
        <MenuData>
              <Box sx={{display: 'flex' ,justifyContent: 'space-between'}}>
                  <Link href='http://localhost:3000/signIn' sx={{textDecoration: 'none' }}>
                      <NavElement direction='row'><AccountCircleRoundedIcon /><Typo>Sign In</Typo></NavElement>
                  </Link>    
                  <Link href='http://localhost:3000/register' sx={{textDecoration: 'none'}}>
                      <NavElement direction='row'><PersonAddAltRoundedIcon/> <Typo >Register</Typo></NavElement>
                  </Link>
                  <Link href='http://localhost:3000/cart' sx={{textDecoration: 'none'}}>
                      <NavElement direction='row'><ShoppingCartSharpIcon/> <Typo >Cart</Typo></NavElement>
                  </Link>
          </Box>
          
        </MenuData>
      </NavTool>
    </AppBar>
  )
}

export default Navbar