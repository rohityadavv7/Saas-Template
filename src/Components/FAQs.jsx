import React from 'react'
import chromeImg from "../assets/chrome.png"
import Accordian from './Accordian'

function FAQs() {
  return (
    <div className='w-11/12  mx-auto p-4 mt-20 md:mt-30 flex flex-col space-y-12 md:space-y-0 md:flex-row gap-4'>
        <div className='w-full md:w-[50%] pr-10 mr-10'>
            <div className='text-3xl md:text-4xl font-semibold text-sky-700'>Frequently Asked<br/> Questions</div>

            <div className='mt-4 text-neutral-400'>Got a Question? explore our FAQ section to get a clear understanding of what we do and how we leave an impact!</div>

            <button className='px-4 gap-2 py-2 mt-6 shadow-2xl flex bg-[#1C71F2] text-white rounded-2xl tracking-wider'>
                <span className='font-bold flex items-center gap-2'><img height={20} width={20} src={chromeImg}/>InterviewJam</span>
                    for Chrome
            </button>
        </div>

        <div className=' w-full md:w-[50%] flex flex-col space-y-4'>
            <Accordian title={"What is InterviewJam?"} description={"A web app, which helps you to ACE your job interviews!"}/>
            <Accordian title={"What is InterviewJam?"} description={"A web app, which helps you to ACE your job interviews!"}/>
            <Accordian title={"What is InterviewJam?"} description={"A web app, which helps you to ACE your job interviews!"}/>
            <Accordian title={"What is InterviewJam?"} description={"A web app, which helps you to ACE your job interviews!"}/>
            <Accordian title={"What is InterviewJam?"} description={"A web app, which helps you to ACE your job interviews!"}/>
        </div>
    </div>
  )
}

export default FAQs