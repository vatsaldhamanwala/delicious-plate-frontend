import React from 'react'
import { NavLink } from 'react-router-dom'

export default function SideNavigationBar({children}) {
  return (
     <div className="flex min-h-screen bg-[#fffdf7]">
        {/* Left Sidebar */}
        <aside className="w-64 bg-[#fff7b2] p-5">
            <h2 className="text-2xl text-[#6b4226] font-bold mb-6">Your Profile Info</h2>
            
            {/* view profile navigation for side bar */}
            <nav className="flex flex-col gap-2">
                <ul>
                    <li>
                        <NavLink 
                            to= '/view-profile'
                            className={({isActive})=>
                                `${isActive ? '"text-left px-13 py-2 rounded-md font-medium bg-orange-400 transition"':'text-left px-13 py-2 rounded-md bg-[#ffef8c] font-medium hover:bg-orange-400 transition'}`
                            } 
                        >
                            View Profile
                        </NavLink>
                    </li>
                </ul>
            </nav>

            <h2 className="text-2xl text-[#6b4226] font-bold mt-11 ">Accounts Settings</h2>
            {/* account settings navigation for side bar */}
            <nav className="flex flex-col mt-5">
                <ul>
                    <li className='mb-6'>
                        <NavLink 
                            to='/account-settings/edit-profile' 
                            className= {({isActive})=>
                                `${isActive ? ' text-left px-14 py-2 rounded-md font-medium bg-orange-400 transition':' text-left text-[#6b4226] px-14 py-2 rounded-md bg-[#ffef8c] font-medium hover:bg-orange-400 transition'}`
                            }
                        >
                            Edit Profile
                        </NavLink>
                    </li>

                    <li className='mb-6'>
                        <NavLink 
                        to='/account-settings/change-email' 
                        className= {({isActive})=>
                                `${isActive ? ' text-left px-11.5 py-2 rounded-md font-medium bg-orange-400 transition':' text-[#6b4226] px-11.5 py-2 rounded-md bg-[#ffef8c] font-medium hover:bg-orange-400 transition'}`
                            }
                        >
                            Change Email
                        </NavLink>
                    </li>

                    <li className='mb-6'>
                        <NavLink 
                            to='/account-settings/change-password' 
                            className= {({isActive})=>
                                `${isActive ? ' text-left px-8 py-2 rounded-md font-medium bg-orange-400 transition':' text-[#6b4226] px-8 py-2 rounded-md bg-[#ffef8c] font-medium hover:bg-orange-400 transition'}`
                            }
                        >
                            Change Password
                        </NavLink>
                    </li>

                    <li className='mb-6'>
                        <NavLink 
                            to='/' 
                            className= {({isActive})=>
                                `${isActive ? ' text-left px-17.5 py-2 rounded-md font-medium bg-orange-400 transition':' text-[#6b4226] px-17.5 py-2 rounded-md bg-[#ffef8c] font-medium hover:bg-orange-400 transition'}`
                            }
                        >
                            Logout
                        </NavLink>
                    </li>
                </ul>
            </nav>

        </aside>

        <div className='flex-1 p-8'>
            {children}
        </div>
    </div>
  )
}
