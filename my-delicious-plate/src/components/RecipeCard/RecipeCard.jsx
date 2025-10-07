import React, { useState } from 'react'
import { Icon } from "@iconify/react";

export default function RecipeCard() {

    const [isLiked, setIsLiked] = useState(false)

    const [isSaved , setIsSaved]= useState(false)

    console.log(isLiked);
    
    

  return (
    <div className='w-60 flex flex-col rounded-xl bg-white min-h-[19rem] border border-gray-300 max-w-2xl mx-auto mt-8'>
        <div className=' shadow  rounded-t-xl'>
            <img
                src="https://images.pexels.com/photos/1707920/pexels-photo-1707920.jpeg" 
                alt="test"
                className='object-cover object-center rounded-t-2xl'
            />
        </div>

        <div className='flex flex-col py-3 px-1 pb-10 text-[#6b4226] space-y-2'>

            <div className='flex justify-left '>
                <button onClick={()=> setIsLiked(!isLiked)} className='flex items-center gap-2 '>
                    {isLiked ? <Icon icon='fluent-emoji-flat:heart-suit' className='w-6 h-6' /> : <Icon icon='clarity:heart-line' className='w-6 h-6'/>}
                </button>

                <button onClick={()=> setIsSaved(!isSaved)} className='flex items-center gap-2 '>
                    { isSaved ? <Icon icon='fluent:bookmark-20-filled' className='w-6 h-6'/> : <Icon icon='fluent:bookmark-20-regular' className='w-6 h-6'/>}
                </button>
            </div>

            <div className='flex justify-between '>
                <h1 className='font-bold'> Title </h1>
            </div>

            <div className='flex justify-between'>
                <p className='font-semibold'> Category </p>
            </div>

            <div className='flex justify-between'>
                <p className='font-normal'> Recipe By </p>
            </div>
        </div>
    </div>
  )
}
