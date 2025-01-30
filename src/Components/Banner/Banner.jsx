import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaCartArrowDown, FaRegHeart } from "react-icons/fa";
const Banner = () => {
    const links = <>
    <li><NavLink to="/">Home</NavLink></li>
    <li><NavLink to="statistics">Statistics</NavLink></li>
    <li><NavLink to="dashboard">Dashboard</NavLink></li>
    </>
    return (
        <div
  className="min-h-screen w-9/10 mx-auto my-10 rounded-3xl"
  style={{
    background: "#9538E2"
  }}>
  <div className=" navbar w-9/10 mx-auto text-white">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {links}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">Gadget Heaven</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {links}
    </ul>
  </div>
  <div className="navbar-end">
  <span className='p-3 text-2xl rounded-full bg-white text-black'><FaCartArrowDown /></span>
  <span className='p-3 text-2xl border-2 rounded-full bg-white text-black ml-2'><FaRegHeart /></span>
  </div>
</div>

  {/* <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
      <p className="mb-5">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div> */}
  
</div>
    );
};

export default Banner;