import React, { useState } from 'react'
import { RecipeContext } from './RecipeContext'

export default function RecipeProvider({children}) {

    // post a single recipe 
    const [recipe, setRecipe] = useState({
        recipe_name: "",
        diet_preference: [],
        dish_type: [],
        meal_time: [],
        description: "",
        recipe_photo: "",  
        number_of_servings:"",
        ingredients: [{name: "", quantity: ""}],  
        steps: [{description: ""}]
    })

    // list all posted recipes
    const [recipes, setRecipes] = useState([])


  return (
    <RecipeContext.Provider value={{recipe, setRecipe, recipes, setRecipes}}>
        {children}
    </RecipeContext.Provider>
  )
}
