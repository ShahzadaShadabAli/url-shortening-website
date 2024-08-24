import React from 'react'

const Boost = () => {
  return (
    <div className='flex flex-col gap-7 items-center justify-center h-60 primary-bg search relative '>
      <img src="/images/bg-boost-desktop.svg" className='absolute  w-full h-full object-cover rounded-xl' alt="" />
      <h1 className='poppins-bold text-white text-4xl z-10 max-md:text-center max-sm:text-3xl'>Boost your links today</h1>
      <button className='bg-button py-3 px-10 poppins text-lg rounded-[200px] text-white z-10'>Get Started</button>
    </div>
  )
}

export default Boost
