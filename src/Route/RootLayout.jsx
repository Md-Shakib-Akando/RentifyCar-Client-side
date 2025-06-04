import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Header/Navbar';
import Footer from '../Components/Footer/Footer';

const RootLayout = () => {
    return (
        <>  
            <Navbar></Navbar>
            <div className='min-h-[calc(100vh-454px)]'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </>
    );
};

export default RootLayout;