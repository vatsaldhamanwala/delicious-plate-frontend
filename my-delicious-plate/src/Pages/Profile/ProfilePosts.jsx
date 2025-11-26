import { Icon } from '@iconify/react'
import React from 'react'
import { useRecipe } from '../../context/RecipeContext/RecipeContext'
import { NavLink } from 'react-router-dom'

export default function ProfilePosts() {

  const {recipes, setRecipe} = useRecipe()


  return (
    <div className="grid gap-1 object-center sm:grid-cols md:grid-cols-4 px-30">

      {recipes.length === 0 ? (
        <p className="text-gray-400 text-center w-full py-10">
          No recipes posted yet.
        </p>
      ):(
        recipes.map((item, index) => (
          <NavLink key={index} to='/user-recipe-detail' onClick={() => setRecipe(item)} >
              <img src = {item.image} alt={item.name} className='object-center mt-6'/>
          </NavLink>
            
        ))
      )}
      
    </div>
  )
}
