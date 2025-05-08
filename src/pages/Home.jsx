import React from 'react';
import Slider from '../components/Slider';
import Service from '../components/Service';
import Benefits from '../components/Benefits';
import Blog from '../components/Blog';
import useTitle from '../hook/useTitle';
import Testimonial from '../components/Testimonial';

const Home = () => {
    useTitle('Home');
    return (
        <div>
           
           <Slider></Slider> 
           <Service></Service>
           <Benefits></Benefits>
          <Testimonial></Testimonial>
   
        </div>
    );
};

export default Home;