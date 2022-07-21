import * as ReactBootStrap from "react-bootstrap";
import {Link} from 'react-router-dom';
import NavBar from "../components/navbar";
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Alert from 'react-bootstrap/Alert'



function CheckOut() {
    
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
  <Breadcrumb.Item active>Shop Our Products</Breadcrumb.Item>
  <Breadcrumb.Item active>Shopping Cart</Breadcrumb.Item>
  <Breadcrumb.Item active>Check Out Page</Breadcrumb.Item>
  
</Breadcrumb>

<h1><center>Check Out your products!  </center></h1>
<h1><center>Please fill in the information below to get your confirmation message! </center></h1>
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
    <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>First Name</Form.Label>
          <Form.Control required type="name" placeholder="Enter First Name" />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Last Name</Form.Label>
          <Form.Control  required type="lastname" placeholder="Enter Last Name" />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control required type="email" placeholder="Enter email" />
          <Form.Control.Feedback type="invalid">
            Please provide a valid email.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control required type="password" placeholder="Password" />
          <Form.Control.Feedback type="invalid">
            Please provide a valid password.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Address</Form.Label>
        <Form.Control  required placeholder="1234 Main St" />
        <Form.Control.Feedback type="invalid">
            Please provide a valid Address.
          </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Address 2</Form.Label>
        <Form.Control required placeholder="Apartment, studio, or floor" />
        <Form.Control.Feedback type="invalid">
            Please provide a valid Address.
          </Form.Control.Feedback>
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid city.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Province</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Choose...</option>
            <option>Ontario</option>
            <option>Alberta</option>
            <option>British Columbia</option>
            <option>Manitoba</option>
            <option>New Brunswick</option>
            <option>Newfoundland and Labrador</option>
            <option>Nova Scotia</option>
            <option>Nunavut</option>
            <option>Saskatchewan</option>
            <option>Yukon</option>
            <option>Prince Edward Island</option>
          </Form.Select>
          <Form.Control.Feedback type="invalid">
            Please select a Province.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} controlId="PostalCode">
          <Form.Label>Postal Code</Form.Label>
          <Form.Control required type="postalcode" placeholder="K2V 0V5"/>
          <Form.Control.Feedback type="invalid">
            Please enter a valid postal code.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check required type="checkbox" label="Check this box to confirm!" />

      </Form.Group>
      

    <Button  onClick={() => alert("Thank you for your order! Get ready to receive your gear in 2-3 buniess days! We can't wait for your review! ")} variant="primary" type="submit">
        Submit
      </Button>
    </Form>



</div>
  );
}

export default CheckOut;