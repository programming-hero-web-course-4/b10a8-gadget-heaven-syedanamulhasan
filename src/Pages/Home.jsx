import React from 'react';
import Banner from '../Compos/Banner';
import Heading from '../Compos/Heading';
import { Outlet, useLoaderData } from 'react-router-dom';
import Categories from '../Compos/Categories';

const Home = () => {
    const categories = useLoaderData();
    
    return (
        <div className='container mx-auto'>
            <div className='lg:h-[1450px] h-[750px]'>
                <Banner></Banner>
            </div>
            <Heading></Heading>
            <div className='lg:flex gap-10'>
                <Categories categories={categories}></Categories>
                <Outlet></Outlet>
            </div>

        </div>
    );
};

export default Home;