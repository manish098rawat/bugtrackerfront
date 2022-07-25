import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';
function Adminheader(){
    return(
        <Navbar className="adminnav">
        <Container>
          <Navbar.Brand href="/">Admin Panel</Navbar.Brand>
          <Nav className="me-auto navbarWrapper">
            <Link to="/adminlist">Admin List</Link>
            <Link to="/employee">Employee</Link>
            <Link to="/user">User</Link>
            <Link to="/projects">Project</Link>
            <Link to="/bugs">Bugs</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/signup">Signup</Link>
          </Nav>
        </Container>
      </Navbar>
    );
}
export default Adminheader