import React from 'react'
import PricingImg from "../assets/prices.jpg"

function CTA() {
  return (
    <div className='w-11/12 flex flex-col md:flex-row p-6 md:p-8 mt-30 mx-auto rounded-xl bg-[#1C71F2]'>

      <div className='w-full md:w-[50%] flex pb-15 flex-col '>
          <div className='text-3xl md:text-5xl text-white mt-10 md:mt-20'>
            Ready to Ace your next <br/> Interview?
          </div>

          <div className='mt-6 text-neutral-300 w-full md:w-[80%]'>
            Its never too late for anything, so just join our family and make your Interview preparation Fun
            and effective at the same time. If you have any queries, do reach us out! we will be more than happy to assist you. 
          </div>

          <div className='px-8 mt-6 py-2 rounded-2xl w-[45%] md:w-[25%] text-sky-600 bg-white font-semibold'>
            <button>Get Started</button>
          </div>
      </div>

      <div className='w-full md:w-[50%] overflow-hidden rounded-2xl relative'>
      

        <div className='absolute h-[22rem] rounded-2xl bottom-0 -right-8 w-[30rem] bg-white'>
          <img src={PricingImg} className='rounded-2xl'/>
        </div>

      </div>

    </div>
  )
}

export default CTA