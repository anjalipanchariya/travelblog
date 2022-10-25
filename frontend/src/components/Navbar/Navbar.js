import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React from 'react'; 
import {NavLink} from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import {FaUserAlt} from 'react-icons/fa'
import './NavChange.css'
function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">WorkoutTracker</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" style={{textAlign: "centre"}}>
            <Nav.Link href="#features" className="nav-menu">Features</Nav.Link>
            <Nav.Link href="#pricing" className='nav-menu'>Pricing</Nav.Link>
            
          </Nav>
          <Nav>
          
          <DropdownButton id="dropdown-basic-button" title={<FaUserAlt/>}>
          <Dropdown.Item href="#/login">Login</Dropdown.Item>
          <Dropdown.Item href="#/register">Register</Dropdown.Item>
          
          </DropdownButton>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;