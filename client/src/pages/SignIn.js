import styled from '@emotion/styled'
import { Box, Button, Card, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import GoogleIcon from '@mui/icons-material/Google';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const SignIn = () => {
    const MainBox = styled(Box)({
        display: 'flex',
        backgroundImage: `url(${"images/loginback.jpg"})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '80vh',
        alignItems: 'center',
        justifyContent: 'center'
    })
    const LoginCard = styled(Card)({
        backgroundColor: 'white',
        height: '90%',
        width: '70%',
        borderRadius: '25px'
    })
    const TitleLogin = styled(Stack)({
        justifyContent: 'space-between'
    })
    const Typo1 = styled(Typography)({
        paddingLeft: '30px',
        paddingTop: '10px',
    })
    const Typo2 = styled(Typography)({
        fontSize: '14px',
        paddingTop: '12px'
    })
    const CheckLogin = styled(Stack)({
        justifyContent: 'space-between',
        paddingRight: '30px',
        paddingTop: '10px',
    })
    const LoginBlock = styled(Box)({
        display: 'flex',
        marginTop: "50px",
        marginRight: '50px',
        justifyContent: 'space-evenly'
    })
  return (
    <MainBox>
        <LoginCard>
            <TitleLogin direction="row">
                <Typo1 variant='h6' color="primary">Login Form</Typo1>
                <CheckLogin direction="row">
                    <Typo2 >Donot have any account</Typo2>
                    <Button variant='outlined' sx={{fontSize: '12px',ml: 2,mt: 1}}>Sign Up</Button>
                </CheckLogin>
            </TitleLogin>
            <LoginBlock>
                    <img src={`images/agritech.jpg`} height='300' width='40%' alt='Image' />
                    <Box sx={{display: 'block',}}>
                        <Typography variant='h6'>Welcome to AgroTech</Typography>
                        <Box
                            component="form"
                            sx={{
                                
                                '& .MuiTextField-root': { m: 1, width: '25ch' },
                            }}
                            noValidate
                            autoComplete="off"
                            >
                                <TextField
                                required
                                id="outlined-required"
                                label="UserName"
                                />
                                <br />
                                <TextField
                                required
                                id="outlined-required"
                                label="Password"
                                type="password"
                                variant="outlined"
                                />
                                <br />
                                <Button variant='outlined' sx={{width: '100px', padding: '5px', marginTop: '10px'}}>
                                    Login
                                </Button>    
                                <Typography sx={{fontSize: '14px', marginTop: '18px'}}>Sign In with:</Typography>
                                <Stack direction="row" spacing={{xs: 2, md: 3}} sx={{display: 'flex', justifyContent: 'center', marginTop: '15px'}}>
                                    <FacebookOutlinedIcon color='info' sx={{cursor: 'pointer'}}/>
                                    <img src={`images/google.jpg`} height='22' width='22' alt='Image' className='googleIcon'/> 
                                    <LinkedInIcon sx={{cursor: 'pointer', color: ' #0072b1'}}/>
                                </Stack>
                            </Box>
                    </Box>
            </LoginBlock>
        </LoginCard>
    </MainBox>
  )
}

export default SignIn