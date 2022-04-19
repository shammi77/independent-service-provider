import React from "react";
import { Carousel } from "react-bootstrap";
import Service from "./Services/Services";


const Home = () => {
  return (
    <div className="container">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 mt-5 height-100" 
            src='https://i.ibb.co/GMB41xs/weeding-pic1-2.jpg'
            alt=""
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 mt-5 height-100" 
            src='https://i.ibb.co/4P1bTc5/michael-negrete-OYA4j-Uccon-I-unsplash.jpg'
            alt=""
          />
        </Carousel.Item>
      </Carousel>  
      
      <Service></Service>

   
    </div>
  );
};

export default Home;
