//depenedencies
import { Link } from 'react-router-dom'

//image
import brandImage from '../images/brandImage.png'
import searchSymbol from '../images/searchSymbol.png'
//stylesheet


//components
import Footer from '../components/footer'
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
        <Footer />
        
    </>    
}
export default Home;