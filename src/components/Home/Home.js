import React from "react";
import { Carousel } from "react-bootstrap";
import Service from "./Services/Services";


const Home = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-70 mt-5" height="500" 
            src='https://i.ibb.co/GMB41xs/weeding-pic1-2.jpg'
            alt=""
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-70 mt-5" height="500" 
            src='https://i.ibb.co/s2dKsh9/weeding-pic2-3.jpg'
            alt=""
          />
        </Carousel.Item>
      </Carousel>  
      
      <Service></Service>

   
    </div>
  );
};

export default Home;
