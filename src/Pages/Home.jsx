import React from 'react';
import Banner from '../Compos/Banner';
import Heading from '../Compos/Heading';
import { useLoaderData } from 'react-router-dom';
import Categories from '../Compos/Categories';

const Home = () => {
    return (
        <div className='container mx-auto'>
            
            <Banner></Banner>
            <Heading></Heading>
            <div className='flex'>
        <Categories></Categories>
            </div>
            
        </div>
    );
};

export default Home;