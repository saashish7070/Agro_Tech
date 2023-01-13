import { styled, Toolbar, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import React from 'react'
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

const Track = () => {
    const NavTool = styled(Toolbar)({
        justifyContent: 'space-between'
      });
      const Typo = styled(Typography)({
        minWidth: 20,
        fontSize: '15px',
          cursor: 'pointer',
           p:0.1,
      })
      const NavElement = styled(Stack)({
        marginRight: '30px',
        cursor: 'pointer',
        "&:hover":{
          color: 'orange'
          }
      })
  return (
      <NavTool>
            <Typography variant='h5' sx={{fontSize: '14px',cursor:'pointer'}} >Need Help? Call us: (+977) 9860000000</Typography>    
        <NavTool>
            <NavElement direction='row'><LocationOnOutlinedIcon /><Typo>Our Store</Typo></NavElement>
            <NavElement direction='row'><LocalShippingOutlinedIcon /><Typo>Track your order</Typo></NavElement>
        </NavTool>              
       </NavTool>
  )
}

export default Track