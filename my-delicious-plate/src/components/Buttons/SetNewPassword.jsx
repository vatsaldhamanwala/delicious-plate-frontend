import React from 'react'
import { Link } from 'react-router-dom'

export default function SetNewPassword() {
  return (
    <div className='mt-4'>
        <Link to='' className=" flex mx-96 gap-64 w-60 font-normal rounded-lg transition ease-in-out duration-300 text-gray-600 hover:text-blue-600">
            Forgot Password ?
        </Link>
        <div className=' rounded-lg w-full max-w-lg space-x-2 mt-4'>
        
            {/* <button type='submit' className="w-60 border border-[#6b4226] hover:bg-[#a36234] text-[#6b4226] font-bold py-3 px-6 rounded-lg mt-3 transition ease-in-out duration-300">
                Forgot Password ?
            </button> */}

            <button type='submit' className="cursor-pointer w-60 bg-[#6b4226] hover:bg-[#a36234] text-[#fffcf5] font-bold py-3 px-6 rounded-lg mt-3 transition ease-in-out duration-300">
                Set New Password
            </button>
        </div >
    </div>
  )
}
