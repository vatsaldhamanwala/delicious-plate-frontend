import React from 'react'
import { useRecipe } from '../../context/RecipeContext/RecipeContext'
import ProgressBar from '../../components/ProgressBar/ProgressBar'
import { NavLink } from 'react-router-dom'

export default function Review() {

  const {recipe, setRecipe, setRecipes} = useRecipe()

  const saveRecipe = () =>{
    setRecipes(prev => [...prev, recipe])

    alert("your recipe is successfully posted !!")

    setRecipe({
      recipe_name: "",
      diet_preference: [""],
      dish_type: [""],
      meal_time: [""],
      description: "",
      recipe_photo: "",  
      number_of_servings:"",
      ingredients: [{name: "", quantity: ""}],  
      steps: [{description: ""}]
    })
  }

  return (

    <div className='px-20'>
      <h1 className="text-4xl font-bold mb-6 mt-2 text-center text-[#6b4226]">Check All Your Recipe Details</h1>
      <hr className="flex-grow border-gray-300" />

      {/* progress bar */}
      <ProgressBar currentStep={4}/>

      <h2 className=" m-4 text-50 font-normal mb-6 text-[#6b4226]">Nearly There! Check Everything's Correct</h2>
   
      <div className="max-w-3xl bg-white border p-6 rounded-2xl">
        {/* recipe image */}
        <div htmlFor="image" className='w-auto object-cover rounded-lg bg-gray-300'>
            {recipe.image ? (
            <img src={recipe.image} />
        ): (<span className="text-gray-500 text-3xl py-25 flex align-middle justify-center ">👤</span>)}
        </div>

        {/* recipe name */}
        <h1 className='text-2xl mt-6 font-bold'> {recipe.recipe_name}</h1>
        
        <h1 className='text-2xl mt-6 font-medium'> Diet Preference: <span className='font-normal'> {recipe.diet_preference} </span> </h1>
        <h1 className='text-2xl mt-6 font-medium'> Dish Type: <span className='font-normal'> {recipe.dish_type} </span> </h1>
        <h1 className='text-2xl mt-6 font-medium'> Meal Time: <span className='font-normal'> {recipe.meal_time} </span></h1>


        {/* recipe description */}
        <h2 className='text-2xl mt-6 font-semibold' >Recipe Description</h2>
        <p className=' mt-2 font-normal' >{recipe.description}</p>


        {/* recipe ingredient  */}
        <div className='text-xl mt-6 font-bold border-gray-400 px-3 border rounded-lg max-w-fit' >Ingredients
          <ul>
            {recipe.ingredients.map((ingredient, index)=>(
              <li key={index} className='flex justify-between mt-2'>
                <span className='font-normal'>{ingredient.name}</span>
                <span className='font-light'>{ingredient.quantity}</span>
              </li>
            ))}
          </ul>
          <hr className="flex-grow border-gray-300 mt-2" />
          <h1 className='mt-4 font-semibold' >Number of Servings: <span className='font-normal'>{recipe.number_of_servings}</span> </h1>
        </div>
        
        

        {/* recipe steps  */}
        <h2 className='text-2xl mt-6 font-semibold' >How to Cook </h2>
        <ol className='mt-3 text-lg'>
          {recipe.steps.map((step, index)=>(
            <li key={index}>
              <strong>{index + 1}.</strong> {step.description}
            </li>
          ))}
        </ol>
      </div>

      {/* buttons */}
      <div className=' rounded-lg space-x-3 mt-12'>
        {/* go back to ingredients-and-steps page */}
        <NavLink to='/delicious-plate/post-recipe/ingredients-and-steps' className="px-20 cursor-pointer border border-[#6b4226] text-[#6b4226] font-bold py-3 rounded-lg mt-3 transition ease-in-out duration-300">
            Go Back
        </NavLink>

        {/* go to review */}
        {/* <NavLink to='/post-recipe/review' className="px-20 cursor-pointer bg-[#6b4226] hover:bg-[#a36234] text-[#fffcf5] font-bold py-3 rounded-lg mt-3 transition ease-in-out duration-300">
            Post Recipe
        </NavLink> */}

        <button type='button' onClick={saveRecipe} className='px-20 cursor-pointer bg-[#6b4226] hover:bg-[#a36234] text-[#fffcf5] font-bold py-3 rounded-lg mt-3 transition ease-in-out duration-300'>
            Post Recipe
        </button>
      </div >

    </div>
  )
}
