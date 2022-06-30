
import './App.css';
import logo from './logo.jpeg';
import * as ReactBootStrap from "react-bootstrap";
import NavBar from './components/navbar';
import { HashRouter as Router, Route, Routes, Link } from 'react-router-dom'
import AboutUs from './pages/AboutUs';
import FindUs from './pages/FindUs';
import ShoppingCart from './pages/ShoppingCart';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import AboutCristiano from './pages/AboutCristiano';
import Jerseys from './pages/Jerseys';
import Gloves from './pages/Gloves';
import Balls from './pages/Balls';
import ContactUs from './pages/ContactUs';
import Cleats from './pages/Cleats';

function App() {
  return (

<Router>
<div>
    <NavBar/>
    <Routes>
      <Route exact path='/' element={<Home/>} />
      <Route exact path='/AboutUs' element={<AboutUs/>} />
      <Route exact path='/FindUs' element={<FindUs/>} />
      <Route exact path='/ShoppingCart' element={<ShoppingCart/>} />
      <Route exact path='/Login' element={<Login/>} />
      <Route exact path='/Signup' element={<Signup/>} />
      <Route exact path='/AboutCristiano' element={<AboutCristiano/>} />
      <Route exact path='/Jerseys' element={<Jerseys/>} /> 
      <Route exact path='/Gloves' element={<Gloves/>} /> 
      <Route exact path='/Balls' element={<Balls/>} />
      <Route exact path='/ContactUs' element={<ContactUs/>} />
      <Route exact path='/Cleats' element={<Cleats/>} />

    </Routes>
  </div>
</Router>
  
  );
}

export default App;
