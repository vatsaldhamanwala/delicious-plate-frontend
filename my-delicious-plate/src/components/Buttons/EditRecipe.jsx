import React from 'react'
import { NavLink } from 'react-router-dom'
import { useRecipe } from '../../context/RecipeContext/RecipeContext'

export default function EditRecipe() {

  const {recipe, setRecipe} = useRecipe()
  
  return (
 
    <NavLink onClick={()=> setRecipe(recipe)} to='/edit-recipe-details' className="  max-w-75 px-4 py-2 cursor-pointer bg-[#6b4226] hover:bg-[#a36234] text-[#fffcf5] font-bold rounded-lg mt-3 transition ease-in-out duration-300">
        Edit Recipe Details
    </NavLink>
   
  )
}
