import React, { useState } from 'react'
import { RecipeContext } from './RecipeContext'

export default function RecipeProvider({children}) {

    const [recipe, setRecipe] = useState({
        name: "",
        category: "",
        description: "",
        image: "",  
        number_of_servings:"",
        ingredients_used: [{name: "", quantity: ""}],  
        steps: [""]
    })


  return (
    <RecipeContext.Provider value={{recipe, setRecipe}}>
        {children}
    </RecipeContext.Provider>
  )
}
