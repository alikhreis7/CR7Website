import * as ReactBootStrap from "react-bootstrap";
import {Link} from 'react-router-dom';
import NavBar from "../components/navbar";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import InputGroup from 'react-bootstrap/InputGroup';
import React, { useState } from 'react';

function Login() {
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

  <div class="form-center">
<Breadcrumb>
  <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
  <Breadcrumb.Item active>Log-In</Breadcrumb.Item>
</Breadcrumb>
<h1> <center>Log-In</center> </h1>
    <center>
    <Container>
      <Row>
        <Col>
        <Form noValidate validated={validated} onSubmit={handleSubmit} >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control  required type="email" placeholder="Enter email" size="sm"/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
        <Form.Control.Feedback type="invalid">
            Please provide a valid email.
          </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control required type="password" placeholder="Password"  />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <Form.Control.Feedback type="invalid">
            Please provide a valid password.
          </Form.Control.Feedback>
      </Form.Group>
      <Button onClick={() => alert("Thank you for logging in! You have 3000 points which means you can redeam this for 3 different items ")} variant="primary" type="submit">
        Log-In
      </Button>
    </Form>
        </Col>
      </Row>
    </Container>
    </center>
  </div>
    );
  }
  
  export default Login;