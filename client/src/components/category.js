import { Link } from "react-router-dom"

import product1 from '../images/product1.jpg'
import product2 from '../images/product2.jpg'
import product3 from '../images/product3.png'
import product4 from '../images/product4.jpg'

const Category = ({value}) =>{
    const imageArray = [product1, product2, product3, product4]
    return <>
        {
            value.map((item, index) => {
                if(index<4){
                    return <>
                        <div className = 'col-6'>
                            <img src = {imageArray[index]} alt = 'product' style = {{width: "100%"}}/>
                            <p>{item.name}</p>
                        </div>
                    </>
                }
            })
        }
     </>
}

export default Category