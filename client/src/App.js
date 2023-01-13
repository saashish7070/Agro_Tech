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

const theme = createTheme({
  palette: {
    primary: {
      main: '#118708'
    },
    secondary:{
      main: '#a65602'
    },
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
          
          </Routes>
        </Router>
          {/* <EssentialSearch /> */}
      </div>
    </ThemeProvider>
  );
}

export default App;
