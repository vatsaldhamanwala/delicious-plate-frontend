import { Icon } from '@iconify/react'
import React, { useState } from 'react'
import SideNavigationBar from '../../components/SideNavigationBar.jsx/SideNavigationBar'
import SetNewPassword from '../../components/Buttons/SetNewPassword'

export default function ChangePassword() {
    const [password, setPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [showNewPassword, setShowNewPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)


    
    
  return (
    <SideNavigationBar>
        <form>
            <h1 className="text-4xl font-bold mb-6 text-[#6b4226]">Change Password</h1>
            <hr className="flex-grow border-gray-300" />
            
            {/* current password */}
            <div className=' rounded-lg w-full max-w-lg mt-4 '>
                <label htmlFor="current-password" className='block font-semibold text-base text-gray-700'> Password </label>
                <div className='relative'>
                    <input 
                        required 
                        id='current-password'
                        name='password'
                        type={showPassword ? "text": "password"}  
                        onChange={(event)=>setPassword(event.target.value)} 
                        placeholder='Enter your Password' 
                        className='outline-none w-full py-2 px-4 border-gray-400 border placeholder-gray-500  rounded-lg focus:border-orange-500 focus:outline-none bg-white' 
                    />    
                    <button onClick={()=> setShowPassword(!showPassword)} type='button' className="cursor-pointer absolute right-3 top-2.5 text-gray-500" >
                        { !showPassword ? <Icon icon='heroicons-solid:eye-off' width="20" height="20" /> : <Icon icon='garden:eye-fill-12' width="20" height="20"    />  }
                    </button>
                </div>  
            </div >

            {/* set new password */}
            <div className=' rounded-lg w-full max-w-lg mt-4 '>
                <label htmlFor="new-password" className='block font-semibold text-base text-gray-700'> New Password </label>
                <div className='relative'>
                    <input 
                        required 
                        id='new-password'
                        name='new-password'
                        type={showNewPassword ? "text": "password"}  
                        onChange={(event)=>setNewPassword(event.target.value)} 
                        placeholder='Enter your password' 
                        className='outline-none w-full py-2 px-4 border-gray-400 border placeholder-gray-500  rounded-lg focus:border-orange-500 focus:outline-none bg-white' 
                    />    
                    <button onClick={()=> setShowNewPassword(!showNewPassword)} type='button' className="cursor-pointer absolute right-3 top-2.5 text-gray-500" >
                        { !showNewPassword ? <Icon icon='heroicons-solid:eye-off' width="20" height="20" /> : <Icon icon='garden:eye-fill-12' width="20" height="20"    />  }
                    </button>
                </div>  
            </div >

            {/* set confirm password */}
            <div className=' rounded-lg w-full max-w-lg mt-4 '>
                <label htmlFor="confirm-password" className='block font-semibold text-base text-gray-700'> Confirm Password </label>
                <div className='relative'>
                    <input 
                        required 
                        id='confirm-password'
                        name='confirm-password'
                        type={showConfirmPassword ? "text": "password"}  
                        onChange={(event)=>setConfirmPassword(event.target.value)} 
                        placeholder='Confirm your new password' 
                        className='outline-none w-full py-2 px-4 border-gray-400 border placeholder-gray-500  rounded-lg focus:border-orange-500 focus:outline-none bg-white' 
                    />    
                    <button onClick={()=> setShowConfirmPassword(!showConfirmPassword)} type='button' className="cursor-pointer absolute right-3 top-2.5 text-gray-500" >
                        { !showConfirmPassword ? <Icon icon='heroicons-solid:eye-off' width="20" height="20" /> : <Icon icon='garden:eye-fill-12' width="20" height="20"    />  }
                    </button>
                </div>  
            </div >

            {/* set new password and forgot password button */}
            <SetNewPassword/>
         </form>
    </SideNavigationBar>
  )
}
