import React, { useState } from 'react'
import { useRecipe } from '../../context/RecipeContext/RecipeContext'

export default function Ingredients() {

    const {recipe, setRecipe} = useRecipe()

    // const ingredients = recipe.ingredients_used
    

    // handle ingredient change
    const handleIngredientChange = (objectIndex, field, value)=>{

        //make copy of array ingredient
        const newUpdatedIngredient = [...recipe.ingredients_used]

        //update ingredient object name or quantity
        newUpdatedIngredient[objectIndex][field]= value

        // set the new updated ingredient (re-renders)
        setRecipe({...recipe, ingredients_used: newUpdatedIngredient})

        console.log(newUpdatedIngredient);
        
    }

     // add ingredient
    const addIngredient =() =>{
        // event.preventDefault()
        setRecipe({...recipe, ingredients_used: [...recipe.ingredients_used, {name:"", quantity:""}]})
        // setRecipe({...recipe, ingredients_used: [{name:"", quantity:""}]})

    }

    // remove ingredient
    const removeIngredient =(deleteIndex) =>{
        if(recipe.ingredients_used.length > 1) {
            const remainingIngredients = recipe.ingredients_used.filter((_,index) => index !== deleteIndex)

            setRecipe({...recipe, ingredients_used: remainingIngredients})
        }
    }
    

  return (

    <div className='border-gray-400 px-3 border mt-4 rounded-lg max-w-fit'>
        <h1 className='block font-bold text-gray-700 text-2xl'>Ingredients</h1>
        {recipe.ingredients_used.map((ingredient,index)=>(
            <div key={index} className='space-x-4 rounded-lg mt-4 '>
                <input
                    id='ingredients_used'                                                                                           
                    name='ingredients_used'
                    value={ingredient.name} 
                    onChange={(event)=>handleIngredientChange(index, "name", event.target.value)} 
                    type="text" 
                    placeholder='Enter Ingredients' 
                    className='outline-none py-2 px-4 border-gray-400 border placeholder-gray-500  rounded-lg focus:border-orange-500 focus:outline-none bg-white' 
                />
                

                <input
                    id='quantity'                                                                                           
                    name='quantity'
                    required
                    value={ingredient.quantity} 
                    onChange={(event)=>handleIngredientChange(index, "quantity", event.target.value)} 
                    type="text" 
                    placeholder='Quantity' 
                    className='mb-2 outline-none w-24 py-2 px-4 border-gray-400 border placeholder-gray-500  rounded-lg focus:border-orange-500 focus:outline-none bg-white' 
                />
                
                {/* add ingredient button */}
                <button type='button' onClick={addIngredient} className="cursor-pointer w-20 h-11 bg-blue-800 hover:bg-blue-700 text-[#fffcf5] text-center font-bold py-3 px-6 rounded-lg mt-3 transition ease-in-out duration-300">
                    Add
                </button>

                {/* remove ingredient button */}
                <button type='button' onClick={() => removeIngredient(index)} className="cursor-pointer w-28 h-11 bg-red-600 hover:bg-red-500 text-[#fffcf5] text-center font-bold py-3 px-6 rounded-lg mt-3 transition ease-in-out duration-300">
                    Remove
                </button>
            
            </div >
        ))}
            
    </div>
   
  )
}
