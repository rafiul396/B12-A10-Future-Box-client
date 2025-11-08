import React, { useState } from 'react';
import { HiMenuAlt3, HiX } from "react-icons/hi";
import logo from '../../../assets/logo.png'
import { Link, NavLink } from 'react-router';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const handleFalse = () => setIsOpen(false);
    return (
        <nav className="w-full bg-white shadow-sm py-3 px-6 md:px-10">
            <div className="flex items-center justify-between">
                <ul className="hidden lg:flex items-center space-x-8 text-sm font-medium text-gray-700">
                    <li className="cursor-pointer hover:text-orange-500"><NavLink>Home</NavLink></li>
                    <li className="cursor-pointer hover:text-orange-500"><NavLink>Add Transaction</NavLink></li>
                    <li className="cursor-pointer hover:text-orange-500"><NavLink>My Transactions</NavLink></li>
                    <li className="cursor-pointer hover:text-orange-500"><NavLink>Reports</NavLink></li>
                </ul>
                <div>
                    <Link className='cursor-pointer'>
                        <img
                        src={logo}
                        alt="Gensure Logo"
                        className="w-[150px]"
                    />
                    </Link>
                </div>
                <div className="hidden md:flex items-center space-x-4">
                    <Link to="/login" className="bg-[#0d1b2a] text-white text-sm px-5 py-2 rounded-full hover:opacity-90 transition">
                        Log In
                    </Link>
                    <Link to="/signup" className="bg-orange-500 text-white text-sm px-5 py-2 rounded-full hover:bg-primary transition">
                        Sign Up
                    </Link>
                </div>
                <div className="lg:hidden flex items-center">
                    <button
                        onClick={toggleMenu}
                        className="text-gray-700 focus:outline-none"
                    >
                        {isOpen ? <HiX size={26} /> : <HiMenuAlt3 size={26} />}
                    </button>
                </div>
            </div>
            {isOpen && (
                <div className="mt-4 lg:hidden flex flex-col space-y-3 text-gray-700 font-medium">
                    <ul className="flex flex-col space-y-3">
                        <li onClick={handleFalse} className="cursor-pointer hover:text-orange-500"><NavLink>Home</NavLink></li>
                    <li onClick={handleFalse} className="cursor-pointer hover:text-orange-500"><NavLink>Add Transaction</NavLink></li>
                    <li onClick={handleFalse} className="cursor-pointer hover:text-orange-500"><NavLink>My Transactions</NavLink></li>
                    <li onClick={handleFalse} className="cursor-pointer hover:text-orange-500"><NavLink>Reports</NavLink></li>
                    </ul>
                    <div className="flex flex-col space-y-2 pt-3">
                        <button className="bg-[#0d1b2a] text-white text-sm py-2 rounded-full hover:opacity-90 transition">
                            Log In
                        </button>
                        <button className="bg-orange-500 text-white text-sm py-2 rounded-full hover:bg-orange-600 transition">
                            Sign Up
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;