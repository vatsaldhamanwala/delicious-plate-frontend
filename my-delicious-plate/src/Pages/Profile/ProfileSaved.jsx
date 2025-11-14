import { Icon } from '@iconify/react'
import React from 'react'

export default function ProfileSaved() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 px-24">
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="flex flex-col items-center">
          
          {/* Collection Box */}
          <div className="w-64 h-64 bg-gray-200 flex items-center justify-center">
            <Icon 
              icon="material-symbols:image-sharp" 
              width="70" 
              height="70" 
              className="text-gray-400"
            />
          </div>

          {/* Name */}
          <p className="mt-3 text-gray-700 text-center font-medium">
            Collection name
          </p>
        </div>
      ))}
    </div>
    
  )
}
