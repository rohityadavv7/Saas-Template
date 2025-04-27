import React from 'react'
import chekcbox from "../assets/check.png"

function FeatureSection() {
  return (
    <div className=' w-11/12 md:w-10/12 mt-20 md:mt-10  md:px-10 mx-auto font-["Grenette"]'>
        
        <div className='flex  w-full border-b-[0.1px] border-neutral-500 pb-20 md:pb-0 md:border-b-0 flex-col space-y-12 md:space-y-0 md:flex-row md:gap-10 md:justify-around md:px-8'>

            <div className=' w-full md:w-[40%] border-[0.01px] rounded-2xl md:gap-10 p-4 md:border-none'>

                <div className=' text-3xl md:text-4xl text-sky-800 font-semibold'>Find Your Perfect Job Match</div>

                <div className='mt-4 md:mt-6 text-neutral-500 leading-5'>
                    Tired of sitting through irrelevant jobs? Let AI match you to the perfect opportunities 
                    based on your skills and goals, saving time and opening doors to your dream career.
                </div>

                <div className=' mt-6 md:mt-15 pb-4 flex flex-col space-y-1 md:space-y-6'>
                    <div className='flex gap-4 items-center'>
                        <img src={chekcbox} height={30} width={30}/>
                        <p>Receive Tailored job reccomendations</p>
                    </div>

                    <div className='flex gap-4 items-center'>
                        <img src={chekcbox} height={30} width={30}/>
                        <p>Match with relevant roles instantly</p>
                    </div>

                    <div className='flex gap-4 items-center'>
                        <img src={chekcbox} height={30} width={30}/>
                        <p>Start your seach efficiantly</p>
                    </div>
                </div>
            </div>


            <div className=' w-full md:w-[50%] mt-4 h-[19rem] md:h-[25rem] border-[0.1px] md:border-none
            bg-[linear-gradient(#e5e7eb_1px,transparent_1px),linear-gradient(90deg,#e5e7eb_1px,transparent_1px)] 
            [background-size:26px_26px]
            [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#fff_70%,transparent_150%)]
            relative overflow-hidden  rounded-2xl bg-sky-50/70'>
                <div className='absolute h-50 w-50 rounded-full blur-3xl  -right-20 bg-[#1C71F2]/30'></div>
                    
            </div>


        </div>

        <div className='flex w-full border-b-[0.1px] border-neutral-500 pb-20 md:pb-0 md:border-b-0  flex-col space-y-12 md:space-y-0 md:flex-row md:justify-around md:gap-10  md:px-8 mt-18 md:mt-25'>

            <div className='w-full md:w-[50%] mt-4 h-[19rem] md:h-[25rem] border-[0.1px] md:border-none  relative
             bg-[linear-gradient(#e5e7eb_1px,transparent_1px),linear-gradient(90deg,#e5e7eb_1px,transparent_1px)] 
            [background-size:26px_26px]
            [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#fff_70%,transparent_150%)]
                    rounded-2xl bg-sky-50/70'>
                    <div className='absolute h-50 w-50 rounded-full blur-3xl  -right-20 bg-[#1C71F2]/30'></div>

                    <div className='absolute h-50 w-50 rounded-full blur-3xl  -left-20 bottom-0 bg-[#1C71F2]/60'></div>

            </div>

            <div className='w-full md:w-[40%] border-[0.01px] rounded-2xl p-4 md:border-none pl-6'>

                <div className=' text-3xl md:text-4xl text-sky-800 font-semibold'>Seamless Aplication Tracking</div>

                <div className='mt-6 text-neutral-500 leading-5'>
                    Tired of sitting through irrelevant jobs? Let AI match you to the perfect opportunities 
                    based on your skills and goals, saving time and opening doors to your dream career.
                </div>

                <div className=' mt-8 md:mt-15 pb-4 flex flex-col space-y-2 md:space-y-6'>
                    <div className='flex gap-4 items-center'>
                        <img src={chekcbox} height={30} width={30}/>
                        <p>Receive Tailored job reccomendations</p>
                    </div>

                    <div className='flex gap-4 items-center'>
                        <img src={chekcbox} height={30} width={30}/>
                        <p>Match with relevant roles instantly</p>
                    </div>

                    <div className='flex gap-4 items-center'>
                        <img src={chekcbox} height={30} width={30}/>
                        <p>Start your seach efficiantly</p>
                    </div>
                </div>
            </div>


        </div>

        <div className='flex w-full flex-col border-b-[0.1px] border-neutral-500 pb-20 md:pb-0 md:border-b-0 space-y-12 md:space-y-0 md:flex-row md:justify-around md:gap-10  md:px-8 mt-20 md:mt-25'>

            <div className='w-full md:w-[40%] border-[0.01px] rounded-2xl p-4 md:border-none '>

                <div className=' text-3xl md:text-4xl text-sky-800 font-semibold'>Unlock Tailored Interview Insights</div>

                <div className='mt-6 text-neutral-500 leading-5'>
                    Tired of sitting through irrelevant jobs? Let AI match you to the perfect opportunities 
                    based on your skills and goals, saving time and opening doors to your dream career.
                </div>

                <div className=' mt-8 md:mt-15 pb-4 flex flex-col space-y-2 md:space-y-6'>
                    <div className='flex gap-4 items-center'>
                        <img src={chekcbox} height={30} width={30}/>
                        <p>Receive Tailored job reccomendations</p>
                    </div>

                    <div className='flex gap-4 items-center'>
                        <img src={chekcbox} height={30} width={30}/>
                        <p>Match with relevant roles instantly</p>
                    </div>

                    <div className='flex gap-4 items-center'>
                        <img src={chekcbox} height={30} width={30}/>
                        <p>Start your seach efficiantly</p>
                    </div>
                </div>
            </div>


            <div className='w-full h-[19rem] md:h-[25rem] md:w-[50%] relative overflow-hidden 
             bg-[linear-gradient(#e5e7eb_1px,transparent_1px),linear-gradient(90deg,#e5e7eb_1px,transparent_1px)] 
            [background-size:26px_26px]
            [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#fff_70%,transparent_150%)]
             rounded-2xl bg-sky-50/70'>
                <div className='absolute h-50 w-50 rounded-full blur-3xl  -right-20 bg-[#1C71F2]/30'></div>

            </div>


        </div>

        
    </div>
  )
}

export default FeatureSection