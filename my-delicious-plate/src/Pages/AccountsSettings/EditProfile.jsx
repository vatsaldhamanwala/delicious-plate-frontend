import React, { useState } from 'react'
import SideNavigationBar from '../../components/SideNavigationBar.jsx/SideNavigationBar'
import { Icon } from '@iconify/react'
import Submit from '../../components/Buttons/Submit'

export default function EditProfile() {

    const [profilePhoto, setProfilePhoto] = useState('')
    const [fullName, setFullName] = useState('')
    const [userName, setUserName] = useState('')
    const [bio, setBio] = useState('')
    const [gender, setGender] = useState('')
    
  return (
    <div>
        <SideNavigationBar>
            <form>
                <h1 className="text-4xl font-bold mb-6 text-[#6b4226]">Edit Profile</h1>
                <hr className="flex-grow border-gray-300" />

                {/* update or remove profile photo section */}
                <div className="border rounded-lg p-3 flex items-center gap-4 w-full h-28 max-w-lg mt-7 ">
                    <label htmlFor='profile_photo' className="w-28 h-22 rounded-full bg-gray-200 flex items-center justify-center cursor-pointer overflow-hidden">
                        {profilePhoto ?(
                            <img src={URL.createObjectURL(profilePhoto)}/>
                        ): (<span className="text-gray-500 text-3xl">👤</span>)}
                    </label>
                    <input 
                        id='profile_photo'
                        name='profile_photo'
                        onChange={(event)=>setProfilePhoto(event.target.files[0])} 
                        type="file" 
                        accept="image/*"
                        className="hidden"
                    />

                    <button
                        type="button"
                        onClick={() => document.getElementById('profile_photo').click()}
                        className="w-56 h-10  cursor-pointer bg-gray-100 border px-4 py-2 rounded-lg hover:bg-gray-200 text-sm"
                    >
                        Upload Profile Photo
                    </button>
                    <button
                        type="button"
                        onClick={() => document.getElementById('profile_photo').click()}
                        className="w-56 h-10 cursor-pointer bg-gray-100 border px-4 py-2 rounded-lg hover:bg-red-500 text-sm"
                    >
                        Remove Current Photo
                    </button>
                </div>

                {/* other updated fields */}
                {/* full name */}
                <div className=' rounded-lg w-full max-w-lg mt-4 '>
                    <label htmlFor="full_name" className='block font-semibold text-base text-gray-700'> FullName </label>
                    <input 
            
                        id='full_name'
                        name='full_name'
                        required  
                        value={fullName} 
                        onChange={(event)=>setFullName(event.target.value)} 
                        type="text" 
                        placeholder='Enter your full name' 
                        className= ' outline-none w-full py-2 px-4 border-gray-400 border placeholder-gray-500 rounded-lg focus:border-orange-500 focus:outline-none bg-white' 
                    />
                </div>       
                {/* username */}
                <div className=' rounded-lg w-full max-w-lg mt-4 '>
                    <label htmlFor="user_name" className='block font-semibold text-base text-gray-700'> Username </label>
                    <input 
                        id='user_name' 
                        name='user_name'
                        required  
                        value={userName} 
                        onChange={(event)=>setUserName(event.target.value)} 
                        type="text" 
                        placeholder='Enter your username' 
                        className='outline-none w-full py-2 px-4 border-gray-400 border placeholder-gray-500  rounded-lg focus:border-orange-500 focus:outline-none bg-white' 
                    />
                </div >

                {/* bio */}
                <div className='w-full'>
                    <div className='relative rounded-lg max-w-lg mt-4 '>
                        <label htmlFor="bio" className='block font-semibold text-base text-gray-700'> Bio </label>
                        <textarea
                            id='bio' 
                            name='bio'
                            
                            value={bio} 
                            onChange={(event)=>setBio(event.target.value)} 
                            type="text" 
                            placeholder='Enter your bio' 
                            className='outline-none w-full py-2 px-4 border-gray-400 border placeholder-gray-500  rounded-lg focus:border-orange-500 focus:outline-none bg-white' 
                        
                        />
                        <span className="absolute bottom-2 right-4 text-sm text-gray-400">
                            {bio.length}/150
                        </span>
                    </div >
                    
                </div>

                {/* gender */}
                <div className='w-full'>
                    <div className='relative rounded-lg max-w-lg mt-4 '>
                        <label htmlFor="gender" className='block font-semibold text-base text-gray-700'> Gender </label>
                        <select 
                            id='gender' 
                            name='gender'
                            value={gender} 
                            onChange={(event)=>setGender(event.target.value)} 
                            type="text" 
                            className='outline-none w-full py-2 px-4 border-gray-400 border placeholder-gray-500  rounded-lg focus:border-orange-500 focus:outline-none bg-white' 
                        >
                            <option value='' disabled selected>
                                Select your specific Gender 
                            </option>

                            <option value='male'>Male</option>
                            <option value='female'>Female</option>
                        </select>
                    </div >
                </div>
                
               {/* submit button */}
               <Submit/>
            </form>
            
        </SideNavigationBar>
    </div>
  )
}
