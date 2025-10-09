import React from 'react'

export default function AboutUs() {
  return (
    <div className='mx-auto w-full max-w-7xl '>
        <h1 className='text-4xl font-bold text-center mt-8'> 
            About Delicious Plate 🍽️
        </h1>
        
        <div className=" inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full flex items-center gap-4 ">
            <img className="w-96 object-center"  src="https://images.pexels.com/photos/940302/pexels-photo-940302.jpeg" alt="image1" />
                <h2 className='text-2xl font-bold  '>
                    This is the Platform where you can showcase your unique delicious recipes
                    <span className='hidden sm:block text-4xl text-left text-[#6b4226]'>
                        All you do is,<br />
                        POST FIND LIKE SAVE COOK REPEAT 🙂 !! 
                    </span>
                </h2>
        </div>

        
    </div>
  )
}
