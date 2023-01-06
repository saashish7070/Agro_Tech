import React,{useState,useEffect} from 'react'
import axios from 'axios'
const Items = () =>{
    const [container, setContainer] = useState([]);
    const fetchItems = async () =>{
        try{
            const data = await axios('http://localhost:8080/');
            setContainer(data.data.products);
        }catch(err){
            console.log(err.message);
        }
    }
    useEffect(()=>{
        fetchItems();
    },[])
    return (
        
        <>
            {container}
        </>
    )
}
export default Items;
