import React, { useState } from 'react'
import { RecipeContext } from './RecipeContext'

export default function RecipeProvider({children}) {

    // post a single recipe 
    const [recipe, setRecipe] = useState({
        name: "",
        category: "",
        description: "",
        image: "",  
        number_of_servings:"",
        ingredients_used: [{name: "", quantity: ""}],  
        steps: [""]
    })

    // list all posted recipes
    const [recipes, setRecipes] = useState([])


  return (
    <RecipeContext.Provider value={{recipe, setRecipe, recipes, setRecipes}}>
        {children}
    </RecipeContext.Provider>
  )
}
