import { Icon } from '@iconify/react'
import React, { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import SideNavigationBar from '../../components/SideNavigationBar.jsx/SideNavigationBar'
import { useRecipe } from '../../context/RecipeContext/RecipeContext'
import { useAuth } from '../../context/AuthContext/AuthContext'

export default function ViewProfile() {

    const { user } = useAuth()
    const {recipes} = useRecipe()


  return (
    <div>
        <SideNavigationBar>
            {/* right side main content */}
           
            <h1 className="text-4xl font-bold mb-6 text-[#6b4226]">View Profile</h1>
            <hr className="flex-grow border-gray-300" />

        
            <section className='grid md:grid-cols-2 px-72'>
                {/* profile image */}
                <div className="mt-3 w-40 h-40 rounded-full bg-gray-300 flex items-center justify-center text-4xl">
                    {user?.profile_photo ? (
                        <img src={user.profile_photo.url} alt="Profile" className="w-full h-full rounded-full object-cover" />
                    ) : (
                        <Icon icon='iconamoon:profile-fill' color='white' width="80" height="80"/>
                    )}
                </div>

                {/* username display */}
                <div className='mt-4'>
                    <h2 className="text-3xl font-bold text-gray-800 ">{user?.user_name || 'Username'}</h2>
                    <p className="mt-2 text-lg text-gray-700 font-normal">{user?.full_name || 'Your Full Name'}</p>
                    <div className="flex gap-6 mt-2 text-gray-600 text-lg">
                        <span><b>{recipes.length}</b> Posts</span>
                        <span><b>0</b> Followers</span>
                        <span><b>0</b> Following</span>
                    </div>
                    <p className="mt-4 text-gray-500">{user?.bio || ''}</p>
                </div>
            </section>

            {/* Tabs */}
            <div className="flex gap-40 mt-20 justify-center">
                <nav className='space-x-12'>
                    <NavLink 
                        to='' 
                        end
                        className={({isActive})=>
                            `${isActive ? 'pb-2 border-b-3 border-orange-400 font-semibold px-5' : 'pb-2 text-gray-500 font-semibold px-5'}`
                        }
                    >
                        Posts
                    </NavLink>
                    
                    <NavLink 
                        to='saved' 
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
           
        </SideNavigationBar>
    </div>
  )
}