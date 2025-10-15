import Link from 'next/link';
import React from 'react';

const Navber = () => {
    return (
        <div className="sticky top-0 z-40 bg-[#234C6A] text-white">
            <div className="navbar max-w-[1400px] mx-auto shadow-sm">
 
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-8 6h8" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-[#234C6A] rounded-box mt-3 w-52 p-2 shadow text-white"
                        >
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/about">About</Link></li>
                            <li><Link href="/services">Services</Link></li>
                            <li><Link href="/contact">Contact</Link></li>
                        </ul>
                    </div>
                    <Link href="/" className="text-2xl font-bold">Logo</Link>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-lg font-medium">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/about">About</Link></li>
                        <li><Link href="/services">Services</Link></li>
                        <li><Link href="/contact">Contact</Link></li>
                    </ul>
                </div>

           
                <div className="navbar-end space-x-4">
                    <Link href="/Login" className="max-w-[100px] px-2 py-1 rounded-md bg-white text-black">Login</Link>
                    <Link href="/SignUp" className="px-2 py-1 max-w-[100px]   border border-white text-white rounded-md  ">Register</Link>
                </div>
            </div>
        </div>
    );
};

export default Navber;
