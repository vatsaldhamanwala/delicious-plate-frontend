import React from 'react'
import SearchBar from '../../components/SearchBar/SearchBar'
import RecipeCard from '../../components/RecipeCard/RecipeCard'



export default function Home() {
  return (
    <>
        <div className='py-8 bg-[#fbfae8]  '>
            <h1 className='text-4xl text-center text-[#6b4226]'> Welcome to Delicious Plate </h1>
            <SearchBar />
        
        </div>

        <div className='flex-1 md:px-12 '>
            {/* Veg section */}
            <div className='py-10' >
                <h2 className='text-[#6b4226] text-3xl font-bold px-3 '> Popular Recipes In Veg  </h2>

                <div className='grid grid-cols-3 sm:grid-cols-1 md:grid-cols-5 gap-6'>
                    <RecipeCard />
                    <RecipeCard />
                    <RecipeCard />
                    <RecipeCard />
                    <RecipeCard />
                </div>
            </div>

            {/* Non-veg section */}
            <div className='py-14' >
                <h2 className='text-[#6b4226] text-3xl font-bold px-3 '> Popular Recipes In Non-Veg  </h2>

                <div className='grid grid-cols-3 sm:grid-cols-1 md:grid-cols-5 gap-6'>
                    <RecipeCard />
                    <RecipeCard />
                    <RecipeCard />
                    <RecipeCard />
                    <RecipeCard />
                </div>
            </div>

            <div className='py-14' >
                <h2 className='text-[#6b4226] text-3xl font-bold px-3 '> Popular Recipes In Non-Veg  </h2>

                <div className='grid grid-cols-3 sm:grid-cols-1 md:grid-cols-5 gap-6'>
                    <RecipeCard />
                    <RecipeCard />
                    <RecipeCard />
                    <RecipeCard />
                    <RecipeCard />
                </div>
            </div>

        </div>
    </>
    

  )
}
