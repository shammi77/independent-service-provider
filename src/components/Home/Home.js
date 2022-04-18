import React from "react";
import { Button, Carousel } from "react-bootstrap";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Service from "./Services/Services";


const Home = () => {
  return (
    <div>
      <Header></Header>
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

      <Footer></Footer>
    </div>
  );
};

export default Home;
