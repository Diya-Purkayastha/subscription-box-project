import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header';
import Footer from '../components/Footer';

const mainLayout = () => {
    return (
        <div >
           
            <Header></Header>
            <main className='w-11/12 mx-auto'>
            <Outlet></Outlet>
            </main>
            
            <Footer></Footer>
        </div>
    );
};

export default mainLayout;