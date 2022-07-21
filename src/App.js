
import './App.css';
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
import CheckOut from './pages/CheckOut';
import Gloves from './pages/Gloves';
import Balls from './pages/Balls';
import ContactUs from './pages/ContactUs';
import Cleats from './pages/Cleats';
import { items } from "./data"
import { useEffect, useState } from 'react';

function App() {

  const [cart, setCart] = useState([])

  function addToCart(item) {
    setCart([...cart, { ...item, quantity: 1 }])
    console.log("adding to cart in app class")
  }

  function numberOfItems() {
    let counter = 0
    cart.forEach(item => {
      counter += item.quantity
    })
    return counter
  }

  function changeQuantity(item3, quantity) {
    setCart(cart.map(product => {
      if (product.id === item3.id) {
        return {
          ...product,
          quantity: +quantity
        }
      } else {
        return product
      }
    }))
  }

  function removeItem(item2) {
    setCart(cart.filter(product => product.id !== item2.id))
  }


  return (

    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/AboutUs' element={<AboutUs />} />
          <Route exact path='/FindUs' element={<FindUs />} />
          <Route exact path='/ShoppingCart' element={<ShoppingCart  items={items} cart={cart} changeQuantity={changeQuantity} removeItem={removeItem} />} />
          <Route exact path='/Login' element={<Login />} />
          <Route exact path='/Signup' element={<Signup />} />
          <Route exact path='/AboutCristiano' element={<AboutCristiano />} />
          <Route exact path='/Jerseys' element={<Jerseys addToCart={addToCart} cart={cart} />} />
          <Route exact path='/Gloves' element={<Gloves addToCart={addToCart} cart={cart}/>} />
          <Route exact path='/Balls' element={<Balls addToCart={addToCart} cart={cart}/>} />
          <Route exact path='/ContactUs' element={<ContactUs />} />
          <Route exact path='/Cleats' element={<Cleats addToCart={addToCart} cart={cart}/>} />
          <Route exact path='/CheckOut' element={<CheckOut />} />

        </Routes>
      </div>
    </Router>

  );
}

export default App;
