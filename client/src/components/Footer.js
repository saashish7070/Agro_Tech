import styled from '@emotion/styled'
import { Box, Typography } from '@mui/material'
import {Stack } from '@mui/system'
import React from 'react'

const Footer = () => {
    const FooterContainer = styled(Box)({
        height: '200px',
        backgroundColor: '#C7DFD3',
        display: 'block',
        justifyContent: 'center'
    })
    const Typo = styled(Typography)({
        color : '#13402A'
    })
  return (
    <FooterContainer>
        <Box sx={{display:'flex', justifyContent:'center', paddingTop: '30px'}}>
            <Stack direction='row' sx={{display: 'flex',justifyContent: 'space-between',width: '60%'}}>
                <Typo>Contact Us</Typo>
                <Typo>Get Help</Typo>
                <Typo>About Us</Typo>
            </Stack>
        </Box>
    </FooterContainer>
  )
}

export default Footer