import React from "react";
import {  Container, Nav, Navbar } from "react-bootstrap";

const Header = () => {
  return (

  <Navbar bg="primary" variant="light">
    <Container>
    <Nav className="me-auto w-50">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#about">About</Nav.Link>
      <Nav.Link href="#blog">Blog</Nav.Link>
    </Nav>
    </Container>
  </Navbar> 


  

  );
};

export default Header;
