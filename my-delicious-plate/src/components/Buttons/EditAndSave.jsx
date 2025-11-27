import React from 'react'
import { useRecipe } from '../../context/RecipeContext/RecipeContext'

export default function EditAndSave() {

    const {recipe, setRecipes} = useRecipe()

    const handleSaveAndRecipe = () => {
        setRecipes((prev) => [...prev, recipe])
        alert("Your recipe is successfully updated !! ")
    }


  return (
    <div className=' rounded-lg w-full max-w-lg mt-12'>
        <button onClick={handleSaveAndRecipe} type='submit' className="cursor-pointer w-60 bg-[#6b4226] hover:bg-[#a36234] text-[#fffcf5] font-bold py-3 px-6 rounded-lg mt-3 transition ease-in-out duration-300">
            Edit and Save
        </button>
    </div >
  )
}
