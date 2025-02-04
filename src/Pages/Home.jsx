import React from 'react';
import Banner from '../Compos/Banner';
import Heading from '../Compos/Heading';
import { Outlet, useLoaderData } from 'react-router-dom';
import Categories from '../Compos/Categories';

const Home = () => {
    const categories = useLoaderData();
    // console.log(categories)
    return (
        <div className='container mx-auto'>

            <Banner></Banner>
            <Heading></Heading>
            <div className='flex'>
                <Categories categories={categories}></Categories>
                <Outlet></Outlet>
            </div>
            
        </div>
    );
};

export default Home;