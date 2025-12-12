import React from 'react'
import { useRecipe } from '../../context/RecipeContext/RecipeContext'
import Ingredients from '../../components/Ingredients/Ingredients'
import Steps from '../../components/Steps/Steps'
import EditAndSave from '../../components/Buttons/EditAndSave'

export default function EditRecipeDetails() {

    const {recipe, setRecipe} = useRecipe()

  return (
    <>
        <form className='px-20'>
            <h1 className="text-4xl font-bold mb-6 mt-2 text-center text-[#6b4226]">Edit Recipe Details</h1>
            <hr className="flex-grow border-gray-300" />

            {/* recipe title field */}
            <div className=' rounded-lg w-full max-w-lg mt-8 '>
                <label htmlFor="recipe_name" className='block font-semibold text-base text-gray-700'> Recipe Name </label>
                <input
                    id='recipe_name' 
                    name='recipe_name'
                    required
                    value={recipe.recipe_name} 
                    onChange={(event)=>setRecipe({...recipe ,recipe_name: event.target.value})} 
                    type="text" 
                    placeholder='Enter name of your recipe name' 
                    className='outline-none w-full py-2 px-4 border-gray-400 border placeholder-gray-500  rounded-lg focus:border-orange-500 focus:outline-none bg-white' 
                />
            </div >

            {/* recipe diet preference field */}
            <div className='w-full'>
                <div className='relative rounded-lg max-w-lg mt-4 '>
                    <label htmlFor="diet_preference" className='block font-semibold text-base text-gray-700'> Diet Preference </label>
                    <select 
                        id='diet_preference' 
                        name='diet_preference'
                        value={recipe.diet_preference} 
                        onChange={(event)=>setRecipe({...recipe, diet_preference: event.target.value})} 
                        type="text" 
                        className='outline-none w-full py-2 px-4 border-gray-400 border placeholder-gray-500  rounded-lg focus:border-orange-500 focus:outline-none bg-white' 
                    >
                        <option value='' disabled>
                            Select your diet preference
                        </option>

                        <option value='Veg'>Veg</option>
                        <option value='non-veg'>Non-Veg</option>
                        <option value='Healthy'>Healthy</option>
                        <option value='Beverages'>Beverages</option>
                        <option value='Vegan'>Vegan</option>

                    </select>
                </div >
            </div>

            {/* recipe dish type field */}
            <div className='w-full'>
                <div className='relative rounded-lg max-w-lg mt-4 '>
                    <label htmlFor="dish_type" className='block font-semibold text-base text-gray-700'> Dish Type </label>
                    <select 
                        id='dish_type' 
                        name='dish_type'
                        value={recipe.dish_type} 
                        onChange={(event)=>setRecipe({...recipe, dish_type: event.target.value})} 
                        type="text" 
                        className='outline-none w-full py-2 px-4 border-gray-400 border placeholder-gray-500  rounded-lg focus:border-orange-500 focus:outline-none bg-white' 
                    >
                        <option value='' disabled>
                            Select your dish type
                        </option>

                        <option value='Veg'>Burger</option>
                        <option value='non-veg'>Pizza</option>
                        <option value='Healthy'>Pasta</option>
                        <option value='Beverages'>Chicken</option>
                        <option value='Sandwich'>Sandwich</option>
                        <option value='Vegan'>Panner</option>
                        <option value='Panner'>Salad</option>
                        <option value='Soup'>Soup</option>
                        <option value='Dessert'>Dessert</option>
                        <option value='Tea'>Tea</option>
                        <option value='Soda'>Soda</option>



                    </select>
                </div >
            </div>

            {/* recipe meal time field */}
            <div className='w-full'>
                <div className='relative rounded-lg max-w-lg mt-4 '>
                    <label htmlFor="meal_time" className='block font-semibold text-base text-gray-700'> Meal Time </label>
                    <select 
                        id='meal_time' 
                        name='meal_time'
                        value={recipe.meal_time} 
                        onChange={(event)=>setRecipe({...recipe, meal_time: event.target.value})} 
                        type="text" 
                        className='outline-none w-full py-2 px-4 border-gray-400 border placeholder-gray-500  rounded-lg focus:border-orange-500 focus:outline-none bg-white' 
                    >
                        <option value='' disabled>
                            Select your meal time
                        </option>

                        <option value='Breakfast'>Breakfast</option>
                        <option value='Lunch'>Lunch</option>
                        <option value='Evening'>Evening</option>
                        <option value='Snacks'>Snacks</option>
                        <option value='Dinner'>Dinner</option>
                        <option value='Main-Course'>Main Course</option>
                        <option value='Panner'>Starters</option>

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
    </>
  )
}

