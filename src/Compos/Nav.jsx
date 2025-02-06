import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";

const Nav = () => {
    const { pathname } = useLocation();

    // const handleNav = () =>{
    //     navigate= useNavigate();
    //     navigate('/statistics')
    //     navItem = document.getElementById('nav-item');
    //     console.log(navItem)
    //     navItem.className.remove('mx-auto ');

    // }
    const links = <>
        <li><NavLink
            className={({ isActive }) => `${isActive ? 'btn btn-active btn-ghost' : ''}`}
            to="/">Home</NavLink></li>
        <li><NavLink
            className={({ isActive }) => `${isActive ? 'btn btn-active btn-ghost' : ''}`}
            to="/statistics">Statistics</NavLink></li>
        <li><NavLink
            className={({ isActive }) => `${isActive ? 'btn btn-active btn-ghost' : ''}`}
            to="/dashboard">Dashboard</NavLink></li>
    </>
    return (
        <div>
            { pathname === '/' ? 
            <div
                className="container mx-auto rounded-t-lg bg-[#9538E2] ">
                <div className="navbar px-8 mt-10 relative text-white"
                >
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
                        <Link to='/'><a className="text-xl">Gadget Heaven</a></Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {links}
                        </ul>
                    </div>
                    <div className="navbar-end text-black">

                        <span className='text-2xl mr-2 p-2 border-2 rounded-4xl bg-white'><FiShoppingCart />
                        </span>
                        <span className='text-2xl p-2 border-2 rounded-4xl bg-white '><FaRegHeart /></span>
                    </div>
                </div>

            </div> 
            : 
            <div
                className="container mx-auto">
                <div className="navbar px-8 mt-10 relative text-gray-900"
                >
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
                        <Link to='/'><a className="text-xl">Gadget Heaven</a></Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {links}
                        </ul>
                    </div>
                    <div className="navbar-end text-black">

                        <span className='text-2xl mr-2 p-2 border-2 rounded-4xl bg-white'><FiShoppingCart />
                        </span>
                        <span className='text-2xl p-2 border-2 rounded-4xl bg-white '><FaRegHeart /></span>
                    </div>
                </div>

            </div> 
}
        </div>
    );
};

export default Nav;