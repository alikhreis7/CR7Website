import * as ReactBootStrap from "react-bootstrap";
import {Link} from 'react-router-dom';
import NavBar from "../components/navbar";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import nga from '../nga.jpeg';
import her from '../her.jpeg';
import avata from '../avata.jpeg';



function Gloves() {
  return (
<div>

<Breadcrumb>
  <Breadcrumb.Item href="/CR7-SEG3125-Step3/">Home</Breadcrumb.Item>
  <Breadcrumb.Item active>Shop Our Products</Breadcrumb.Item>
  <Breadcrumb.Item active>Goalie Gloves</Breadcrumb.Item>
</Breadcrumb>

<h1><center>Goalie Gloves</center></h1>

<CardGroup>
<Card style={{ width: '0 rem' }}>
      <Card.Img variant="top" src={nga} />
      <Card.Body>
        <Card.Title>NGA 2020 Evolution King - $74.99</Card.Title>
        <Card.Text>
        Color : Black/Gold
        Palm: 4mm ProLatex
        Backhand: BasicLatec
        Body: 6D Mesh
        Print: Screen Print
        Strap: Double Elastic
        Punch: Rubber
        Cut: Hybrid Roll
        Abrasion Zone: Yes
        Finger Protection: Yes
        </Card.Text>
        <center><Button variant="primary" >Add to Cart</Button></center>
      </Card.Body>
    </Card>


    <Card style={{ width: '0 rem' }}>
      <Card.Img variant="top" src={her} />
      <Card.Body>
        <Card.Title>Keepher Womens Hera Match Goalkeeper Glove - $84.99</Card.Title>
        <Card.Text>
        Women were not allowed to participate in the first Olympics; 
        therefore, the Hereaen games were created and dedicated to the goddess Hera. 
        Ronaldo is supporting this glove which is dedicated to all female goalkeepers 
        who choose to play such a demanding position.A comfortably snug glove allowing for 
        enhanced ball control and feel.
        </Card.Text>
        <center> <Button variant="primary">Add to Cart</Button> </center>
      </Card.Body>
    </Card>

    <Card style={{ width: '0 rem' }}>
      <Card.Img variant="top" src={avata} />
      <Card.Body>
        <Card.Title>Aviata Viper De Luxe V7 Goalkeeper Gloves - $74.99 </Card.Title>
        <Card.Text>
        Finger Protection: 5 Finger removable/customizable Exo-Skel
        Palm: 4mm + 3mm German ultra soft all-weather latex with embossed palm.
        Cut: Ergo-negative reverse.
        Body: Micro vent mesh pro air.
        Wrist Band: Pro stretch elastic with border and center pull loop.
        Backhand: Syntha ultra-soft ultra embossed.
        Strap: Aviata contour strap with customization window.
        Wrap: Top thumb roll.
        </Card.Text>
        <center><Button variant="primary">Add To Cart</Button></center>
      </Card.Body>
    </Card>
    </CardGroup>
    
</div>
  );
}

export default Gloves;