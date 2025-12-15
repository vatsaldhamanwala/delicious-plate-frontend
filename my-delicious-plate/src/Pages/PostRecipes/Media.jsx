import React, { useState } from 'react'
import ProgressBar from '../../components/ProgressBar/ProgressBar'
import { NavLink } from 'react-router-dom'
import { useRecipe } from '../../context/RecipeContext/RecipeContext'


export default function Media() {
    const {recipe, setRecipe} = useRecipe()
    

    //handle image 
    const handleRecipeImageUpload = (event) => {
        const recipeImageExist = event.target.files[0]
        if(recipeImageExist){
            const recipeImageUrl = URL.createObjectURL(recipeImageExist)
            setRecipe({...recipe, recipe_photo: recipeImageUrl})

            console.log(recipeImageExist);
            console.log(recipeImageUrl);
        }
    }
    
  return (
    <div>
        <form className='px-20'>
            <h1 className="text-4xl font-bold mb-6 mt-2 text-center text-[#6b4226]">Create Recipe Media</h1>
            <hr className="flex-grow border-gray-300" />


            {/* progress bar */}
            <ProgressBar currentStep={2}/>

            <h2 className=" m-4 text-3xl font-normal mb-6 text-[#6b4226]">Upload Recipe Image</h2>


           <div className="border rounded-lg p-3 flex items-center gap-4 w-full h-28 max-w-lg mt-7 ">
                <label htmlFor='image' className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center cursor-pointer overflow-hidden">
                    {recipe.recipe_photo ?(
                        <img src={recipe.recipe_photo}/>
                    ): (<span className="text-gray-500 text-3xl">👤</span>)}
                </label>

                <input 
                    id='recipe_photo'
                    name='recipe_photo'
                    onChange={handleRecipeImageUpload} 
                    type="file" 
                    accept="image/*"
                    className="hidden"
                />

                <button
                    type="button"
                    onClick={() => document.getElementById('recipe_photo').click()}
                    className="w-56 h-10 cursor-pointer bg-gray-100 border px-4 py-2 rounded-lg hover:bg-gray-200 text-sm"
                >
                    Choose File
                </button>
            </div>
            
            {/* go back to post new recipe button link */}
            <div className=' rounded-lg space-x-3 mt-12'>
                <NavLink to='/delicious-plate/post-recipe/basic-info' className="px-20 cursor-pointer border border-[#6b4226] text-[#6b4226] font-bold py-3 rounded-lg mt-3 transition ease-in-out duration-300">
                    Go Back
                </NavLink>

                <NavLink to='/delicious-plate/post-recipe/ingredients-and-steps' className="px-20 cursor-pointer bg-[#6b4226] hover:bg-[#a36234] text-[#fffcf5] font-bold py-3 rounded-lg mt-3 transition ease-in-out duration-300">
                    Save & Continue
                </NavLink>
            </div >
        </form>

    </div>
  )
}