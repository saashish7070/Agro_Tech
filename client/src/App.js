import { createTheme, ThemeProvider } from '@mui/material';
import { blueGrey, green } from '@mui/material/colors';
import './App.css';
import Navbar from './components/Navbar';


const theme = createTheme({
  palette: {
    primary: green,
    secondary: blueGrey
  }
})
function App() {
  console.log("Hello")
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
          <Navbar />
          {/* <Items /> */}
      </div>
    </ThemeProvider>
  );
}

export default App;
