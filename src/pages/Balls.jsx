import * as ReactBootStrap from "react-bootstrap";
import {Link} from 'react-router-dom';
import NavBar from "../components/navbar";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import matchb from '../assets/match.jpeg';
import championb from '../assets/champion.jpeg';
import portob from '../assets/pball.jpeg';
import { items } from "../data"
import CardComponent from "../components/CardComponent";
import React from "react";




function Balls({ addToCart, cart }) {
  function addItemToCart(item1){
    console.log("ITEM ADDING TO CART", item1)
    addToCart(item1)
  }
  return (
    <div>
<Breadcrumb>
  <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
  <Breadcrumb.Item active>Shop Our Products</Breadcrumb.Item>
  <Breadcrumb.Item active>Balls</Breadcrumb.Item>
</Breadcrumb>

<h1><center>Balls</center></h1>

<CardGroup>
<CardComponent title={items[3].title} price={items[3].originalPrice} description={items[3].description} img={portob}  addToCart={addToCart} cart={cart} item={items[3]} />
<CardComponent title={items[4].title} price={items[4].originalPrice} description={items[4].description} img={championb} addToCart={addToCart} cart={cart} item={items[4]} />
<CardComponent title={items[5].title} price={items[5].originalPrice} description={items[5].description} img={matchb} addToCart={addToCart} cart={cart} item={items[5]} />

    </CardGroup>
</div>
  );
}

export default Balls;