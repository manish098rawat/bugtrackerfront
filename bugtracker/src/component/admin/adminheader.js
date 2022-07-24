import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';
function Adminheader(){
    return(
        <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand>Admin Panel</Navbar.Brand>
          <Nav className="me-auto navbarWrapper">
            <Link to="/admin/employee">Employee</Link>
            <Link to="/admin/user">User</Link>
            <Link to="/admin/products">Product</Link>
            <Link to="/admin/bugs">Bugs</Link>
          </Nav>
        </Container>
      </Navbar>
    );
}
export default Adminheader