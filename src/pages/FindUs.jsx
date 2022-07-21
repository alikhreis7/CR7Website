import * as ReactBootStrap from "react-bootstrap";
import {Link} from 'react-router-dom';
import NavBar from "../components/navbar";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import map from "../assets/map.jpeg"
import Card from 'react-bootstrap/Card';


function FindUs() {
  return (
    <div>

    <Breadcrumb>
      <Breadcrumb.Item href="/CR7-SEG3125-Step3/">Home</Breadcrumb.Item>
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
          3. We are located on 8555 Campeau Drive Init 290, Ottawa, ON, K2T 0K5
          </Card.Text>
          <Card.Text>
          4. NOTE: We are located inside Nike Factory Store.
          </Card.Text>
          <Card.Text>
          Please refer to the map BELOW for exact location. 
          </Card.Text>
          
        </Card.Body>

       <iframe width="1500" height="600" id="gmap_canvas" src="https://maps.google.com/maps?q=nike%20factory%20store%20tanger&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>

        {/* <Card.Img variant="bottom" src={map} height="400" /> */}
      </Card>

    </div>
  );
}

export default FindUs;