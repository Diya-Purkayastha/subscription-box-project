import React from 'react';
import Slider from '../components/Slider';
import Service from '../components/Service';
import Benefits from '../components/Benefits';
import Blog from '../components/Blog';
import useTitle from '../hook/useTitle';

const Home = () => {
    useTitle('Home');
    return (
        <div>
           
           <Slider></Slider> 
           <Service></Service>
           <Benefits></Benefits>
           <Blog></Blog>
   
        </div>
    );
};

export default Home;