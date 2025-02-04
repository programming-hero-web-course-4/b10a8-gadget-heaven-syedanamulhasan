import React from 'react';
import Nav from '../Compos/Nav';
import Footer from '../Compos/Footer';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div className='body'>
            <Nav></Nav>
            <div className='min-h-screen'>
            {/* dynamic section */}
            <Outlet></Outlet>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;