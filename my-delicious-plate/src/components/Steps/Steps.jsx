import React, { useState } from 'react'
import { useRecipe } from '../../context/RecipeContext/RecipeContext'

export default function Steps() {

    const {recipe, setRecipe} = useRecipe()
    
    const handleStepChange = (objectIndex ,field, value) => {
        const newUpdatedStep = [...recipe.steps]

        newUpdatedStep [objectIndex][field] = value

        setRecipe({...recipe, steps: newUpdatedStep})
    }

    //add steps
    const addStep = () => {
        setRecipe({...recipe, steps: [...recipe.steps,{description:''}]})
    } 

    //remove using recipe.steps
    const removeStep = (deleteStepIndex) => {
        if(recipe.steps.length > 1){
            const remainingSteps = recipe.steps.filter((_,index) => index !== deleteStepIndex)
            setRecipe({...recipe, steps: remainingSteps})
        }
    }
    
  return (

    <>
        <div className='border-gray-400 px-3 border mt-4 rounded-lg max-w-fit'>
            <h1 className='block font-bold text-gray-700 text-2xl'>How To Cook</h1>
            {recipe.steps.map((step,index) => (
                <div key={index} className='flex space-x-4 rounded-lg mt-4 mb-2 '>

                    {/* add step number  */}
                    <span className="pt-2 font-bold text-gray-700">{index + 1}.</span>

                    {/* input steps  */}
                    <textarea
                        id={`steps-${index}`}                                                                                          
                        name='steps'
                        required
                        value={step.description} 
                        onChange={(event)=>handleStepChange(index,'description' ,event.target.value)} 
                        type="text" 
                        placeholder= {`Steps ${index + 1}`} 
                        className=' w-96 outline-none py-2 px-4 border-gray-400 border placeholder-gray-500  rounded-lg focus:border-orange-500 focus:outline-none bg-white' 
                    />
                    
                    
                    {/* add ingredient button */}
                    <button type='button' onClick={addStep} className=" cursor-pointer w-20 h-11 bg-blue-800 hover:bg-blue-700 text-[#fffcf5] text-center font-bold py-3 px-6 rounded-lg mt-3 transition ease-in-out duration-300">
                        Add
                    </button>

                    {/* remove ingredient button */}
                    <button type='button' onClick={() => removeStep(index)} className="cursor-pointer w-28 h-11 bg-red-600 hover:bg-red-500 text-[#fffcf5] text-center font-bold py-3 px-6 rounded-lg mt-3 transition ease-in-out duration-300">
                        Remove
                    </button>
                
                </div >
            ))}
                
        </div>
    </>
    
  )
}
