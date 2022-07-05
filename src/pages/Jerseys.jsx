import * as ReactBootStrap from "react-bootstrap";
import {Link} from 'react-router-dom';
import NavBar from "../components/navbar";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import manunitedj from '../manunited.jpeg';
import portugalj from '../portugal.jpeg';
import juvej from '../juve.jpeg';



function Jerseys() {
  return (
<div>
<Breadcrumb>
  <Breadcrumb.Item href="/CR7-SEG3125-Step3/">Home</Breadcrumb.Item>
  <Breadcrumb.Item active>Shop Our Products</Breadcrumb.Item>
  <Breadcrumb.Item active>Jerseys</Breadcrumb.Item>
</Breadcrumb>

<h1><center>Team Jerseys</center></h1>

<CardGroup>
<Card style={{ width: '0 rem' }}>
      <Card.Img variant="top" src={juvej} />
      <Card.Body>
        <Card.Title>Juventus F.C. Jersey - $150.99</Card.Title>
        <Card.Text>
        Straight from Ronaldo’s locker at the Allianz Stadium, 
        his jerseys in a numbered and hologrammed box, exclusively for collectors 
        who recognise the value in every detail.
        </Card.Text>
        <Card.Text>
        Of course, you cannot select a size for this Home jersey:
        Cristiano wears a size “7”.
        </Card.Text>
        <center><Button variant="primary" >Add to Cart</Button></center>
      </Card.Body>
    </Card>


    <Card style={{ width: '0 rem' }}>
      <Card.Img variant="top" src={manunitedj} />
      <Card.Body>
        <Card.Title>Manchester United F.C. Jersey - $140.99</Card.Title>
        <Card.Text>
        Be sure you are outfitted properly by grabbing this Cristiano 
        Ronaldo 2021/22 Home Replica Player Jersey! It's exciting being a 
        devout Manchester United fan and your youngster will be the biggest one 
        around in this adidas jersey, featuring crisp team graphics with AEROREADY technology 
        that will keep them comfortable as they cheer the squad to a victory.
        </Card.Text>
        <center> <Button variant="primary">Add to Cart</Button> </center>
      </Card.Body>
    </Card>

    <Card style={{ width: '0 rem' }}>
      <Card.Img variant="top" src={portugalj} />
      <Card.Body>
        <Card.Title>Portugal Football Jersey - $110.99</Card.Title>
        <Card.Text>
        Rep your team in the Portugal Stadium Home Shirt. 
        Highly breathable fabric helps keep sweat off your skin, so you stay cool 
        and comfortable on the pitch or in the stands. The recycled polyester used in Nike 
        products begins as recycled plastic bottles, which are cleaned, shredded into flakes 
        and converted into pellets.
        </Card.Text>
        <center><Button variant="primary">Add To Cart</Button></center>
      </Card.Body>
    </Card>
    </CardGroup>

    


    
</div>
  );
}

export default Jerseys;