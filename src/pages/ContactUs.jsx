import * as ReactBootStrap from "react-bootstrap";
import {Link} from 'react-router-dom';
import NavBar from "../components/navbar";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import email from '../email.jpeg';
import phone from '../phone.jpeg';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import Accordion from 'react-bootstrap/Accordion';


function ContactUs() {
  return (
<div>
<Breadcrumb>
  <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
  <Breadcrumb.Item active>All About Us</Breadcrumb.Item>
  <Breadcrumb.Item active>Contact Us</Breadcrumb.Item>
</Breadcrumb>
<h1> <center>Contact Us & </center> </h1>
<h1> <center>Choose your method of communication</center> </h1>

<CardGroup>
      <Card>
        
        <Card.Body>
          <Card.Title>Drop Us a line!
          <Card.Img variant="top" src={email} height="150" width="40"/>
          </Card.Title>
          <Card.Text>
            cristianoronaldo7@gmail.com
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <Card.Title>Call us at the number below
          <Card.Img variant="top" src={phone} height="150" />
          </Card.Title>
          <Card.Text>
            +1 (613)-389-9978{' '}
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <Card.Title>Fill the form below and we'll get back to you!
          </Card.Title>
          <Form>
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
        <Form.Label column sm={2}>
          Name:
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="email" placeholder="Name" />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
        <Form.Label column sm={2}>
          Email:
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="password" placeholder="Email" />
        </Col>
      </Form.Group>
      <>
      <FloatingLabel controlId="floatingTextarea2" label="Message">
        <Form.Control
          as="textarea"
          placeholder="Message"
          style={{ height: '100px' }}
        />
      </FloatingLabel>
    </>
      <Form.Group as={Row} className="mb-3">
        <Col sm={{ span: 15, offset: 5 }}>
          <Button type="send">Send</Button>
        </Col>
      </Form.Group>
    </Form>
        </Card.Body>
      </Card>
    </CardGroup>


    <h1><center>Business hours</center> </h1>
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Monday - Sunday Business Hours</Accordion.Header>
        <Accordion.Body>
          Monday: 10AM - 5PM
        </Accordion.Body>
        <Accordion.Body>
          Tuesday: 10AM - 5PM
        </Accordion.Body>
        <Accordion.Body>
          Wednesday: 10AM - 5PM
        </Accordion.Body>
        <Accordion.Body>
          Thursday: 10AM - 5PM
        </Accordion.Body>
        <Accordion.Body>
          Friday: 10AM - 5PM
        </Accordion.Body>
        <Accordion.Body>
          Saturday: 10AM - 5PM
        </Accordion.Body>
        <Accordion.Body>
          Sunday: 10AM - 2PM
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Statutory Holidays Business Hours</Accordion.Header>
        <Accordion.Body>
          New Year's Day - January 3rd - CLOSED
        </Accordion.Body>
        <Accordion.Body>
          Good Friday - April 15th - CLOSED
        </Accordion.Body>
        <Accordion.Body>
          Canada Day - July 1st - CLOSED
        </Accordion.Body>
        <Accordion.Body>
          Labour Day - September 5th - CLOSED
        </Accordion.Body>
        <Accordion.Body>
          Thanksgiving - October 10th - CLOSED 
        </Accordion.Body>
        <Accordion.Body>
          Christmas - December 26 - CLOSED
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
</div>
  );
}

export default ContactUs;