import React from 'react'
import stars from "../assets/star.png"
import avatar from "../assets/cat.png"

function Card() {
  return (
    <div className=' w-full p-6 pt-4 pb-4 border-[0.1px] group
    hover:scale-105 transition-all duration-300 h-100
     border-neutral-400  space-y-4bg-[linear-gradient(#e5e7eb_1px,transparent_1px),linear-gradient(90deg,#e5e7eb_1px,transparent_1px)] 
            [background-size:26px_26px]
            [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#fff_70%,transparent_300%)]
            relative overflow-hidden  rounded-2xl bg-sky-50/70'>

            <div className='h-50 w-50 absolute rounded-full left-20 blur-3xl -top-30 transition-all duration-300 
            group-hover:opacity-100 opacity-0 bg-[#1C71F2]/40'></div>

           

            <div className='font-semibold text-xl relative z-10'>Testing</div>

            <div className=' flex gap-1 relative z-10 mt-4'>
                <img src={stars} height={20} width={20}/>
                <img src={stars} height={20} width={20}/>
                <img src={stars} height={20} width={20}/>
                <img src={stars} height={20} width={20}/>
                <img src={stars} height={20} width={20}/>
            </div>


            <div className=' mt-6'>
                A truly efficiently built product. loved the intercace and the ease to use the same.
                The layout is easy to get through and the content itself is easy to consume.
                keep up the good work!
                will defiitely reccomned it to more.
            </div>

            <div className='flex mt-6 md:mt-8 gap-4 items-center'>
                <img src={avatar} height={40} width={40}/>
                <div className='flex pt-2 flex-col'>
                    <div className='font-["Grenette"]'>
                        Monkey.D Luffy
                    </div>

                    <div className='text-neutral-400 text-sm md:text-md'>
                        Team Lead, One-Piece Inc.
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Card