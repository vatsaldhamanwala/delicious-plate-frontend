import React from 'react'

export default function ProgressBar({currentStep = 1}) {

    const steps =["Basic Info", "Media", "Ingredients & Steps", "Review"]

  return (
    <div className="w-full mt-6 ">
        <div className='flex items-center justify-between relative '>
            {steps.map((label, index)=>{
                const stepNumber= index +1 
                const isActive= currentStep === stepNumber

                return (
                    <div key={index} className="flex items-center w-full ">

                        <div className={`h-1 w-full ${isActive ? "bg-[#6b4226]" : "bg-gray-300"}`}/>

                        {/* is active tab with circle */}
                        <div className={`w-full rounded-full border-4 text-center align-middle ${isActive ? "border-[#6b4226] bg-[#FFFDD5]":"border-gray-300 bg-gray-100"}`}>

                             {/* label */}
                            <span className={` mt-2 text-sm  ${isActive ? "text-[#6b4226]":"text-black"}`}>
                                {label}
                            </span>
                            
                        </div> 

                        <div className={`h-1 w-full ${isActive ? "bg-[#6b4226]" : "bg-gray-300"}`} />
                    </div>
                )
            })}
        </div>
    </div>
  )
}
