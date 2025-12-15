import React from 'react'
import { useRecipe } from '../../context/RecipeContext/RecipeContext'
import SearchBar from '../../components/SearchBar/SearchBar'
import { NavLink } from 'react-router-dom'
import RecipeCard from '../../components/RecipeCard/RecipeCard'

export default function LoginUserHomePage() {

    const {recipes ,setRecipe} = useRecipe()
    
  return (
    <>
        <div className='py-8 bg-[#fbfae8]  '>
            <h1 className='text-4xl text-center text-[#6b4226]'> Welcome to Delicious Plate </h1>
            <SearchBar />
        
        </div>

        <div className='flex-1 md:px-12 '>
            {/* Veg section */}
            <div className='py-10' >
                <h2 className='text-[#6b4226] text-3xl font-bold px-3 '> Recipes </h2>

                <div className='grid grid-cols-3 sm:grid-cols-1 md:grid-cols-5 gap-6'>
                    {recipes.map((item, index)=>(
                        <NavLink key={index} to='/recipe-detail' onClick={setRecipe(item)}>
                            <RecipeCard recipe={item} />
                        </NavLink>
                    ))}
                   
                </div>
            </div>
        </div>
    </>
  )
}
