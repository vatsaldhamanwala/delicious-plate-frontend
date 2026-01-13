import React, { Activity, useState } from 'react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext/AuthContext';


export default  function LoggedInUserNavBar() {

    const [openProfileOptions, setOpenProfileOptions] = useState(false)

    console.log(openProfileOptions);

    const location = useLocation()
    
    console.log("Nav bar path: ", location.pathname);

    const { logout, user } = useAuth()
    const navigate = useNavigate()

    const handleLogout = async () => {
        await logout()
        navigate('/') // public home
    }
    

  return (
    <header>
        <nav className='flex items-center justify-between bg-[#6b4226] px-3 py-3 space-x-8'>
            {/* Logo */}
            <div className='text-[#FFFDD2] text-3xl font-medium flex items-center'>
                <Link to="/delicious-plate" onClick={()=> setOpenProfileOptions(false)}>
                    Delicious Plate
                </Link>
            </div>

            {/* Common Links */}
            <div className='flex justify-between items-center mx-auto text-xl'>
                <ul className='flex flex-col mt-4 font-normal lg:flex-row lg:space-x-14 lg:mt-0'>
                    <li>
                        <NavLink 
                            to='.'
                            end 
                            className={({isActive}) => 
                                `${isActive ? '  border-orange-400 border-b-3 text-[#FFFDD2]'  : ' text-[#FFFDD2]'} pb-1 hover:border-b-3 hover:border-orange-400 `
                            }
                            onClick={()=> setOpenProfileOptions(false)}
                        >
                            Home
                        </NavLink>
                    </li>

                    <li>
                        <NavLink 
                            to='/delicious-plate/about-us' 
                            className={({isActive}) => 
                                `${isActive ? ' border-orange-400 border-b-3 text-[#FFFDD2]' : ' text-[#FFFDD2]'} pb-1 hover:border-b-3 hover:border-orange-400 `
                            }
                            onClick={()=> setOpenProfileOptions(false)}
                        >
                            About
                        </NavLink>
                    </li>

                    <li>
                        <NavLink 
                            to='/delicious-plate/contact' 
                            className={({isActive}) => 
                                `${isActive ? ' border-orange-400 border-b-3 text-[#FFFDD2]' : ' text-[#FFFDD2]'} pb-1 hover:border-b-3 hover:border-orange-400 `
                            }
                            onClick={()=> setOpenProfileOptions(false)}
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
                            to='/delicious-plate/post-recipe/basic-info' 
                            className={({isActive}) => 
                                `${isActive ? ' border-orange-400 border-b-3 text-[#FFFDD2]' : ' text-[#FFFDD2]'} pb-1 hover:border-b-3 hover:border-orange-400 `
                            }
                            onClick={()=> setOpenProfileOptions(false)}

                        >
                            Post Recipe
                        </NavLink>
                    </li>

                    <li>
                        <NavLink 
                            to='/delicious-plate/my-collection' 
                            className={({isActive}) => 
                                `${isActive ? ' border-orange-400 border-b-3 text-[#FFFDD2]' : ' text-[#FFFDD2]'} pb-1 hover:border-b-3 hover:border-orange-400 `
                            }
                            onClick={()=> setOpenProfileOptions(false)}

                        >
                            My Collection
                        </NavLink>
                    </li>
                </ul>
            </div>

            {/* User Profile avatar with drop down menu */}
            <div className='flex justify-between items-center text-xl relative'>                                                                                            
                <button className='flex items-center gap-2 p-2 rounded-lg hover:bg-orange-400 transition-colors text-[#FFFDD2] ' onClick={()=> setOpenProfileOptions(!openProfileOptions)}>
                        <img 
                            src={user?.profile_photo.url || <Icon icon='iconamoon:profile-fill' color='white' width="80" height="80"/>} 
                            alt="User avatar"
                            className='w-8 h-8 rounded-full cursor-pointer' 
                            
                        />
                            {/* Profile */}
                </button>
                
                <Activity mode={openProfileOptions ? "visible" :"hidden"}>

                    <div className='absolute right-0 w-48 bg-[#FFFBAD]  border border-gray-200 rounded-lg shadow-lg py-2 z-50 mt-58'>
                        
                        <ul>
                            <li>
                                <NavLink to='/delicious-plate/view-profile' className='block px-10 py-2 text-[#6b4226] hover:bg-orange-400  ' onClick={()=> setOpenProfileOptions(false)} >
                                    View Profile
                                </NavLink>
                                <hr className="my-0.5 border-gray-200" />
                            </li>

                            <li>
                                <NavLink to='/delicious-plate/account-settings/edit-profile' className='block px-4.5 py-2 text-[#6b4226] hover:bg-orange-400 ' onClick={()=> setOpenProfileOptions(false)} >
                                    Account Settings
                                </NavLink>
                                <hr className="my-0.5 border-gray-200"  />
                            </li>

                            <li>
                                <button className='block px-15.5 py-2 font-medium hover:bg-orange-400 transition cursor-pointer' onClick={handleLogout} >
                                    Logout
                                </button>
                            </li>
                        </ul>
                    
                    </div>
                
                </Activity>
            </div>
        </nav>
    </header>
  )
}

