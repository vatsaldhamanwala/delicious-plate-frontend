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
                <div className='relative rounded-lg max-w-lg mt-4'>
                    <label className='block font-semibold text-base text-gray-700'>
                    Diet Preference
                    </label>
    
                    <div className='flex flex-wrap gap-2 mt-2 mb-2'>
                        {recipe.diet_preference.map((item, index) => (
                            <span key={index} className="bg-orange-200 text-orange-900 px-3 py-1 rounded-full flex items-center gap-2">
                                {item}

                                <button 
                                    type='button' 
                                    className='text-sm font-bold cursor-pointer'
                                    onClick={()=> setRecipe({...recipe, diet_preference: recipe.diet_preference.filter((value)=> value !==item)})}
                                >
                                    x
                                </button>
                            </span>
                        ))}

                    </div>

                    {/* drop down selection menu */}
                    <select
                        id= 'diet_preference'
                        name='diet_preference'
                        onChange={(event) => {
                            const dietPreferenceValue = event.target.value

                            if(!recipe.diet_preference.includes(dietPreferenceValue)){
                                setRecipe({...recipe, diet_preference: [...recipe.diet_preference, dietPreferenceValue]})
                            }
                        }}
                        className='outline-none w-full py-2 px-4 border-gray-400 border rounded-lg'
                    >
                        <option value='' disabled>
                            Select your diet preference
                        </option>
                    
                        <option value="Veg">Veg</option>
                        <option value="Non-Veg">Non-Veg</option>
                        <option value="Healthy">Healthy</option>
                        <option value="Beverages">Beverages</option>
                        <option value="Vegan">Vegan</option>
                    </select>
                </div>
            </div>

            {/* recipe dish type field */}
            <div className='w-full'>
                <div className='relative rounded-lg max-w-lg mt-4 '>
                    <label htmlFor="dish_type" className='block font-semibold text-base text-gray-700'> Dish Type </label>

                    {/* selected items */}
                    <div className='flex flex-wrap gap-2 mt-2 mb-2'>
                        {recipe.dish_type.map((item, index) => (
                            <span key={index} className="bg-orange-200 text-orange-900 px-3 py-1 rounded-full flex items-center gap-2">
                                {item}

                                <button 
                                    type='button' 
                                    className='text-sm font-bold cursor-pointer'
                                    onClick={()=> setRecipe({...recipe, dish_type: recipe.dish_type.filter((value)=> value !==item)})}
                                >
                                    x
                                </button>
                            </span>
                        ))}

                    </div>

                    {/* drop down selection menu */}
                    <select 
                        id='dish_type' 
                        name='dish_type'
                        onChange={(event) => {
                            const dishTypeValue = event.target.value

                            if(!recipe.dish_type.includes(dishTypeValue)){
                                setRecipe({...recipe, dish_type: [...recipe.dish_type, dishTypeValue]})
                            }
                        }} 
                        className='outline-none w-full py-2 px-4 border-gray-400 border placeholder-gray-500  rounded-lg focus:border-orange-500 focus:outline-none bg-white' 
                    >
                        <option value='' disabled>
                            Select your dish type
                        </option>

                        <option value='Burger'>Burger</option>
                        <option value='Pizza'>Pizza</option>
                        <option value='Pasta'>Pasta</option>
                        <option value='Chicken'>Chicken</option>
                        <option value='Sandwich'>Sandwich</option>
                        <option value='Panner'>Panner</option>
                        <option value='Salad'>Salad</option>
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

                    {/* selected items */}
                    <div className='flex flex-wrap gap-2 mt-2 mb-2'>
                        {recipe.meal_time.map((item, index) => (
                            <span key={index} className="bg-orange-200 text-orange-900 px-3 py-1 rounded-full flex items-center gap-2">
                                {item}

                                <button 
                                    type='button' 
                                    className='text-sm font-bold cursor-pointer'
                                    onClick={()=> setRecipe({...recipe, meal_time: recipe.meal_time.filter((value)=> value !==item)})}
                                >
                                    x
                                </button>
                            </span>
                        ))}

                    </div>

                    {/* drop down selection menu */}
                    <select 
                        id='meal_time' 
                        name='meal_time'
                        onChange={(event) => {
                            const mealTimeValue = event.target.value

                            if(!recipe.meal_time.includes(mealTimeValue)){
                                setRecipe({...recipe, meal_time: [...recipe.meal_time, mealTimeValue]})
                            }
                        }} 
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
                        {/* {recipe.description.length}/300 */}
                    </span>
                </div >
            </div>

            {/* save and continue button link */}
            <div className=' rounded-lg  mt-12'>
                <NavLink to='/delicious-plate/post-recipe/media' className="px-20 cursor-pointer bg-[#6b4226] hover:bg-[#a36234] text-[#fffcf5] font-bold py-3 rounded-lg mt-3 transition ease-in-out duration-300">
                    Save & Continue
                </NavLink>
            </div >
        </form>
    </div>
  )
}