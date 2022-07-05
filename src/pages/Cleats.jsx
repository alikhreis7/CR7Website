import * as ReactBootStrap from "react-bootstrap";
import {Link} from 'react-router-dom';
import NavBar from "../components/navbar";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import superfly from '../superfly.jpeg';
import mercu from '../yaya.jpeg';
import empower from '../yo.jpeg';


function Cleats() {
  return (
<div>

<Breadcrumb>
  <Breadcrumb.Item href="/CR7-SEG3125-Step3/">Home</Breadcrumb.Item>
  <Breadcrumb.Item active>Shop Our Products</Breadcrumb.Item>
  <Breadcrumb.Item active>Cleats</Breadcrumb.Item>
</Breadcrumb>

<h1><center>Football Cleats</center></h1>

<CardGroup>
<Card style={{ width: '0 rem' }}>
      <Card.Img variant="top" src={superfly} />
      <Card.Body>
        <Card.Title>Nike Mercurial Superfly 8 Elite FG - $365.99</Card.Title>
        <Card.Text>
        The Nike Mercurial Superfly 8 Elite FG features a new look with specialised components to 
        let you play your fastest from start to finish. A stretchy collar provides extra support, and 
        the innovative plate provides instant responsiveness for quicker cuts at high speeds.
        </Card.Text>
        <center><Button variant="primary" >Add to Cart</Button></center>
      </Card.Body>
    </Card>


    <Card style={{ width: '0 rem' }}>
      <Card.Img variant="top" src={mercu} />
      <Card.Body>
        <Card.Title>Nike Mercurial Superfly 10 By Ronaldo - $520.99</Card.Title>
        <Card.Text>
        Ronaldo’s first name front and center, emblazoning a stark white “CR7STIANO” across 
        the lateral side, with the “7” rendered in gold to highlight his jersey number. Black laces and 
        ankle opening keep the silhouette’s top portion understated, allowing the gold outsole to speak 
        for itself. A matching Swoosh on the medial side underlines the trophy-like design, with gold 
        branding on the tongue tags and insole to complete the prestigious motif.
        </Card.Text>
        <center> <Button variant="primary">Add to Cart</Button> </center>
      </Card.Body>
    </Card>

    <Card style={{ width: '0 rem' }}>
      <Card.Img variant="top" src={empower} />
      <Card.Body>
        <Card.Title>Mercurial Superfly 8 Academy SG-PRO Anti-Clog - $209.99 </Card.Title>
        <Card.Text>
        Colourway is “Chile Red/Black/White/Total Orange”, and we get a much clearer look at that red 
        lightning bolt aesthetic that wraps around the entirety of the white base, while black accents 
        allow the Swoosh on the forefoot and mercurial branding to stand out. The orange colouring is 
        restricted to a cameo appearance on the soleplate, flashing on the stud tips. 
        That lightning obviously alludes to electricity.
        
        </Card.Text>
        <center><Button variant="primary">Add To Cart</Button></center>
      </Card.Body>
    </Card>
    </CardGroup>



</div>
  );
}

export default Cleats;