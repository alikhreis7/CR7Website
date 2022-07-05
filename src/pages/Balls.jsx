import * as ReactBootStrap from "react-bootstrap";
import {Link} from 'react-router-dom';
import NavBar from "../components/navbar";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import matchb from '../match.jpeg';
import championb from '../champion.jpeg';
import portob from '../pball.jpeg';



function Balls() {
  return (
    <div>
<Breadcrumb>
  <Breadcrumb.Item href="/CR7-SEG3125-Step3/">Home</Breadcrumb.Item>
  <Breadcrumb.Item active>Shop Our Products</Breadcrumb.Item>
  <Breadcrumb.Item active>Balls</Breadcrumb.Item>
</Breadcrumb>

<h1><center>Balls</center></h1>

<CardGroup>
<Card style={{ width: '0 rem' }}>
      <Card.Img variant="top" src={portob} />
      <Card.Body>
        <Card.Title>Portugal Prestige - $115.99</Card.Title>
        <Card.Text>
        PLAY WITH PRIDE.
        The Portugal Prestige Football has a textured casing for great touch and feel. 
        High-contrast graphics help you easily see and track the ball.
        </Card.Text>
        <Card.Text>
        Textured casing offers great touch and feel.
        Rubber bladder helps maintain air pressure and shape.
        High-contrast graphics make it easy to see the ball.
        </Card.Text>
        <center><Button variant="primary" >Add to Cart</Button></center>
      </Card.Body>
    </Card>


    <Card style={{ width: '0 rem' }}>
      <Card.Img variant="top" src={championb} />
      <Card.Body>
        <Card.Title>Champions League Finale Ball - $199.99</Card.Title>
        <Card.Text>
        FINALE 21 20TH ANNIVERSARY UCL PRO BALL
        A QUALITY MATCH BALL MARKING 20 YEARS AT THE ZENITH OF EUROPEAN SOCCER.
        Celebrate two decades of star-studded soccer with this adidas Finale 21 Pro Ball. 
        It's decorated with panel designs from every UCL Finale ball since it made its debut in European 
        soccer's biggest competition. The seamless build and FIFA Quality Pro stamp mean it'll pay fitting tribute to its sparkling predecessors.
        </Card.Text>
        <center> <Button variant="primary">Add to Cart</Button> </center>
      </Card.Body>
    </Card>

    <Card style={{ width: '0 rem' }}>
      <Card.Img variant="top" src={matchb} />
      <Card.Body>
        <Card.Title>World Cup 2022 Rihla Match Ball - $209.99 </Card.Title>
        <Card.Text>
        AL RIHLA PRO BALL! 
        WRITE YOUR OWN SOCCER STORIES WITH THE FIFA WORLD CUP™ MATCH BALL.
        Al Rihla means the Journey, the ball is just the beginning. 
        The rest of your football journey is yet to be written. 
        The official match ball of FIFA World Cup Qatar 2022™, 
        this seamless adidas Al Rihla Pro ball takes precision to new heights. 
        </Card.Text>
        <center><Button variant="primary">Add To Cart</Button></center>
      </Card.Body>
    </Card>
    </CardGroup>
</div>
  );
}

export default Balls;