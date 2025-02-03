import React from 'react';
import { NavLink } from 'react-router-dom';

const Category = ({ category }) => {
    const {product_id,category_name} = category
    return (
            <NavLink><button className='btn btn-lg rounded-lg btn-primary btn-outline w-full'>{category_name}</button></NavLink>
    );
};

export default Category;