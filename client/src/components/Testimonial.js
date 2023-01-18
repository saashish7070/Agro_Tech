import styled from '@emotion/styled'
import {Grid, Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import '../index.css'

const Testimonial = () => {
  const GridStyle = styled(Grid)({
    border: '0.5px solid #095881'
  })
  const Content = styled(Typography)({
    display:'flex',
    fontFamily: 'Arial',
    fontSize: "18px",
    fontWeight: 650,
    alignItems: 'center',
    color: '#095881'
  })
  const [testimonialData,setTestimonialData] = useState([
    {name: "Ram Shrestha",
    image: "ram.jpg",
    message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},
    {name: "Shyam Shrestha",
    image: "shyam.jpg",
    message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},
    {name: "Hari Shrestha",
    image: "hari.jpg",
    message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},
]) 
  return (
    <Box sx={{mt: 5}}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: "none", sm: 2, md: 3 }} sx={{display:'flex', justifyContent: 'center',}}>
          {testimonialData.map(item => {
            return(
              <GridStyle item sx={{justifyContent: 'space-between', mr:2, mt: 1,width:'350px',height: '400px', borderRadius: '15px'}}>
                <Stack direction="row" sx={{justifyContent: 'space-between', mr: 8}}> 
                  <Box>
                    <img src={`images/${item.image}`} height='100' width='100' alt='Image' className='profile'/> 
                  </Box>
                  <Content>{item.name}</Content>
                </Stack>
                <br />
                <br />
                <Typography sx={{ml: 1 ,mr : 3}}>{item.message}</Typography>
              </GridStyle>
              )})}
      </Grid>
    </Box>
  )
}

export default Testimonial