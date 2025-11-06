import React from 'react'
import { Link, NavLink } from 'react-router-dom';

export default function Header() {
    return (
        <header>
            <nav className='flex items-center justify-between bg-[#6b4226] px-3 py-3'>
                 {/* Logo */}
                <div className='text-[#FFFDD2] text-3xl font-medium flex items-center'>
                    <Link to="/">
                        Delicious Plate
                    </Link>
                </div>

                {/* Common Links */}
                <div className='flex justify-between items-center mx-auto text-xl'>
                    <ul className='flex flex-col mt-4 font-normal lg:flex-row lg:space-x-14 lg:mt-0'>
                        <li>
                            <NavLink 
                                to='/' 
                                className={({isActive}) => 
                                    `${isActive ? ' border-orange-400 border-b-3 text-[#FFFDD2]' : ' text-[#FFFDD2]'} pb-1 hover:border-b-3 hover:border-orange-400 `
                                }
                            >
                                Home
                            </NavLink>
                        </li>

                        <li>
                            <NavLink 
                                to='/about-us' 
                                className={({isActive}) => 
                                    `${isActive ? ' border-orange-400 border-b-3 text-[#FFFDD2]' : ' text-[#FFFDD2]'} pb-1 hover:border-b-3 hover:border-orange-400 `
                                }
                            >
                                About
                            </NavLink>
                        </li>

                        <li>
                            <NavLink 
                                to='/contact' 
                                className={({isActive}) => 
                                    `${isActive ? ' border-orange-400 border-b-3 text-[#FFFDD2]' : ' text-[#FFFDD2]'} pb-1 hover:border-b-3 hover:border-orange-400 `
                                }
                            >
                                Contact
                            </NavLink>
                        </li>

                    </ul>
                </div>
               
                {/* buttons links */}
                <div className='flex justify-between items-center text-xl '>
                    <ul className='flex flex-col mt-4 font-normal lg:flex-row lg:space-x-12 lg:mt-0'>
                        <li>
                            <NavLink 
                                to='/post-recipe' 
                                className={({isActive}) => 
                                    `${isActive ? ' border-orange-400 border-b-3 text-[#FFFDD2]' : ' text-[#FFFDD2]'} pb-1 hover:border-b-3 hover:border-orange-400 `
                                }
                            >
                                Post Recipe
                            </NavLink>
                        </li>

                        <li>
                            <NavLink 
                                to='/login' 
                                className={({isActive}) => 
                                    `${isActive ? ' border-orange-400 border-b-3 text-[#FFFDD2]' : ' text-[#FFFDD2]'} pb-1 hover:border-b-3 hover:border-orange-400 `
                                }
                            >
                                Login
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to='/signup' className='font-medium rounded-lg px-3 py-2 bg-orange-400  hover:bg-orange-400' >
                                Sign up
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
       
    );
}