import React from 'react';
import { Button } from 'react-bootstrap';

const Service = ({service}) => {
    const {name,img,price,description} = service;
    return (
        <div>
            <img src={img}  alt=''/>
            <h2>Service: {name}</h2>
            <h3>Price: {price}</h3>
            <h4>Description: {description}</h4>
            <Button>Book Now: {name}</Button>
        </div>
    );
};

export default Service;