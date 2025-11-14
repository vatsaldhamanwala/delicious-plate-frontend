import { Icon } from '@iconify/react'
import React from 'react'

export default function ProfilePosts() {
  return (
    // <div className='w-60 rounded-xl bg-white min-h-[19rem] border border-gray-300 max-w-2xl mx-auto mt-8'>
    //   <div className='flex flex-col py-3 px-1 pb-10 text-[#6b4226] space-y-2'>
    //     <img src='' className='object-center mt-6 animate-pulse' alt='image'/>
    //   </div>
    // </div>
    
    <div className="grid gap-1 object-center sm:grid-cols md:grid-cols-4 px-30">
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="w-60 h-80 overflow-hidden bg-gray-200 flex text-gray-400 items-center justify-center">
          <img className='object-center mt-6'/>
            
          <Icon icon='material-symbols:image-sharp' width="50" height="50"/>
           
        </div>
      ))}
    </div>
  )
}
