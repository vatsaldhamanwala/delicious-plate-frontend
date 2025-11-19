import React, { useState } from 'react'

export default function Ingredients() {

    const [ingredients, setIngredients]= useState([{name: "", quantity: ""}])

    // handle ingredient change
    const handleIngredientChange = (indexObject, field, value)=>{
        const newIngredient = [...ingredients]
        newIngredient[indexObject][field]= value
        setIngredients(newIngredient)

        console.log(newIngredient);
        
    }

     // add ingredient
    const addIngredient =() =>{
        // event.preventDefault()
        setIngredients([...ingredients, {name:"", quantity:""}])
    }

    // remove ingredient
    const removeIngredient =(deleteIndex) =>{
        if(ingredients.length > 1) {
            const remainingIngredients = ingredients.filter((index) => index.name && index.quantity !== deleteIndex)

            setIngredients(remainingIngredients)
        }
    }
    

  return (

    <form>
        <div className='border-gray-400 px-3 border mt-4 rounded-lg max-w-fit'>
            <h1 className='block font-bold text-gray-700 text-2xl'>Ingredients</h1>
            {ingredients.map((ingredient,index)=>(
                <div key={index} className='space-x-4 rounded-lg mt-4 '>
                    <input
                        id='ingredients_used'                                                                                           
                        name='ingredients_used'
                        required
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
                        className=' outline-none w-24 py-2 px-4 border-gray-400 border placeholder-gray-500  rounded-lg focus:border-orange-500 focus:outline-none bg-white' 
                    />
                    
                    {/* add ingredient button */}
                    <button type='button' onClick={addIngredient} className="cursor-pointer w-20 bg-[#6b4226] hover:bg-[#a36234] text-[#fffcf5] font-bold py-3 px-6 rounded-lg mt-3 transition ease-in-out duration-300">
                        Add
                    </button>

                    {/* remove ingredient button */}
                    <button type='button' onClick={() => removeIngredient(index)} className="cursor-pointer w-28 bg-[#6b4226] hover:bg-[#a36234] text-[#fffcf5] font-bold py-3 px-6 rounded-lg mt-3 transition ease-in-out duration-300">
                        Remove
                    </button>
                
                </div >
            ))}
                
        </div>
    </form>
  )
}
