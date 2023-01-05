//depenedencies
import { Link } from 'react-router-dom'

//image
import brandImage from '../images/brandImage.png'
import searchSymbol from '../images/searchSymbol.png'
//stylesheet


//components
import Footer from '../components/footer'
import Category from '../components/category'

//data
import data from '../Data/data.json'
const Home = () => {
    const handleSearchSubmit= (e)=> {
        e.preventDefault();
        console.log( " you just pressed the search submit button")
    }
    return <>
    
        <nav>
            <ul>
                <li>
                    <Link to = '/home'>
                        <img src = { brandImage } alt = 'brand' />
                    </Link>
                </li>
                <li>
                    <form onSubmit = { handleSearchSubmit }>
                        <input type = 'text' placeholder = 'Search'/>
                        <button type = 'submit'>
                            <img src = { searchSymbol } alt = 'search'/>
                        </button>
                    </form>
                </li>
                <li className = 'login' style = {{marginLeft : "auto"}}>
                    <Link to = 'login'>
                        Login
                    </Link>
                </li>
                <li className = 'signup'>
                    <Link to = 'signup'>
                        Sign Up
                    </Link> 
                </li>
            </ul>
        </nav>
        <div className = 'container'>
            <div className = 'row'>
                {
                    data.map((category) => {
                        return<>
                            <div className = 'col-sm-6 col-md-4 col-lg-4' style = {{boxShadow: "5px 5px 5px rgba(0,0,0,0.2)"}}>
                                <h2>
                                    {category.category}
                                </h2>
                                <div className = 'row'>
                                    <Category value = {category.items} key = {Math.floor(Math.random() * 10) + 1}/>
                                </div>
                            </div>
                        
                        </>
                    })
                }
            </div>
        </div>
        <Footer />

    </>    
}
export default Home;