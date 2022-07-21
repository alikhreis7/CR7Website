import * as ReactBootStrap from "react-bootstrap";
import {Link} from 'react-router-dom';
import NavBar from "../components/navbar";
import Image from 'react-bootstrap/Image';
import Carousel from 'react-bootstrap/Carousel';
import Free from '../assets/showoff.jpeg';
import ronaldofamily from '../assets/ronaldofamily.jpeg';
import family from '../assets/family.jpeg';
import "../App.css"
import Accordion from 'react-bootstrap/Accordion'


function Home() {
return (
<div class="Home" height="100px">
    <h1><center>Welcome to Cristiano Ronaldo Football!</center></h1>
    <Carousel variant="light">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Free}
      alt="showoff"
    />
    <Carousel.Caption>
      <h3>Welcome to our store!</h3>
      <p>Take advantage of the Free Shipping!</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={ronaldofamily}
      alt="ronaldo family"
    />
    <Carousel.Caption>
      <h5>Ronaldo's Family matching the Juventus Jerseys! </h5>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={family}
      alt="family"
    />
    <Carousel.Caption>
      <h5>Any age group is welcome! </h5>
    </Carousel.Caption>

  </Carousel.Item>
</Carousel>

<Accordion>
      <Accordion.Item eventKey="0">
        <h1> Top Frequently asked questions</h1>
        <Accordion.Header>FAQ #1 - Member Exclusives</Accordion.Header>
        <Accordion.Body>
        What advatages do I have as a member if sign up?
        </Accordion.Body>
        <Accordion.Body>
        The benefits of an online member community are endless with peer-to-peer connection, access to experts, exclusive resources, and many more such as shopping with points.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>FAQ #2 - Shipping</Accordion.Header>
        <Accordion.Body>
        To where do you ship? How long does it take you to process an order before it is dispatched?
        </Accordion.Body>
        <Accordion.Body>
        We ship to anywhere in Canada and United States. We are working on expanding globally. Our process times are usually within 2-3 business days before being dispatched.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>FAQ #3 - Returns</Accordion.Header>
        <Accordion.Body>
        Do you allow refunds for a change of mind? If so, how long do customers have to contact you?
        </Accordion.Body>
        <Accordion.Body>
        We allow refunds upto 30 days after the customer receives their item. The product have to be in the same packaging you received it in. You can contact us at "cristianoronaldo7@gmail.com" or "+1 (613)-389-9978" or you can fill our form in the contact us page.
        </Accordion.Body>

      </Accordion.Item>
    </Accordion>



</div>
        
  
    );
  }
  
  export default Home;