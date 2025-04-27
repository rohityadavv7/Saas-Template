import React from 'react'
import Card from './Card'
import {easeInOut, easeOut, motion} from "motion/react"

function Testimonials() {
  return (
    <div className='w-11/12 mx-auto flex mt-20  md:mt-30 flex-col items-center justify-center'>
        <div className='font-semibold font-["Grenette"] md:font-bold text-2xl'>Testimonials</div>

        <div className='mt-8 md:mt-4 text-3xl md:text-4xl text-center md:text-left text-sky-700 font-["Grenette"]'>
            People can't stop talking about InterviewJam
        </div>

        <div className='mt-4 md:mt-2 text-md md:text-lg text-center md:ext-left text-neutral-500'>
            Real-Stories from real people, see how InterviewJam helped business and creators level up!
        </div>

        <div className='mt-18 flex s relative overflow-hidden gap-6  justify-center items-center  '>
                <div className='absolute h-70 w-70 rounded-xl bg-white  blur-2xl z-20 -left-40'></div>
                <div className='absolute h-70 w-70 rounded-xl bg-white  blur-2xl z-20 -right-40'></div>
            
                <div className='  mx-auto gap-3 p-8 flex overflow-hidden'>
                <motion.div 
                initial={{x:0}}
                animate={{x:"-100%"}}
                transition={{duration:7.4, ease:'linear', repeat:Infinity}}
                className='shrink-0 w-[30%]'><Card/></motion.div>
                
                <motion.div
                initial={{x:0}}
                animate={{x:"-100%"}}
                transition={{duration:7.4, ease:'linear', repeat:Infinity}}
                 className='shrink-0 w-[30%]'><Card/></motion.div>
                
                <motion.div 
                initial={{x:0}}
                animate={{x:"-100%"}}
                transition={{duration:7.4, ease:'linear', repeat:Infinity}}
                className='shrink-0 w-[30%]'><Card/></motion.div>
                
                <motion.div
                initial={{x:0}}
                animate={{x:"-100%"}}
                transition={{duration:7.4, ease:'linear', repeat:Infinity}}
                 className='shrink-0 w-[30%]'><Card/></motion.div>

                <motion.div
                initial={{x:0}}
                animate={{x:"-100%"}}
                transition={{duration:7.4, ease:'linear', repeat:Infinity}}
                 className='shrink-0 w-[30%]'><Card/></motion.div>

                <motion.div
                initial={{x:0}}
                animate={{x:"-100%"}}
                transition={{duration:7.4, ease:'linear', repeat:Infinity}}
                 className='shrink-0 w-[30%]'><Card/></motion.div>
                </div>
                    
            
        </div>
    </div>
  )
}

export default Testimonials