import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react'


export default function SignUp() {

    const [fullName, setFullName] = useState('')
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [profilePhoto, setProfilePhoto] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    


  return (
    <>
        <nav className='text-4xl text-[#FFFDD2] font-bold text-center py-3 bg-[#6b4226]'> 
            Welcome to Delicious Plate
        </nav>
        
        
        <h1 className='text-4xl font-bold text-center mt-8'> 
            Create Account
        </h1>
        <form>
            {/* Full Name field */}
            <div className=' rounded-lg w-full max-w-lg mx-auto mt-8 '>
                <label htmlFor="name" className='block font-semibold text-base text-gray-700'> Full Name </label>
                <input type="text" placeholder='Enter your Full Name' className= ' outline-none w-full py-2 px-4 border-gray-400 border placeholder-gray-500 rounded-lg focus:border-orange-500 focus:outline-none bg-white' />
            </div>

            {/* Username field */}
            <div className=' rounded-lg w-full max-w-lg mx-auto mt-4 '>
                <label htmlFor="name" className='block font-semibold text-base text-gray-700'> Username </label>
                <input type="text" placeholder='Enter your Username' className='outline-none w-full py-2 px-4 border-gray-400 border placeholder-gray-500  rounded-lg focus:border-orange-500 focus:outline-none bg-white' />
            </div >

            {/* Email field */}
            <div className=' rounded-lg w-full max-w-lg mx-auto mt-4 '>
                <label htmlFor="email" className='block font-semibold text-base text-gray-700'> Email </label>
                <input type="email" placeholder='Enter your Email' className='outline-none w-full py-2 px-4 border-gray-400 border placeholder-gray-500  rounded-lg focus:border-orange-500 focus:outline-none bg-white' />
            </div >

            {/* Password field */}
            <div className=' rounded-lg w-full max-w-lg mx-auto mt-4 '>
                <label htmlFor="password" className='block font-semibold text-base text-gray-700'> Password </label>
                <div className='relative'>
                    <input type={showPassword ? "text": "password"} placeholder='Enter your Password' className='outline-none w-full py-2 px-4 border-gray-400 border placeholder-gray-500  rounded-lg focus:border-orange-500 focus:outline-none bg-white' />    
                    <button onClick={()=> setShowPassword(!showPassword)} type='button' className="absolute right-3 top-2.5 text-gray-500" >
                        { !showPassword ? <Icon icon='heroicons-solid:eye-off' width="20" height="20" /> : <Icon icon='garden:eye-fill-12' width="20" height="20"    />  }
                    </button>
                </div>  
            </div >

            {/* Profile Upload */}
             <div className="border rounded-lg p-3 flex items-center gap-4 w-full h-full max-w-lg mx-auto mt-7 ">
                <label className="w-14 h-14 rounded-full bg-gray-200 flex items-center justify-center cursor-pointer overflow-hidden">
                    {/* {profileImage ? (
                        <img src={profileImage} alt="preview" className="w-full h-full object-cover" />
                    ) : (
                        <span className="text-gray-500 text-3xl">👤</span>
                    )} */}
                    <input type="file" className="hidden"/>
                </label>

                <label className="cursor-pointer bg-gray-100 border px-4 py-2 rounded-lg hover:bg-gray-200 text-sm">
                    Upload Profile Photo
                    <input type="file" className="hidden"/>
                </label>
            </div>

            {/* sign up button */}
            <div className=' rounded-lg w-full max-w-lg mx-auto mt-4'>
                <button type='submit' className="w-60 bg-[#6b4226] hover:bg-[#a36234] text-[#fffcf5] font-bold py-3 px-6 rounded-lg mt-3 transition ease-in-out duration-300">
                    Sign Up
                </button>
            </div >

            {/* Already have account */}
            <div className=' max-w-lg mx-auto mt-4'>
                <label className="mt-4 text-center text-sm">
                    Already have an account?
                    <Link to="/auth/login" className="text-blue-600 font-medium hover:underline"> Log In</Link>
                </label>
            </div>
            
        </form>
    </>
    
  )
}
