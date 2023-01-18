import { Box, Button, Paper, Stack, Table, TableBody, TableCell, TableHead, TableRow, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import styled from '@emotion/styled';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Cart = () => {
  const [data,setData] = useState([{ds: "Carrot",status : 14, qt : 4, price : 750, remove: false}])
  const [amount,setAmount]= useState([{subTotal: '0.0',delivery:'0.0',discount: '0.0' , total: '0.0'}])
  const CellStyle = styled(TableRow)({
    cursor: 'pointer'
  })
  const BoxStyle = styled(Box)({
      margin: '10px 10px',
      width: '250px',
      padding: '20px 25px',
      border: '0.2px solid green',
      display: 'flex',
      justifyContent: 'space-evenly'
  })
  const Typo = styled(Typography)({
    fontWeight: '650'
  })
  const ButtonStyle = styled(Button)({
    padding: '15px 50px'
  })
  return (
    <Box sx={{display: 'block'}}>
      <Paper sx={{margin: '40px 150px',padding: '5px'}}>
        <Table sx={{width: '100%',justifyContent: 'center'}}>
          <TableHead>
            <TableRow>
              <TableCell sx={{width: '550px'}}><b>Description</b></TableCell>
              <TableCell><b>Status(Days)</b></TableCell>
              <TableCell><b>Quantity</b></TableCell>
              <TableCell><b>Price</b></TableCell>
              <TableCell sx={{width: '50px'}}><b>Remove</b></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map(item => {
              return (
                <CellStyle>
                  <TableCell><b>{item.ds}</b></TableCell>
                  <TableCell>{item.status}</TableCell>
                  <TableCell>{item.qt}</TableCell>
                  <TableCell>Rs.{item.price}</TableCell>
                  <TableCell sx={{display: 'flex', justifyContent: 'center'}}><DeleteIcon /></TableCell>
                </CellStyle>
              )
            })}
          </TableBody>
        </Table>
        <Box sx={{display: 'flex',justifyContent: 'center',mt: 4}}>
            <BoxStyle>
              <Typo>Sub Total:</Typo>
              <Typo>Rs.{amount.map(item=>item.subTotal)}</Typo>
            </BoxStyle>
            <BoxStyle>
              <Typo>Delivery:</Typo>
              <Typo>Rs.{amount.map(item=>item.delivery)}</Typo>
            </BoxStyle>
            <BoxStyle>
              <Typo>Discount:</Typo>
              <Typo>Rs.{amount.map(item=>item.discount)}</Typo>
            </BoxStyle>
            <BoxStyle>
              <Typo>Total:</Typo>
              <Typo>Rs.{amount.map(item=>item.total)}</Typo>
            </BoxStyle>
        </Box>
        <Box sx={{width: '100%', display:'flex',ml: 3, justifyContent: 'flex-start'}}>
          <Typography sx={{fontSize: '13px'}}>If you have a promotion code,please enter it here:</Typography>  
        </Box>
        <Stack direction='row' sx={{marginTop: '20px',display: 'flex',justifyContent: 'space-evenly'}}>
            <TextField variant='outlined' label="Promo Code" placeholder='Please enter promocode here' sx={{width: '600px'}}/>
            <ButtonStyle color='primary' variant='contained'>Apply Discount</ButtonStyle>
            <ButtonStyle color='primary' variant='contained'>Checkout</ButtonStyle>
        </Stack>
        <Stack direction='row' sx={{display: 'flex', justifyContent: 'flex-end',mt: 1,mb: 3}}>
            <ButtonStyle color='primary' variant='contained'>Continue Shopping<ArrowForwardIosIcon /></ButtonStyle>
        </Stack>
      </Paper>
      </Box>
  )
}

export default Cart