import React from "react";
import { Button, Card } from "react-bootstrap";


const Service = ({ service }) => {
  const { name, img, price, description } = service;
  return (
    <div className="g-5 col-sm-12 col-md-6 col-lg-4">  
      <div className="card">
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>Package Name: {name}</Card.Title>
        <Card.Text>Price : {price}</Card.Text>
        <Card.Text> Package Details : {description}</Card.Text>
        <Button variant="primary"> Book Now : {name}</Button>
      </Card.Body>
      
      </div>
  
    </div>
  );
};

export default Service;
