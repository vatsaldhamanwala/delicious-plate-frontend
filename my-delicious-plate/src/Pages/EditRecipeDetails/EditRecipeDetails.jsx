import React from 'react'
import { useRecipe } from '../../context/RecipeContext/RecipeContext'
import Ingredients from '../../components/Ingredients/Ingredients'
import Steps from '../../components/Steps/Steps'
import EditAndSave from '../../components/Buttons/EditAndSave'

export default function EditRecipeDetails() {

    const {recipe, setRecipe} = useRecipe()

  return (
    <div>
        <form className='px-20'>
            <h1 className="text-4xl font-bold mb-6 mt-2 text-center text-[#6b4226]">Edit Recipe Details</h1>
            <hr className="flex-grow border-gray-300" />

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

            <EditAndSave/>
        </form>
    </div>
  )
}

