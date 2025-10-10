import React from 'react'
import { Icon } from "@iconify/react";

export default function Contact() {
  return (
    <>
        <h1 className='text-4xl font-bold text-center mt-8'> 
            Contact Us
        </h1>

        <div className='grid md:grid-cols-2 px-40 '>
            <div className='p-6 mr-2 bg-gray-100 sm:rounded-lg mt-8  mx-auto '>
                <h1 className='ext-3xl sm:text-4xl text-gray-800 font-extrabold tracking-tight'> 
                    Get in touch:  
                </h1>
                <p>
                    Fill the beside form to share your feedback, queries and more
                </p>
                <div className='flex items-center mt-8 text-gray-600'>
                    <Icon icon='ep:location' className='w-6 h-6'/>
                    <div className='ml-4 text-md tracking-wide font-semibold'>
                        Street, State, Postal Code
                    </div>
                </div>

                <div className='flex items-center mt-8 text-gray-600'>
                    <Icon icon='pepicons-pencil:phone' className='w-6 h-6'/>
                    <div className='ml-4 text-md tracking-wide font-semibold'>
                        +91-987654321
                    </div>
                </div>

                <div className='flex items-center mt-8 text-gray-600'>
                    <Icon icon='iconamoon:email-light' className='w-6 h-6'/>
                    <div className='ml-4 text-md tracking-wide font-semibold'>
                        info@deliciousPlate.com
                    </div>
                </div>
            

                <img className="w-80 object-center mt-6 animate-pulse bg-gray-200 rounded-lg h-48 "  src="" alt="logo" />
            
            </div>
            <form>
                {/* name field */}
                <div className=' rounded-lg w-full max-w-lg mx-auto mt-8 '>
                    <label htmlFor="name" className='block font-semibold text-base text-gray-700'> Name </label>
                    <input type="text" placeholder='Enter your name' className= ' outline-none w-full py-2 px-4 border-gray-400 border placeholder-gray-500 rounded-lg focus:border-orange-500 focus:outline-none bg-white' />
                </div>

                {/* email field */}
                <div className=' rounded-lg w-full max-w-lg mx-auto mt-4 '>
                    <label htmlFor="email" className='block font-semibold text-base text-gray-700'> Email </label>
                    <input type="text" placeholder='Enter your email' className='outline-none w-full py-2 px-4 border-gray-400 border placeholder-gray-500  rounded-lg focus:border-orange-500 focus:outline-none bg-white' />
                </div >

                {/* phone number field */}
                <div className=' rounded-lg w-full max-w-lg mx-auto mt-4 '>
                    <label htmlFor="phoneNumber" className='block font-semibold text-base text-gray-700'> Phone Number </label>
                    <input type="text" placeholder='Enter your phone number' className='outline-none w-full py-2 px-4 border-gray-400 border placeholder-gray-500  rounded-lg focus:border-orange-500 focus:outline-none bg-white' />
                </div >

                {/* reason field */}
                <div className=' rounded-lg w-full max-w-lg mx-auto mt-4 '>
                    <label htmlFor="reason" className='block font-semibold text-base text-gray-700'> Reason For Contacting Us </label>

                    {/* to get the multiple inputs using textarea element */}
                    <textarea name="message" id="message" rows= "4" placeholder='describe your reason or queries' className=' outline-none w-full h-40 py-2 px-4 border-gray-400 border placeholder-gray-500  rounded-lg focus:border-orange-500 focus:outline-none bg-white'></textarea>
                </div >

                <div className=' rounded-lg w-full max-w-lg mx-auto mt-4 '>
                    <button type='submit' className="w-60 bg-[#6b4226] hover:bg-[#a36234] text-[#fffcf5] font-bold py-3 px-6 rounded-lg mt-3 transition ease-in-out duration-300">
                        Submit
                    </button>
                </div >

            </form>
        </div>
        
        
        

    </>
    
  )
}
