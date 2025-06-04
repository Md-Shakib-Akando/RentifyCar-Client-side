import React from 'react';
import { Link, NavLink } from 'react-router';

const Navbar = () => {
    const link=<>
    <li><NavLink to='/' className='text-sm md:text-lg'>Home</NavLink></li>
    <li><NavLink to='/availableCars' className='text-sm md:text-lg'>Available Cars</NavLink></li>
    </>
    return (
        <div className='bg-base-100 shadow-sm'>
            <div className="navbar max-w-full md:max-w-11/12 mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2  shadow">
                            {link}
                        </ul>
                    </div>
                    <div className='flex  items-center'>
                        <img className='h-[80px] w-[40%]' src="/logo.png" alt="" />
                        <h1 className='text-xl md:text-2xl font-bold '>Rentify<span className='text-orange-500'>Cars</span></h1>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal space-x-3 px-1">
                        {link}
                    </ul>
                </div>
                <div className="navbar-end">
                   <Link><button className="btn btn-outline text-orange-500 hover:bg-orange-500 hover:text-white">Log In</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;