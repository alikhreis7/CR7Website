import * as ReactBootStrap from "react-bootstrap";
import {Link} from 'react-router-dom';
import NavBar from "../components/navbar";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Carousel from 'react-bootstrap/Carousel';
import young from '../young_ronaldo.jpeg';
import kick from '../kick.jpeg';
import madrid from '../cr71.jpeg';



function AboutCristiano() {
    return (
  <div>
    <Breadcrumb>
      <Breadcrumb.Item href="/CR7-SEG3125-Step3/">Home</Breadcrumb.Item>
      <Breadcrumb.Item active>All About Us</Breadcrumb.Item>
      <Breadcrumb.Item active>About Cristiano Ronaldo</Breadcrumb.Item>
    </Breadcrumb>
    <h1> <center>About Ronaldo</center> </h1>

    <Carousel variant="">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={young}
      height= "500"
      alt="First slide" color="white"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      height = "500"
      src={kick}
      alt="Second slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={madrid}
      height="500"
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>


    <CardGroup>
  <Card>
    <Card.Body>
      <Card.Title>Back Ground</Card.Title>
      <Card.Text>
      Cristiano Ronaldo dos Santos Aveiro GOIH ComM is a Portuguese professional footballer 
      who plays as a forward for Premier League club Manchester United and 
      captains the Portugal national team.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Body>
      <Card.Title>History</Card.Title>
      <Card.Text>
        Cristiano Ronaldo became officially recognized as the all-time top goalscorer in the history 
        of men's professional soccer on Saturday. Ronaldo broke the record in style by netting 
        a hat-trick in Manchester United's 3-2 win over Tottenham Hotspur at Old Trafford.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Body>
      <Card.Title>Why the company CR7?</Card.Title>
      <Card.Text>
      Cristiano Ronaldo is not only a genius in the football field, but also good 
      at taking advantage of opportunities in the business world. One of them is Cristiano Ronaldo Football 
      where he is advertising and selling what he loves most about football and sharing it with the world. 
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardGroup>
      
  </div>
    );
}
  
  export default AboutCristiano;