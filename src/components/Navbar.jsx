import React, { useEffect, useState } from 'react'

const Navbar = () => {

  const [toggledCollapse, setToggleCollapse] = useState(false)

  useEffect(() => {
    if (toggledCollapse) { 
      const collapser = document.querySelector('.collapser')
      collapser.classList.remove('-translate-y-96')
      collapser.classList.add('translate-y-16')
      collapser.classList.remove('opacity-0')
      collapser.classList.add('opacity-100')
    } else {
      const collapser = document.querySelector('.collapser')
      collapser.classList.add('-translate-y-96')
      collapser.classList.remove('translate-y-16')
      collapser.classList.add('opacity-100')
      collapser.classList.remove('opacity-0')
    }
  }, [toggledCollapse])

  return (
    <nav className='flex justify-between  mt-10'>
      <div className="flex w-[28rem] justify-between items-center">
      <h1 className='poppins-bold text-4xl primary-text'>Shortly</h1>
      <ul className='flex gap-7 secondary-text poppins mr-3 max-md:hidden cursor-pointer'>
        <li>Features</li>
        <li>Pricing</li>
        <li>Resources</li>
      </ul>
      </div>
      <div className="flex gap-7 items-center poppins max-md:hidden">
        <button className='secondary-text'>Login</button>
        <button className='bg-button py-2 px-6 poppins rounded-[200px] text-white'>Sign Up</button>
      </div>
      <svg width="24" height="18" onClick={() => setToggleCollapse(prev => !prev)} className='cursor-pointer md:hidden' xmlns="http://www.w3.org/2000/svg"><path d="M24 16v2H0v-2h24zm0-8v2H0V8h24zm0-8v2H0V0h24z" fill="#808080" fill-rule="evenodd"/></svg>
      <div className="absolute w-full h-80  md:hidden -translate-y-96 opacity-0 rounded-xl left-0  z-30 collapser">
      <ul className='flex flex-col items-center transition-all gap-5 cursor-pointer text-xl text-white poppins-bold mr-3 p-7'>
        <li>Features</li>
        <li>Pricing</li>
        <li>Resources</li>
        <hr className='w-full'/>
        <button className=''>Login</button>
        <button className='bg-button py-2 w-full poppins rounded-[200px]'>Sign Up</button>
      </ul>
      </div>
    </nav>
  )
}

export default Navbar
