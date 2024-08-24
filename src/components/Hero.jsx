import React from 'react'
import Navbar from './Navbar'

const Hero = () => {
  return (
    <div className='w-[85%] max-sm:w-[95%] mx-auto px-7 flex flex-col min-h-screen relative'>
      <Navbar />
      <div className="flex mt-28 max-md:my-0 justify-between max-md:flex-col-reverse">
        <div className="flex flex-col gap-8 max-md:mb-44 max-sm:mb-24">
          <div className='w-[36rem] max-lg:w-[28rem] max-md:w-auto max-md:mt-10 max-md:text-center'>
          <h1 className='text-[4.8rem] max-sm:text-[2.5rem] max-lg:text-5xl leading-[5.5rem] max-lg:leading-[3.2rem] max-sm:leading-[2.8rem] max-lg:mb-4 poppins-bold primary-text tracking-tight'>More than just <br /> shorter links</h1>
          <p className="poppins text-[20px] secondary-text max-lg:text-lg">
          Build your brand's recognition and get detailed insights on how your links are performing.
          </p>
          </div>
          <div className='flex max-md:justify-center'>
          <button className='bg-button py-3 px-10 poppins text-lg rounded-[200px] text-white'>Get Started</button>
          </div>
        </div>
        <div className="flex-1 max-md:relative">
          <img src="/images/illustration-working.svg" className='absolute max-md:relative max-md:w-auto w-[60%] max-md:-right-0  md:-right-52 md:top-[50%] md:-translate-y-[50%]' alt="" />
        </div>
      </div>
    </div>
  )
}

export default Hero
