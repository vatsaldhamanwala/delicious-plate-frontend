import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Icon } from '@iconify/react'
import { useAuth } from '../../context/AuthContext/AuthContext'
import AuthSignUp from '../../components/Buttons/AuthSignUp'


export default function SignUp() {

    const {signUp} = useAuth()
    const navigate = useNavigate()



    const [fullName, setFullName] = useState('')
    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [profilePhoto, setProfilePhoto] = useState('')
    const [showPassword, setShowPassword] = useState(false)

    
    const handleSubmit = async (event) =>{
        event.preventDefault()
        try {
            const formData = new FormData()
            formData.append("full_name", fullName)
            formData.append("user_name", userName)

            if (email) formData.append("email", email)
                
            formData.append("password", password)

            if (profilePhoto) formData.append("profile_photo", profilePhoto);

            const res =  await signUp(formData)
            
            // Navigate to protected route after successful sign-up
            if (res && res.data && res.data.data && res.data.data.user) {
                navigate('/delicious-plate', { replace: true })
            }
            
            return res

        } catch (error) {
            alert('Sign up fail', error)
        }
    }


  return (
    <>
        <nav className='text-4xl text-[#FFFDD2] font-bold text-center py-3 bg-[#6b4226]'> 
            Welcome to Delicious Plate
        </nav>
        
        
        <h1 className='text-4xl font-bold text-center mt-8'> 
            Create Account
        </h1>
        <form onSubmit={handleSubmit}>
            {/* Full Name field */}
            <div className=' rounded-lg w-full max-w-lg mx-auto mt-8 '>
                <label htmlFor="full_name" className='block font-semibold text-base text-gray-700'> FullName </label>
                <input 
                    required 
                    id='full_name'
                    name='full_name'
                    value={fullName} 
                    onChange={(event)=>setFullName(event.target.value)} 
                    type="text" 
                    placeholder='Enter your full name' 
                    className= ' outline-none w-full py-2 px-4 border-gray-400 border placeholder-gray-500 rounded-lg focus:border-orange-500 focus:outline-none bg-white' 
                />
            </div>

            {/* Username field */}
            <div className=' rounded-lg w-full max-w-lg mx-auto mt-4 '>
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

            {/* Email field */}
            <div className=' rounded-lg w-full max-w-lg mx-auto mt-4 '>
                <label htmlFor="email" className='block font-semibold text-base text-gray-700'> Email </label>
                <input
                    id='email' 
                    name='email'
                    value={email} 
                    onChange={(event)=>setEmail(event.target.value)} 
                    type="email" 
                    placeholder='Enter your email' 
                    className='outline-none w-full py-2 px-4 border-gray-400 border placeholder-gray-500  rounded-lg focus:border-orange-500 focus:outline-none bg-white' 
                />
            </div >

            {/* Password field */}
            <div className=' rounded-lg w-full max-w-lg mx-auto mt-4 '>
                <label htmlFor="password" className='block font-semibold text-base text-gray-700'> Password </label>
                <div className='relative'>
                    <input 
                        required 
                        id='password'
                        name='password'
                        type={showPassword ? "text": "password"}  
                        onChange={(event)=>setPassword(event.target.value)} 
                        placeholder='Enter your password' 
                        className='outline-none w-full py-2 px-4 border-gray-400 border placeholder-gray-500  rounded-lg focus:border-orange-500 focus:outline-none bg-white' 
                    />    
                    <button onClick={()=> setShowPassword(!showPassword)} type='button' className="absolute right-3 top-2.5 text-gray-500" >
                        { !showPassword ? <Icon icon='heroicons-solid:eye-off' width="20" height="20" /> : <Icon icon='garden:eye-fill-12' width="20" height="20"    />  }
                    </button>
                </div>  
            </div >

            {/* Profile Upload */}
             <div className="border rounded-lg p-3 flex items-center gap-4 w-full h-full max-w-lg mx-auto mt-7 ">
                <label htmlFor='profile_photo' className="w-14 h-14 rounded-full bg-gray-200 flex items-center justify-center cursor-pointer overflow-hidden">
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
                    className="cursor-pointer bg-gray-100 border px-4 py-2 rounded-lg hover:bg-gray-200 text-sm"
                >
                    Upload Profile Photo
                </button>
            </div>

            {/* sign up button */}
            <AuthSignUp/>

            {/* Already have account */}
            <div className=' max-w-lg mx-auto mt-4'>
                <label className="mt-4 text-center text-sm">
                    Already have an account?{""}
                    <Link to="/auth/login" className="text-blue-600 font-medium hover:underline"> Log In</Link>
                </label>
            </div>
            
        </form>
    </>
    
  )
}
