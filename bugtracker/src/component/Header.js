import React from "react";
import Container from 'react-bootstrap/Container';
import { Navbar,Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';

function Header() {
  return (<div>
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">BUG Tracker</Navbar.Brand>
        <Nav className="me-auto navbarWrapper">
            <Link to="/Admin">Admin</Link>
            <Link to="/Employee">Employee</Link>
            <Link to="/User">User</Link>
            <Link to="/AboutUs">AboutUs</Link>
          </Nav>
      </Container>
      
    </Navbar>
    <h3>Welcome to Bug tacker</h3>
    </div>);
}
export default Header;