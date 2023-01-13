import styled from '@emotion/styled'
import { Box, Button, Card, CardMedia, Grid, Rating, Stack, Typography } from '@mui/material'
import React from 'react'
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';

const Product = ({item}) => {
  const Content = styled(Typography)({
    fontFamily: 'Arial',
    fontSize: "14px",
    fontWeight: 520
  })
  console.log(item.image)
  return (
    <Grid item>
        <Box>
        <img src={`images/${item.image}.jpg`} height='170' width='100%' alt='Image' /> 
        </Box>
        <Typography variant='h5'  color="success" sx={{mt: '10px' }}>{item.name}
        {(item.status === 'sold-out') && <Button color='error' sx={{ mt: 0.5, ml: 1, fontSize: '10px', padding: '0.5px 0.5px '}} type="submit" variant="outlined" >Sold Out
          </Button>}
        {(item.status !== 'sold-out') && <Button color='primary' sx={{ mt: 0.5, ml: 1, fontSize: '10px', padding: '0.5px 0.5px '}} type="submit" variant="outlined" >Available
          </Button>}  
        </Typography>
        <Stack direction="row" sx={{justifyContent: 'space-between', mr: 3, ml: 3, mt: 1}}> 
            <Content >Quantity: {item.quantity} kg</Content>
            <Content>Price: Rs.{item.price}</Content>
        </Stack>
        <Stack direction="row" sx={{justifyContent: 'space-between', m: 2}}> 
            <Rating name="read-only" value={item.rate} readOnly />
            {(item.status === 'sold-out') && <Button variant="outlined" color="error" sx={{fontSize: '12px'}}><ProductionQuantityLimitsIcon />Stock Empty</Button>}
            {(item.status !== 'sold-out') && <Button variant="outlined" sx={{fontSize: '12px'}}><ShoppingCartSharpIcon />Add To Cart</Button>}
        </Stack>
    </Grid>
  )
}

export default Product