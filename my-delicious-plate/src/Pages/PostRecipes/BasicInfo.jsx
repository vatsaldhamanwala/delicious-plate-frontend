import React, { useState } from 'react'
import ProgressBar from '../../components/ProgressBar/ProgressBar'
import { NavLink } from 'react-router-dom'
import { useRecipe } from '../../context/RecipeContext/RecipeContext'


export default function BasicInfo() {
    const {recipe, setRecipe} = useRecipe()

  return (
    <div>
        <form className='px-20'>
            <h1 className="text-4xl font-bold mb-6 mt-2 text-center text-[#6b4226]">Post New Recipe</h1>
            <hr className="flex-grow border-gray-300" />


            {/* progress bar */}
            <ProgressBar currentStep={1}/>

            <h2 className=" m-4 text-3xl font-normal mb-6 mt-10 text-[#6b4226]">Recipe Details</h2>


            {/* recipe title field */}
            <div className=' rounded-lg w-full max-w-lg mt-8 '>
                <label htmlFor="name" className='block font-semibold text-base text-gray-700'> Recipe Name </label>
                <input
                    id='name' 
                    name='name'
                    required
                    value={recipe.name} 
                    onChange={(event)=>setRecipe({...recipe ,name: event.target.value})} 
                    type="text" 
                    placeholder='Enter name of your recipe name' 
                    className='outline-none w-full py-2 px-4 border-gray-400 border placeholder-gray-500  rounded-lg focus:border-orange-500 focus:outline-none bg-white' 
                />
            </div >

            {/* recipe category field */}
            <div className='w-full'>
                <div className='relative rounded-lg max-w-lg mt-4 '>
                    <label htmlFor="category" className='block font-semibold text-base text-gray-700'> Recipe Category </label>
                    <select 
                        id='category' 
                        name='category'
                        value={recipe.category} 
                        onChange={(event)=>setRecipe({...recipe, category: event.target.value})} 
                        type="text" 
                        className='outline-none w-full py-2 px-4 border-gray-400 border placeholder-gray-500  rounded-lg focus:border-orange-500 focus:outline-none bg-white' 
                    >
                        <option value='' disabled>
                            Select your recipe category
                        </option>

                        <option value='dessert'>Dessert</option>
                        <option value='veg'>Veg</option>
                        <option value='non-veg'>Non-Veg</option>

                    </select>
                </div >
            </div>

            {/* recipe description field */}
            <div className='w-full'>
                <div className='relative rounded-lg max-w-fit mt-4 '>
                    <label htmlFor="description" className='block font-semibold text-base text-gray-700'> Recipe Description </label>
                    <textarea
                        id='description' 
                        name='description'
                        required
                        value={recipe.description} 
                        onChange={(event)=>setRecipe({...recipe, description: event.target.value})} 
                        type="text" 
                        placeholder='Describe what is special about your recipe & other important details.' 
                        className='outline-none w-2xl h-40 py-2 px-4 border-gray-400 border placeholder-gray-500  rounded-lg focus:border-orange-500 focus:outline-none bg-white' 
                    
                    />
                    <span className="absolute bottom-2 right-2 text-sm text-gray-400">
                        {recipe.description.length}/300
                    </span>
                </div >
            </div>

            {/* save and continue button link */}
            <div className=' rounded-lg  mt-12'>
                <NavLink to='/post-recipe/media' className="px-20 cursor-pointer bg-[#6b4226] hover:bg-[#a36234] text-[#fffcf5] font-bold py-3 rounded-lg mt-3 transition ease-in-out duration-300">
                    Save & Continue
                </NavLink>
            </div >
        </form>
    </div>
  )
}