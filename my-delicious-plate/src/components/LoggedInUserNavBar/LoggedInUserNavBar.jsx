import React, { useCallback, useRef, useState } from 'react'
import { Link, NavLink } from 'react-router-dom';


export default  function LoggedInUserNavBar() {

    const [openProfileOptions, setOpenProfileOptions] = useState(false)

    console.log(openProfileOptions);
    

  return (
    <header>
        <nav className='flex items-center justify-between bg-[#6b4226] px-3 py-3 space-x-8'>
            {/* Logo */}
            <div className='text-[#fffcf5] text-3xl font-medium flex items-center'>
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
                                `${isActive ? ' border-orange-400 border-b-2 text-[#fffcf5]' : ' text-[#fffcf5]'} pb-1  border-b-2 hover:border-b-3 hover:border-orange-400 `
                            }
                        >
                            Home
                        </NavLink>
                    </li>

                    <li>
                        <NavLink 
                            to='/about' 
                            className={({isActive}) => 
                                `${isActive ? ' border-orange-400 border-b-2 text-[#fffcf5]' : ' text-[#fffcf5]'} border-b-2 pb-1 hover:border-b-3 hover:border-orange-400 `
                            }
                        >
                            About
                        </NavLink>
                    </li>

                    <li>
                        <NavLink 
                            to='/contact' 
                            className={({isActive}) => 
                                `${isActive ? ' border-orange-400 border-b-2 text-[#fffcf5]' : ' text-[#fffcf5]'} border-b-2 pb-1 hover:border-b-3 hover:border-orange-400 `
                            }
                        >
                            Contact
                        </NavLink>
                    </li>

                </ul>
            </div>
            
            {/* buttons links */}
            <div className='flex justify-between items-center text-xl  '>
                <ul className='flex flex-col mt-4 font-normal lg:flex-row lg:space-x-12 lg:mt-0 '>
                    <li>
                        <NavLink 
                            to='/post-recipe' 
                            className={({isActive}) => 
                                `${isActive ? ' border-orange-400 border-b-2 text-[#fffcf5]' : ' text-[#fffcf5]'} border-b-2 pb-1 hover:border-b-3 hover:border-orange-400 `
                            }
                        >
                            Post Recipe
                        </NavLink>
                    </li>

                    <li>
                        <NavLink 
                            to='/login' 
                            className={({isActive}) => 
                                `${isActive ? ' border-orange-400 border-b-2 text-[#fffcf5]' : ' text-[#fffcf5]'} border-b-2 pb-1 hover:border-b-3 hover:border-orange-400 `
                            }
                        >
                            My Collection
                        </NavLink>
                    </li>
                </ul>
            </div>

            {/* User Profile avatar with drop down menu */}
            <div className='flex justify-between items-center text-xl relative'>                                                                                            
                <button className='flex items-center gap-2 p-2 rounded-lg hover:bg-orange-400 transition-colors text-[#fffcf5] ' onClick={()=> setOpenProfileOptions(!openProfileOptions)}>
                        <img 
                            src="https://images.pexels.com/photos/209679/pexels-photo-209679.jpeg" 
                            alt="User avatar"
                            className='w-8 h-8 rounded-full cursor-pointer' 
                            
                        />
                            {/* Profile */}
                </button>
                
                {openProfileOptions && (
                    <div className='absolute right-0 w-48 bg-[#FFFBAD]  border border-gray-200 rounded-lg shadow-lg py-2 z-50 mt-58'>
                    
                    <ul>
                        <li>
                            <NavLink to='/view-profile' className='block px-4 py-2 text-[#6b4226] hover:bg-orange-400  ' onClick={()=> setOpenProfileOptions(false)} >
                                View Profile
                            </NavLink>
                            <hr className="my-0.5 border-gray-200" />
                        </li>

                        <li>
                            <NavLink to='/account-settings' className='block px-4 py-2 text-[#6b4226] hover:bg-orange-400 ' onClick={()=> setOpenProfileOptions(false)} >
                                Account Settings
                            </NavLink>
                            <hr className="my-0.5 border-gray-200"  />
                        </li>

                        <li>
                            <NavLink to='/logout' className='block px-4 py-2 text-[#6b4226] hover:bg-orange-400  ' onClick={()=> setOpenProfileOptions(false)} >
                                Logout
                            </NavLink>
                        </li>
                    </ul>
                    
                </div>
                )}
                

            </div>
        </nav>
    </header>
  )
}

