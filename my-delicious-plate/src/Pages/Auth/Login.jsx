import { Icon } from '@iconify/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'


export default function Login() {

    const [showPassword, setShowPassword] = useState(false)
    console.log(showPassword);
    

 return (
    <>
        <nav className='text-4xl text-[#FFFDD2] font-bold text-center py-3 bg-[#6b4226]'> 
            Welcome to Delicious Plate
        </nav>
        
        <h1 className='text-4xl font-bold text-center mt-8'> 
            Login to delicious plate
        </h1>
        <form>
            {/* Username field */}
            <div className=' rounded-lg w-full max-w-lg mx-auto mt-15 '>
                <label htmlFor="name" className='block font-semibold text-base text-gray-700'> Username </label>
                <input type="text" placeholder='Enter your Username' className='outline-none w-full py-2 px-4 border-gray-400 border placeholder-gray-500  rounded-lg focus:border-orange-500 focus:outline-none bg-white' />
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

            <div className="flex max-w-lg mx-auto mt-3 gap-64">
                <Link to='' className="text-gray-600 hover:text-brown-600 hover:text-blue-600">
                    Forgot Password ?
                </Link>

                <label className="flex items-center gap-1 text-gray-700 ">
                    <input type="checkbox" className="accent-brown-600" />
                    Remember Me
                </label>
            </div>


            {/* sign up button */}
            <div className=' rounded-lg w-full max-w-lg mx-auto mt-4'>
                <button type='submit' className="w-60 bg-[#6b4226] hover:bg-[#a36234] text-[#fffcf5] font-bold py-3 px-6 rounded-lg mt-3 transition ease-in-out duration-300">
                   Login
                </button>
            </div >

            {/* Already have account */}
            <div className=' max-w-lg mx-auto mt-4'>
                <label className="mt-4 text-center text-sm">
                    Don't have an account?
                    <Link to="/auth/sign-up" className="text-blue-600 font-medium hover:underline"> Sign Up</Link>
                </label>
            </div>
            
        </form>
    </>
    
  )
}
