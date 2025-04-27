import React, { useState } from 'react'
import { TfiArrowCircleDown } from "react-icons/tfi";
import { TfiArrowCircleUp } from "react-icons/tfi";
import {motion} from "motion/react"

function Accordian({title, description}) {
  const [isOpen, setIsOpen] = useState(false)

  const accordianVariants = {
    open:{
      height:"6.5rem"
    },
    close:{
      height:"3.5rem"
    }
  }
  return (
    <motion.div 
    initial={false}
    animate={isOpen? "open":"close"}
    variants={accordianVariants}
    className={`w-full p-2 md:p-4 rounded-lg ${isOpen? "h-[6.5rem]":"h-[3.5rem]"} border-[0.1px] border-neutral-400`}>
        
        <div className='text-lg flex justify-between items-center text-sky-700 font-semibold'>{title} 
          <button onClick={()=> setIsOpen((prev) => !prev)}>{isOpen? (<TfiArrowCircleUp />) : (<TfiArrowCircleDown/>)}</button>
        </div>

        <div className={`mt-2 ${isOpen ? "opacity-100" : "opacity-0"} transition-all duration-300 text-neutral-400`}>{description}</div>
    </motion.div>
  )
}

export default Accordian