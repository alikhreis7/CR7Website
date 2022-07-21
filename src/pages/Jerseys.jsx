import * as ReactBootStrap from "react-bootstrap";
import { Link } from 'react-router-dom';
import NavBar from "../components/navbar";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import manunitedj from '../assets/manunited.jpeg';
import portugalj from '../assets/portugal.jpeg';
import juvej from '../assets/juve.jpeg';
import { useEffect } from "react";
import { items } from "../data"
import CardComponent from "../components/CardComponent";
import React from "react";


function Jerseys({ addToCart, cart }) {
  useEffect(() => {
    console.log(cart)
  }, []);
  
  function addItemToCart(item1){
    console.log("ITEM ADDING TO CART", item1)
    addToCart(item1)
  }
  return (
    <div>
      <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item active>Shop Our Products</Breadcrumb.Item>
        <Breadcrumb.Item active>Jerseys</Breadcrumb.Item>
      </Breadcrumb>

      <h1><center>Team Jerseys</center></h1>

      <CardGroup>
        
        <CardComponent title={items[0].title} price={items[0].originalPrice} description={items[0].description} img={juvej}  addToCart={addToCart} cart={cart} item={items[0]} />
        <CardComponent title={items[1].title} price={items[1].originalPrice} description={items[1].description} img={manunitedj} addToCart={addToCart} cart={cart} item={items[1]} />
        <CardComponent title={items[2].title} price={items[2].originalPrice} description={items[2].description} img={portugalj} addToCart={addToCart} cart={cart} item={items[2]} />
      </CardGroup>

    </div>
  );
}

export default Jerseys;