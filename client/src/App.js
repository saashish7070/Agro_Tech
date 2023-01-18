import { createTheme, ThemeProvider } from '@mui/material';
// import { green } from '@mui/material/colors';
import './App.css';
// import EssentialSearch from './components/EssentialSearch';
import Navbar from './components/Navbar';
import Items from './pages/Items';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import SecNavBar from './components/SecNavBar';
import Track from './components/Track';
import Footer from './components/Footer';
import SignIn from './pages/SignIn';
import Register from './pages/Register';
import Cart from './pages/Cart';
import Categories from './pages/Categories';

const theme = createTheme({
  palette: {
    primary: {
      main: '#118708'
    },
    secondary:{
      main: '#a65602'
    },
    info:{
      main: '#3b5998'
    }
  }
})
function App() {
  console.log("Hello")
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Router>
          <Track />
          <Navbar />
          <SecNavBar />
          <Routes>
          <Route exact path='/' element={< Home />}></Route>
          <Route exact path='/items' element={<Items />}></Route>
          <Route exact path='/signIn' element={<SignIn />}></Route>
          <Route exact path='/register' element={<Register />}></Route>
          <Route exact path='/cart' element={<Cart />}></Route>
          <Route exact path='/categories' element={<Categories />}></Route>

          </Routes>
          <br />
          <Footer />
        </Router>
          
      </div>
    </ThemeProvider>
  );
}

export default App;
