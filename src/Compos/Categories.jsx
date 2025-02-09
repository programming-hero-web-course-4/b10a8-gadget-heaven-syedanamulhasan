import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const Categories = ({ categories }) => {
    
    return (
        <div className="flex flex-col rounded-lg  border-gray-400 px-10 lg:space-y-15 space-y-2 py-8  bg-[#F6F6F6] h-fit shadow-lg">
            {
                categories.map(category => (
                    category.category_name === 'All Gadgets' ? <NavLink 
                    key={category.category_name} 
                    to='/'
                    className={({isActive})=>`${isActive? 'btn btn-primary btn-lg rounded-lg':'btn btn-lg rounded-lg btn-primary btn-outline w-full'}`}>{category.category_name}</NavLink>
                    :<NavLink 
                    key={category.category_name} 
                    to={`/category/${category.category_name}`}
                    className={({isActive})=>`${isActive? 'btn btn-primary btn-lg rounded-lg':'btn btn-lg rounded-lg btn-primary btn-outline w-full'}`}>{category.category_name}</NavLink>
                ))
            }
        </div>
    );
};

export default Categories;