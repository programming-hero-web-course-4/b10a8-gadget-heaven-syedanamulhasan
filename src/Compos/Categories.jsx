import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Categories = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div className="flex flex-col space-y-10 rounded-lg  border-gray-400 px-10 lg:space-y-15 space-y-2 py-8  bg-[#F6F6F6] h-fit shadow-lg">
            {
                categories.map(category=>(
                    <NavLink key={category.category_name} ><button className='btn btn-lg rounded-lg btn-primary btn-outline w-full'>{category.category_name}</button></NavLink>
                ))
            }
        </div>
    );
};

export default Categories;