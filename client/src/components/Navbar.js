import styled from '@emotion/styled'
import { AppBar, Box, CssBaseline,Stack, Toolbar, Typography } from '@mui/material'
import React from 'react'
import '../index.css'
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import PersonAddAltRoundedIcon from '@mui/icons-material/PersonAddAltRounded';
import EssentialSearch from './EssentialSearch';
import { NavLink } from 'react-router-dom';

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
    textDecoration: 'none',
    "&:hover":{
      color: 'green'
      }
  })
  return (
    <AppBar position='static' sx={{background: 'linear-gradient(to right bottom,#118708, #a65602)'}}>
      <CssBaseline />
      <NavTool>
        <NavLink to='/' className= 'link'>
          <Typography variant='h5' sx={{color: 'white',cursor:'pointer'}} >AgroTech</Typography>
        </NavLink>
        <EssentialSearch />
        <MenuData>
              <Box sx={{display: 'flex' ,justifyContent: 'space-between'}}>
                  
                    <NavElement direction='row'>
                          <AccountCircleRoundedIcon/>
                          <NavLink to='/signIn' className='link'>
                                  <Typo>Sign In</Typo>
                          </NavLink>
                      </NavElement>
                 
                      <NavElement direction='row'>
                      <PersonAddAltRoundedIcon/> 
                      <NavLink to='/register' className= 'link'>
                      <Typo >Register</Typo>
                      </NavLink>
                      </NavElement>
                      <NavElement direction='row'>                        
                      <ShoppingCartSharpIcon/> 
                      <NavLink to='/cart' className= 'link'>
                      <Typo >Cart</Typo>
                      </NavLink>
                      </NavElement>
          </Box>
          
        </MenuData>
      </NavTool>
    </AppBar>
  )
}

export default Navbar