// import data from 'data.json'

// import { useState } from 'react'
import iPhone from '../images/iPhone.jfif'


const items = ({item, nameClass}) => {

    const handleAddToCart = (name, price) =>{
        console.log(`You just added the product ${name} of price Rs. ${price} to cart`)
    }

    return  <>
        <div className = {`${nameClass}`}>
            <div className = 'product'>
                <img src = { iPhone } alt = 'iPhone'/>
                <p>{item.name}</p>
                <p>{`Rs. ${ item.price }`}</p>
                <button onClick= { () => {handleAddToCart(item.name, item.price)}}>
                    Add to Cart
                </button>
            </div>
        </div>
    </>  
}

export default items;