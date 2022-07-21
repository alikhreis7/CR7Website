import * as ReactBootStrap from "react-bootstrap";
import {Link} from 'react-router-dom';
import NavBar from "../components/navbar";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import superfly from '../assets/superfly.jpeg';
import mercu from '../assets/yaya.jpeg';
import empower from '../assets/yo.jpeg';
import { items } from "../data"
import CardComponent from "../components/CardComponent";
import React from "react";


function Cleats({ addToCart, cart }) {
  function addItemToCart(item1){
    console.log("ITEM ADDING TO CART", item1)
    addToCart(item1)
  }
  return (
<div>

<Breadcrumb>
  <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
  <Breadcrumb.Item active>Shop Our Products</Breadcrumb.Item>
  <Breadcrumb.Item active>Cleats</Breadcrumb.Item>
</Breadcrumb>

<h1><center>Football Cleats</center></h1>

<CardGroup>
<CardComponent title={items[6].title} price={items[6].originalPrice} description={items[6].description} img={superfly}  addToCart={addToCart} cart={cart} item={items[6]} />
<CardComponent title={items[7].title} price={items[7].originalPrice} description={items[7].description} img={mercu} addToCart={addToCart} cart={cart} item={items[7]} />
<CardComponent title={items[8].title} price={items[8].originalPrice} description={items[8].description} img={empower} addToCart={addToCart} cart={cart} item={items[8]} />
</CardGroup>



</div>
  );
}

export default Cleats;