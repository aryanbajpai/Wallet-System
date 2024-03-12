import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Login } from './Components/login';
import { Register } from './Components/register';
import { Dashboard } from './Components/dashboard';
import { NavBar } from './Components/NavBar';
import { Home } from './Components/Home';
import { Balance } from './Components/Balance';

function App() {

  return (
    <>
        <Router>
        <NavBar/>
        
          <Routes>
          
             <Route path='/' exact Component={Home}/>
             <Route path='/login' Component={Login}/>
             <Route path='/register' Component={Register}/>
             <Route path='/dashboard/:username' Component={Dashboard} /> 
             <Route path='/balance/:username' Component={Balance}/>
          </Routes>
        </Router>
    </>
  )
}

export default App
