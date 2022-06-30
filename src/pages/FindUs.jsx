import * as ReactBootStrap from "react-bootstrap";
import {Link} from 'react-router-dom';
import NavBar from "../components/navbar";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import map from "../map.jpeg"
import Card from 'react-bootstrap/Card';


function FindUs() {
  return (
    <div>

    <Breadcrumb>
      <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
      <Breadcrumb.Item active>Find Us</Breadcrumb.Item>
    </Breadcrumb>
    
    <h1><center>Our Location</center></h1>

    <Card>
        <Card.Body>
          <Card.Text>
          1. Now that Provincial Government has lifted some COVID restrictions we will be 
          returning to our Spring hours and reopening on Sundays, visit our Contact Us page for details.
          Note that the mask mandate is still in effect for everyone entering the store.
          </Card.Text>
          <Card.Text>
          2. For those who do not wish to shop in person we still offer curbside pickup for online or phone orders.  
          Curbside pickup is available during normal store hours.
          </Card.Text>
          <Card.Text>
          3. We are located on 1625 Bank Street, Ottawa, Ontario, Canada, K1V7Y9
          </Card.Text>
          <Card.Text>
          Please refer to the map BELOW for exact location. 
          </Card.Text>
          
        </Card.Body>
        <Card.Img variant="bottom" src={map} height="400" />
      </Card>

    




    </div>
  );
}

export default FindUs;