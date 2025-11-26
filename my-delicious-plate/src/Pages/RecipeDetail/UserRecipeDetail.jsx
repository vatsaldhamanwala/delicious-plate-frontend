import React from 'react'
import { useRecipe } from '../../context/RecipeContext/RecipeContext'

export default function UserRecipeDetail() {

  const {recipe} = useRecipe()
  

  return (
    <div className='px-20'>
   
      {/* <div className="max-w-3xl bg-white border p-6 rounded-2xl"> */}
        {/* recipe image */}
        <div htmlFor="image" className=' mt-10 w-auto object-cover rounded-lg bg-gray-300'>
            {recipe.image ? (
            <img src={recipe.image} />
        ): (<span className="text-gray-500 text-3xl py-25 flex align-middle justify-center ">👤</span>)}
        </div>

        <h1 className='text-3xl mt-6 font-bold'> {recipe.name}</h1>

        {/* recipe description */}
        <h2 className='text-2xl mt-6 font-semibold' >Recipe Description</h2>
        <p className=' mt-2 font-normal' >{recipe.description}</p>


        {/* recipe ingredient  */}
        <div className='text-xl mt-6 font-bold border-gray-400 px-3 border rounded-lg max-w-fit' >Ingredients
          <ul>
            {recipe.ingredients_used.map((ingredient, index)=>(
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
              <strong>{index + 1}.</strong> {step}
            </li>
          ))}
        </ol>
      {/* </div> */}

    </div>
  )
}
