import React from "react";
import "./Header.css";
import { Button, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";

const Header = () => {
  const [user] = useAuthState(auth);
  const handleSignOut = () => {
    signOut(auth);
  };
  return (
   <div className="container">
      <Navbar bg="primary">
      <Nav className="header m-auto w-50">
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/blog">Blog</Link>
        <Link to='/checkout'>CheckOut</Link>
        {user ? (
          <Button onClick={handleSignOut}>Sign Out</Button>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </Nav>
    </Navbar>
   </div>
  );
};

export default Header;
