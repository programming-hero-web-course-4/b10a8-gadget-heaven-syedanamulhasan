import React from 'react';
import Banner from '../Banner/Banner';
import Gadgets from '../Gadgets/Gadgets';

const Home = () => {
    return (
        <div>
            <div className='relative'>
            <Banner></Banner>
            </div>
            <Gadgets></Gadgets>
        </div>
    );
};

export default Home;