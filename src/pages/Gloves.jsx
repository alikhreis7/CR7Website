import * as ReactBootStrap from "react-bootstrap";
import {Link} from 'react-router-dom';
import NavBar from "../components/navbar";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import nga from '../assets/nga.jpeg';
import her from '../assets/her.jpeg';
import avata from '../assets/avata.jpeg';
import { items } from "../data"
import CardComponent from "../components/CardComponent";
import React from "react";



function Gloves({ addToCart, cart }) {
  function addItemToCart(item1){
    console.log("ITEM ADDING TO CART", item1)
    addToCart(item1)
  }
  return (
<div>

<Breadcrumb>
  <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
  <Breadcrumb.Item active>Shop Our Products</Breadcrumb.Item>
  <Breadcrumb.Item active>Goalie Gloves</Breadcrumb.Item>
</Breadcrumb>

<h1><center>Goalie Gloves</center></h1>

<CardGroup>
<CardComponent title={items[9].title} price={items[9].originalPrice} description={items[9].description} img={nga}  addToCart={addToCart} cart={cart} item={items[9]} />
<CardComponent title={items[10].title} price={items[10].originalPrice} description={items[10].description} img={her} addToCart={addToCart} cart={cart} item={items[10]} />
<CardComponent title={items[11].title} price={items[11].originalPrice} description={items[11].description} img={avata} addToCart={addToCart} cart={cart} item={items[11]} />
</CardGroup>
    
</div>
  );
}

export default Gloves;