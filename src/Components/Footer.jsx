import React from 'react'

function Footer() {
  return (
    <div className='mt-30 p-2 md:p-6 w-11/12 mx-auto '>
      <div className='flex flex-col space-y-12 md:space-y-0 md:flex-row w-full'>
        <div className='w-full md:w-[50%] p-'>
            <div className='font-bold text-xl'>
                Interview<span className='text-sky-600'>Jam</span>
            </div>

            <div className='text-3xl md:text-4xl mt-4 font-semibold text-sky-700'>
              Crack Interviews, Land Jobs Faster
            </div>

            <div className='text-neutral-400 mt-2 md:mt-4'>Interview with confidence everytime!</div>
        </div>


        <div className='w-full md:w-[50%] grid  grid-cols-4'>

          <div className=''>
            <div className='text-neutral-400'>Products</div>

            <div className='flex flex-col text-sm space-y-1 cursor-pointer mt-4 text-neutral-600'>
              <div>InterviewJam</div>

              <div>InterviewJam+</div>
            </div>
          </div>

          <div className=''>
            <div className='text-neutral-400 '>Support</div>
            <div className='mt-4 text-sm text-neutral-600 cursor-pointer'>Contact</div>
          </div>

          <div className=''>
            <div className='text-neutral-400 '>Company</div>
            <div className='mt-4 text-sm cursor-pointer text-neutral-600'>About</div>
          </div>

          <div className=''>
            <div className='text-neutral-400'>Legal</div>
            <div className='mt-4 flex flex-col space-y-1 text-sm cursor-pointer text-neutral-600'>
              <div>Privacy Policy</div>
              <div>Terms and Conditions</div>
              <div>Lisencing</div>
              <div>Customer Policy</div>
              <div>Notices</div>
            </div>
          </div>



        </div>
      </div>

      <div className='w-full mt-8 text-center'>
          Inc @2025❤️, All rights reserved.
      </div>
    </div>
  )
}

export default Footer