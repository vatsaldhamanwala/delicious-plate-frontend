import { Icon } from '@iconify/react'
import React, { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function ViewProfile() {

    const [showProfilePhoto, setShowProfile] = useState(null)


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

        {/* right side main content */}
        <main className="flex-1 p-8">
            <h1 className="text-4xl font-bold mb-6 text-[#6b4226]">View Profile</h1>
            <hr className="flex-grow border-gray-300" />

           
            <section className='grid md:grid-cols-2 px-72'>
                {/* profile image */}
                <div className="mt-3 w-40 h-40 rounded-full bg-gray-300 flex items-center justify-center text-4xl">
                    {showProfilePhoto?(
                        <img src={URL.createObjectURL(showProfilePhoto)} />
                    ) :(<Icon icon='iconamoon:profile-fill' color='white' width="80" height="80"/>) }
                </div>

                {/* username display */}
                <div className='mt-4'>
                    <h2 className="text-3xl font-bold text-gray-800 ">Username</h2>
                    <p className="mt-2 text-lg text-gray-700 font-normal">Your Full Name</p>
                    <div className="flex gap-6 mt-2 text-gray-600 text-lg">
                        <span><b>0</b> Posts</span>
                        <span><b>0</b> Followers</span>
                        <span><b>0</b> Following</span>
                    </div>
                    <p className="mt-4 text-gray-500">Bio</p>
                </div>
            </section>

            {/* Tabs */}
            <div className="flex gap-40 mt-20 justify-center">
                <nav className='space-x-12'>
                    <NavLink 
                        to='/view-profile' 
                        end
                        className={({isActive})=>
                            `${isActive ? 'pb-2 border-b-3 border-orange-400 font-semibold px-5' : 'pb-2 text-gray-500 font-semibold px-5'}`
                        }
                    >
                        Posts
                    </NavLink>
                    
                    <NavLink 
                        to='saved/' 
                        className={({isActive})=>
                            `${isActive ? 'pb-2 border-b-3 border-orange-400 font-semibold px-5' : 'pb-2 text-gray-500 font-semibold px-5'}`
                        }
                    >
                        Saved
                    </NavLink>

                    {/* <NavLink 
                        to='videos/' 
                        className={({isActive})=>
                            `${isActive ? 'pb-2 border-b-3 border-orange-400 font-semibold px-5' : 'pb-2 text-gray-500 font-semibold px-5'}`
                        }
                    >
                        Videos
                    </NavLink> */}
                </nav>               
            </div>
            <hr className="mt-2 border-gray-300" />
            <Outlet/>
        </main>
    </div>
  )
}
