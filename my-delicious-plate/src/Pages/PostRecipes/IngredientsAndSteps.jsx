import React, { useState } from 'react'
import ProgressBar from '../../components/ProgressBar/ProgressBar'
import Ingredients from '../../components/Ingredients/Ingredients'
import { NavLink } from 'react-router-dom'
import Steps from '../../components/Steps/Steps'
import { useRecipe } from '../../context/RecipeContext/RecipeContext'


export default function IngredientsAndSteps() {

    const {recipe, setRecipe} = useRecipe()
    


  return (
    <div>
        <form className='px-20'>
            <h1 className="text-4xl font-bold mb-6 mt-2 text-center text-[#6b4226]">Key Ingredients and Steps To Make</h1>
            <hr className="flex-grow border-gray-300" />
            
            {/* progress bar */}
            <ProgressBar currentStep={3}/>
            
            <h2 className=" m-4 text-2xl font-normal mb-6 text-[#6b4226]"> Ingredients and Steps Details</h2>

            {/* number of servings field */}
            <div className=' rounded-lg w-full max-w-lg mt-8 '>
                <label htmlFor="number_of_servings" className='block font-semibold text-base text-gray-700'> Servings </label>
                <input
                    id='number_of_servings'                                                                                           
                    name='number_of_servings'
                    value={recipe.number_of_servings} 
                    onChange={(event)=>setRecipe({...recipe, number_of_servings: event.target.value})} 
                    type="text" 
                    placeholder='Enter number of servings' 
                    className='outline-none w-full py-2 px-4 border-gray-400 border placeholder-gray-500  rounded-lg focus:border-orange-500 focus:outline-none bg-white' 
                />
            </div >

            
            {/* ingredients field */}
            <Ingredients/>

            <Steps/>

            {/* go back to post new recipe button link */}
            <div className=' rounded-lg space-x-3 mt-12'>
                <NavLink to='/post-recipe/media' className="px-20 cursor-pointer border border-[#6b4226] text-[#6b4226] font-bold py-3 rounded-lg mt-3 transition ease-in-out duration-300">
                    Go Back
                </NavLink>

                <NavLink to='/post-recipe/review' className="px-20 cursor-pointer bg-[#6b4226] hover:bg-[#a36234] text-[#fffcf5] font-bold py-3 rounded-lg mt-3 transition ease-in-out duration-300">
                    Save & Continue
                </NavLink>
            </div >
        </form>
    </div>
  )
}
