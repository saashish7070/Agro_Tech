import './static/App.scss';
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom'

//pages to be rendered
import Home from './Pages/Home'
import Login from './Pages/Login'
import SignUp from './Pages/SignUp'
import User from './Pages/User'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path = '/' element = { <Home /> }/>
          <Route path = '/signup' element = { <SignUp /> } />
          <Route path = '/User/:userId' element = { <User /> }/>
          <Route path = '/login' element = {<Login />}/>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
