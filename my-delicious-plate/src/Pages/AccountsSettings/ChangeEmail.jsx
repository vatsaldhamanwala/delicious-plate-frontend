import React, { useState } from 'react'
import SideNavigationBar from '../../components/SideNavigationBar.jsx/SideNavigationBar'
import SetEmail from '../../components/Buttons/SetEmail'

export default function ChangeEmail() {

const [email, setEmail] = useState('')
const [newEmail, setNewEmail] = useState('')
const [confirmEmail, setConfirmEmail] = useState('')

    
return (
    <div>
        <SideNavigationBar>
            <form>
                <h1 className="text-4xl font-bold mb-6 text-[#6b4226]">Change Email</h1>
                <hr className="flex-grow border-gray-300" />

                {/* current email field */}
                <div className=' rounded-lg w-full max-w-lg mt-4 '>
                    <label htmlFor="email" className='block font-semibold text-base text-gray-700'> Current Email </label>
                    <input
                        id='email' 
                        name='email'
                        required
                        value={email} 
                        onChange={(event)=>setEmail(event.target.value)} 
                        type="email" 
                        placeholder='Enter your current email' 
                        className='outline-none w-full py-2 px-4 border-gray-400 border placeholder-gray-500  rounded-lg focus:border-orange-500 focus:outline-none bg-white' 
                    />
                </div >
                {/* new email field */}
                <div className=' rounded-lg w-full max-w-lg mt-4 '>
                    <label htmlFor="email" className='block font-semibold text-base text-gray-700'> New Email </label>
                    <input
                        id='email' 
                        name='email'
                        required
                        value={newEmail} 
                        onChange={(event)=>setNewEmail(event.target.value)} 
                        type="email" 
                        placeholder='Enter your new email' 
                        className='outline-none w-full py-2 px-4 border-gray-400 border placeholder-gray-500  rounded-lg focus:border-orange-500 focus:outline-none bg-white' 
                    />
                </div >
                {/* confirm email field */}
                <div className=' rounded-lg w-full max-w-lg mt-4 '>
                    <label htmlFor="email" className='block font-semibold text-base text-gray-700'> Confirm Email </label>
                    <input
                        id='email' 
                        name='email'
                        required
                        value={confirmEmail} 
                        onChange={(event)=>setConfirmEmail(event.target.value)} 
                        type="email" 
                        placeholder='Re-enter to confirm your new email' 
                        className='outline-none w-full py-2 px-4 border-gray-400 border placeholder-gray-500  rounded-lg focus:border-orange-500 focus:outline-none bg-white' 
                    />
                </div >
                {/* set email button */}
                <SetEmail/>
            </form>
        </SideNavigationBar>
    </div>
  )
}