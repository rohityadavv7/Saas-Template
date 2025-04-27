import React from 'react'
import chromeImg from "../assets/chrome.png"
import party from "../assets/party-popper.png"

function Hero() {
  return (
    <div className='w-[97%] mx-auto rounded-2xl h-screen relative font-["Neue_Montreal"] flex flex-col items-center 
    bg-[linear-gradient(#e5e7eb_1px,transparent_1px),linear-gradient(90deg,#e5e7eb_1px,transparent_1px)] 
    [background-size:16px_16px]
    [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#fff_70%,transparent_150%)]'>
        
        <div className='h-80 w-80 rounded-full absolute -left-60 bottom-10 blur-3xl  bg-[#1C71F2]'></div>
        <div className='h-80 w-80 rounded-full absolute -right-66 bottom-30 blur-3xl  bg-[#1C71F2]'></div>

        <div className='h-[40rem] w-[40rem] z-10 rounded-full absolute -right-58 -bottom-88   bg-[#1C71F2]/10'></div>

        <div className='h-[30rem] w-[30rem] z-10 rounded-full absolute  -right-50 -bottom-88  bg-[#1C71F2]/20'></div>


        
        {/* Navbar */}

        <div className='flex w-[80%] md:w-[60%] items-center font-["Grenette"] mt-8 bg-white p-2 md:px-8 py-1 md:py-4 rounded-3xl shadow-2xl shadow-[#B8D3FE] md:justify-between mx-auto'>
            <div className='font-bold'>
                Interview<span className='text-sky-600'>Jam</span>
            </div>

            <div className='flex opacity-0 md:opacity-100  cursor-pointer font-["Grenette"] gap-6 items-center text-md'>
                {
                    ["Home","How it wokrs?","Resources","Get Started"].map((ele,index) => (
                        index == 3?
                        (<button className='cursor-pointer px-6 py-2 rounded-xl bg-[#1B7AEE] text-white'>{ele}</button>)
                        :
                        ( <a className='opacity-0 md:opacity-100'
                            key={index}
                            >{ele}</a>)
                    ))
                }
            </div>
        </div>

        {/* Main */}

        <div className='flex w-full overflow-hidden flex-col space-y-4 items-center'>
            {/* Banner */}
            <div className=' mt-16 border-[0.1px] px-1 md:px-3  bg-white rounded-2xl mx-auto gap-2 items-center justify-center   flex '>
                <div className='bg-[#1C71F2] text-white text-xs px-3 p-1 rounded-2xl'>31%</div>
                <div className='py-1 flex gap-2 items-center'>increased AOV value <img src={party} height={20} width={20}/></div>
            </div>

            {/* Text */}
            <div className='mt-4 flex flex-col items-center text-4xl md:text-6xl text-black'>
                <div>Ace your Interviews, Land</div>
                <div>Your Dream Job, <span className='italic font-["Grenette"] tracking-tighter font-light'>Faster</span></div>

                <div className=' text-sm w-[80%] md:w-[60%] md:text-lg text-neutral-500 mt-4 leading-none text-center'>
                    A Comprehensive, AI-Enabled, Platform for job Seekers to Accelerate
                    Interview Preparation and Land their Dream Job
                </div>
            </div>

            {/* Buttons */}
            <div className='flex mt-10 md:mt-4 gap-8 w-full md:w-[70%] items-center justify-center mx-auto '>
                <div className='relative'>
                   
                    <button className='inset-0 absolute blur-sm bg-[#1C71F2] rounded-2xl'></button>

                    <button className=' px-4 md:px-6 py-2 text-sm relative z-10 rounded-2xl text-white bg-[#1E7AE7]'>
                        Get Started
                    </button>

                    
                </div>

                <button className='px-4 gap-2 py-2 hover:scale-105 transition-all duration-300 shadow-2xl flex bg-white text-[#1C71F2] tracking-wider'>
                    <span className='font-bold flex items-center gap-2'><img height={20} width={20} src={chromeImg}/>InterviewJam</span>
                     for Chrome
                </button>
            </div>

            {/* template-box */}

            <div className='w-[95%]  md:w-[70%] shadow-2xl z-20 bg-white h-70 rounded-2xl mt-8'>

                <div className='flex w-11/12 items-center mt-8 bg-white md:px-8 md:py-4 rounded-3xl shadow-2xl shadow-[#B8D3FE] justify-between mx-auto'>
                        <div className='font-bold'>
                            interview<span className='text-sky-600'>Jam</span>
                        </div>

                        <div className='flex gap-6 items-center opacity-0 md:opacity-100 text-xs md:text-md'>
                            {
                                ["Home","How it wokrs?","Resources","Get Started"].map((ele,index) => (
                                    
                                    ( <a className=''
                                        key={index}
                                        >{ele}</a>)
                                ))
                            }
                        </div>
                </div>

                <div className='mt-10 font-["Grenette"] text-xl md:text-2xl w-11/12 mx-auto'>
                    Choose one of the Template below
                </div>

                <div className='w-11/12 text-sm mx-auto mt-1 text-neutral-400'>
                    we are constantly adding more templates
                </div>

                <div className='w-11/12 mx-auto flex mt-6  gap-4'>
                    <div className=' border-[0.1px] text-xs rounded-xl px-2 md:px-4 py-1'>
                        Choose category
                    </div>

                    <div className=' border-[0.1px] w-40 rounded-xl text-xs px-2 md:px-4 py-1'>
                        Search
                    </div>
                </div>

                <div className='w-full grid gap-4 grid-cols-3 mt-6'>
                        <div className=' border-neutral-400 rounded-2xl p-3 border-[0.01px]'>
                            <span className='rounded-2xl w-[60%] bg-sky-300 text-black p-1 text-xs'>plus+</span>

                            <div className='text-md w-full'>Tell me about Yourself?</div>
                        </div>

                        <div className=' border-neutral-400 rounded-2xl p-3 border-[0.01px]'>
                            <span className='rounded-2xl w-[60%] bg-sky-300 text-black p-1 text-xs'>plus+</span>

                            <div className='text-md w-full'>projects?</div>
                        </div>
                        <div className=' border-neutral-400 rounded-2xl p-3 border-[0.01px]'>
                            <span className='rounded-2xl w-[60%] bg-sky-300 text-black p-1 text-xs'>plus+</span>

                            <div className='text-md w-full'>your strengths?</div>
                        </div>
                            
                        
                </div>

            </div>

            
        </div>
    </div>
  )
}

export default Hero