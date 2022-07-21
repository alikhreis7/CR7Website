import * as ReactBootStrap from "react-bootstrap";
import {Link} from 'react-router-dom';
import NavBar from "../components/navbar";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import email from '../assets/email.jpeg';
import phone from '../assets/phone.jpeg';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import InputGroup from 'react-bootstrap/InputGroup';
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import Accordion from 'react-bootstrap/Accordion';
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';


function ContactUs() {

  const [show, setShow] = useState(false);
  const [validated, setValidated] = useState(false);


  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);

    
  };
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
          <Card.Title>Drop us an email!
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
          <Card.Title>Fill the form below and we'll get back to you!</Card.Title>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
        <Form.Label column sm={2}>
          Name:
        </Form.Label>
        <Col sm={10}>
          <Form.Control
          required
          type="text" 
          placeholder="Name" 
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formBasicEmail">
        <Form.Label column sm={2}>
          Email:
        </Form.Label>
        <Col sm={10}>
          <Form.Control
          required 
          type="Email" 
          placeholder="Email" 
          />
          <Form.Control.Feedback type="invalid">
            Please provide a valid email that contains "@" & ".com/.ca/.net/.org, etc.."
          </Form.Control.Feedback>
        </Col>
        
      </Form.Group>
      <>
      <FloatingLabel controlId="floatingTextarea2" label="Message">
        <Form.Control
          required
          as="textarea"
          placeholder="Message"
          style={{ height: '150px' }}
        />
      </FloatingLabel>
    </>
      <Form.Group as={Row} className="mb-3">
        <Col sm={{ span: 15, offset: 5 }}>
        <Button type ="submit" variant="primary" onClick={() => setShow(true)} >
        Submit
      </Button>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Success!
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            We have received your message! Please allow 24 hours for an email back to you!
          </p>
        </Modal.Body>
      </Modal>
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