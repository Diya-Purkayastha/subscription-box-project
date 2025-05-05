import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const mainLayout = () => {
    return (
        <div >

            <Header></Header>
            <main className='w-11/12 mx-auto min-h-[calc(100vh-335px)]'>

                <Outlet></Outlet>
                <ToastContainer />
            </main>

            <Footer></Footer>
        </div>
    );
};

export default mainLayout;