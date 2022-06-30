import * as ReactBootStrap from "react-bootstrap";
import {Link} from 'react-router-dom';
import NavBar from "../components/navbar";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

function Login() {
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
        <Form >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" size="sm"/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password"  />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
      </Form.Group>
      <Button variant="primary" type="submit">
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