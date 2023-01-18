import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { Box, Divider, Grid, Paper, Stack, Typography } from '@mui/material';
import styled from '@emotion/styled';
import Product from '../components/Product';
import Testimonial from '../components/Testimonial';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: 'white',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    border: '0.5px solid #118708',
    paddingLeft: '40px',
    paddingRight: '40px',
    textAlign: 'center',
    color: '#118708',
    fontWeight: 600,
    fontSize: 15,
    fontFamily: 'sans-serif',
    cursor: 'pointer',
  }));

const Home = () =>{
    const [container, setContainer] = useState([{name: "Carrot",image: 'carrot',category: 'vegetable',status: 'sold-out' ,price: 300, quantity: 2, rate: 3},{name: "Apple",image: 'apple',category: 'vegetable',price: 400, quantity: 4, rate: 5},{name: "Mango",image: 'mango',category: 'vegetable',price: 280, status:'sold-out', quantity: 6, rate: 2},{name: "Raddish",image: 'raddish',category: 'vegetable',price: 450, quantity: 5, rate: 4}]);
    const [category,setCategory] = useState(['Vegetables','Fruits','Dry Fruits']);
    const [ad,setAd] = useState(['mango.jpg','agro.jpg','carrot.jpg'])
    const fetchItems = async () =>{
        try{
            const data = await axios('http://localhost:8080/');
            setContainer(data.data.products);
            setCategory(data.data.categories);
        }catch(err){
            console.log(err.message);
        }
    }
    useEffect(()=>{
        fetchItems();
    },[])
    return (
        
        <div>
            <Stack direction="row" sx={{display: 'flex', justifyContent: 'space-between', mr: 10, ml: 2,mb: 10,mt: 5}}>
                <Typography variant='h5' sx={{color: 'green' }}>Popular Items</Typography>
                <Stack direction="row" spacing={3} sx={{display:'flex' , justifyContent: 'center', alignItems: 'center'}}>
                    {category.map(item => {
                        return(
                            <Item sx={{borderRadius: '25px'}}>{item}</Item>
                        )
                    })}
                </Stack>
            </Stack>
            <Box sx={{display:'flex', justifyContent: 'center',ml: 8}}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 3, sm: 4, md: 6 }}>
                        {container.map(item=> <Product item={item} key={item}/>)}
                </Grid>
            </Box>
            <Divider />
            <Box sx={{display:'flex',justifyContent:"center",mt: 2}}>
                    <Testimonial />
            </Box>
        </div>
    )
}
export default Home;
