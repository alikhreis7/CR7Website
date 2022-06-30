
import * as ReactBootStrap from "react-bootstrap";
import {Link} from 'react-router-dom';
import NavBar from "../components/navbar";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Mission from '../mission.jpeg';
import Vision from '../vision.jpeg';
import Values from '../values.jpeg';



function AboutUs() {
  return (
<div>
<Breadcrumb>
  <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
  <Breadcrumb.Item active>All About Us</Breadcrumb.Item>
  <Breadcrumb.Item active>About Us</Breadcrumb.Item>
</Breadcrumb>
<h1> <center>About Us</center> </h1>
<CardGroup>
  <Card>
    <Card.Img variant="top" src={Mission} height="400px" />
    <Card.Body>
      <Card.Title>Our Mission</Card.Title>
      <Card.Text>
        The three-part mission of Cristiano Ronaldo Football retail 
        store focuses on customer trust, employee respect, and 
        creating a unique shopping experience, three important foundational aspects 
        of the business that are leading the company to survive in the unstable 
        Sporting Goods Retailing niche as well as the football industry.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated June 30, 2022</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src={Vision} height="400px" />
    <Card.Body>
      <Card.Title>Our Vision</Card.Title>
      <Card.Text>
      We see a world where everybody is an athlete — united in the joy of movement. 
      Driven by our passion for football and our instinct for innovation, we aim to bring 
      inspiration to every athlete/footballer in the world and to make the sport a daily habit.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated June 30, 2022 </small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src={Values} height="400px" />
    <Card.Body>
      <Card.Title>Our Core Values</Card.Title>
      <Card.Text>
        We believe in doing the right thing, being on the offense, serving people and athletes, creating
        the future of sport and winning as a team!
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated June 30, 2022</small>
    </Card.Footer>
  </Card>
</CardGroup>

</div>
  );
}

export default AboutUs;