
import logo from '../logo.jpeg';
import * as ReactBootStrap from "react-bootstrap";
import {Link} from 'react-router-dom';

function navbar() {
  return (
    <ReactBootStrap.Navbar collapseOnSelect expand="lg" bg="light" variant="light">
  <ReactBootStrap.Container>
    <img src={logo} alt="Logo" width="120" height="80" />
  <ReactBootStrap.Navbar.Brand href="/">Cristiano Ronaldo Football</ReactBootStrap.Navbar.Brand>
  <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
    <ReactBootStrap.Nav className="me-auto">
    <ReactBootStrap.Nav.Link href="/" color="black" >Home</ReactBootStrap.Nav.Link>
    <ReactBootStrap.NavDropdown title="All About Us" id="aboutus">
        <ReactBootStrap.NavDropdown.Item href="/#/AboutUs">About Us</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="/#/AboutCristiano">About Cristiano</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="/#/ContactUs">Contact Us</ReactBootStrap.NavDropdown.Item>
      </ReactBootStrap.NavDropdown>

      <ReactBootStrap.NavDropdown title="Shop Our Products" id="shop">
        <ReactBootStrap.NavDropdown.Item href="/#/Jerseys">Jerseys</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="/#/Balls">Balls</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="/#/Cleats">Cleats</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="/#/Gloves">Gloves</ReactBootStrap.NavDropdown.Item>
      </ReactBootStrap.NavDropdown>
    </ReactBootStrap.Nav>
    <ReactBootStrap.Nav>
      <ReactBootStrap.Nav.Link href="/#/login">Log-In</ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link eventKey={2} href="/#/signup"> Sign-Up </ReactBootStrap.Nav.Link>

    

      <Link to="/FindUs">
      <svg href="/FindUs" xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" color='black' class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
      <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
        </svg>
      </Link>

      <Link to="/ShoppingCart">
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" color='black' class="bi bi-cart4" viewBox="0 0 16 16">
      <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
      </svg>
      </Link>

     

    </ReactBootStrap.Nav>
  </ReactBootStrap.Navbar.Collapse>
  </ReactBootStrap.Container>
</ReactBootStrap.Navbar>
  );
}

export default navbar;
