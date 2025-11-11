import React from 'react'

export default function SearchBar() {
  return (
    <>
      <div className='flex overflow-hidden w-full max-w-2xl mx-auto mb-4 mt-8 py-3 px-2 '>
        <input type="text" placeholder='Find Recipes' className='outline-none w-full py-2 px-8 border-gray-400 border rounded-l-full bg-white' />
        <button className='outline-none text-gray-600 hover:text-gray-800 border border-gray-400 px-5 py-1 rounded-r-full bg-white cursor-pointer' >Categories</button>
      </div>
    </>
    
  )
}