import React from 'react'
import logo1 from "../assets/logo1.jpg"
import logo2 from "../assets/logo2.png"
import logo3 from "../assets/logo3.jpg"
import logo4 from "../assets/logo4.png"
import logo5 from "../assets/logo5.png"
import {easeInOut, motion} from "motion/react"

function Marquee() {
  return (
    <div className='w-11/12 mx-auto flex flex-col items-center justify-center mt-10 md:mt-20 md:pb-10'>
        <div className='text-3xl text-sky-700 font-["Grenette"]'>
            Our Trusted Partners
        </div>

        <div className=' mt-4 relative w-[60%] shrink-0 overflow-hidden flex items-center gap-'>
        <div className='absolute h-70 w-70 rounded-xl bg-white  blur-2xl z-20 -left-50'></div>
        <div className='absolute h-70 w-70 rounded-xl bg-white  blur-2xl z-20 -right-50'></div>

          <motion.div 
          initial={{x:0, filter:"grayscale(100%)"}}
          animate={{x:"-100%", filter:"grayscale(0%)"}}
          whileHover={{filter:"grayscale(0%)"}}
          transition={{duration:10, ease:"linear", repeat:Infinity}}
          className='flex shrink-0 gap-2 items-center'>
            <motion.div
      
            >
              <img src={logo1} height={150} width={150}/>
            </motion.div>

            <motion.div
        
            >
              <img src={logo2} height={150} width={150}/>
            </motion.div>


            <motion.div
   
            >
              <img src={logo3} height={150} width={150}/>
            </motion.div>

            <motion.div
    
            >
              <img src={logo4} height={150} width={150}/>
            </motion.div>

            <motion.div
  
            >
              <img src={logo5} height={150} width={150}/>
            </motion.div>


          </motion.div>

          <motion.div 
          initial={{x:0}}
          animate={{x:"-100%"}}
          transition={{duration:10, ease:"linear", repeat:Infinity}}
          className='flex  shrink-0 gap-2 items-center'>
            <motion.div
           
            >
              <img src={logo1} height={150} width={150}/>
            </motion.div>

            <motion.div
          
            >
              <img src={logo2} height={150} width={150}/>
            </motion.div>


            <motion.div
         
            >
              <img src={logo3} height={150} width={150}/>
            </motion.div>

            <motion.div
       
            >
              <img src={logo4} height={150} width={150}/>
            </motion.div>

            <motion.div
         
            >
              <img src={logo5} height={150} width={150}/>
            </motion.div>

           

          </motion.div>


        </div>
    </div>
  )
}

export default Marquee