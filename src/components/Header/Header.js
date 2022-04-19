import React from "react";
import "./Header.css";
import {  Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (

  <Navbar bg="primary">
   
    <Nav className="header m-auto w-50">
      <Link to="/home">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/blog">Blog</Link>
      <Link to="/login">Login</Link>
    </Nav>
    
  </Navbar> 


  

  );
};

export default Header;
