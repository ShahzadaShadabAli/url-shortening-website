import React from 'react'
import SearchForm from './SearchForm'

const Statistics = () => {
  return (
    <div className='p-5 bg-[#f0f1f6] relative '>
      <SearchForm />
      <div className="text-center">
        <h1 className="text-4xl primary-text poppins-bold mb-5">Advanced Statistics</h1>
        <p className="poppins text-[18px] secondary-text">
          Track how your links are performing across the web with <br /> our advanced statistics dashboard.
          </p>
      </div>

      <div className="grid grid-cols-3 w-[85%] max-md:grid-cols-1 mx-auto gap-[2.8%] mb-44 mt-24 card-box">

        <div className="bg-white rounded-lg p-8 pt-[4.3rem] relative">
          <div className="primary-bg  w-20 h-20 flex justify-center items-center absolute -top-10 max-md:left-[50%] max-md:-translate-x-[50%] rounded-full">
          <img src="/images/icon-brand-recognition.svg" className='' alt="" />
          </div>
          <h1 className="text-[1.4rem] primary-text poppins-bold">Brand Recognition</h1>
          <p className="poppins text-[16px] secondary-text mt-4">
          Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.          </p>
        </div>

        <div className="bg-white rounded-lg p-8 pt-[4.3rem] relative translate-y-10 max-md:mt-5">
          <div className="primary-bg  w-20 h-20 flex justify-center items-center absolute -top-10 max-md:left-[50%] max-md:-translate-x-[50%] rounded-full">
          <img src="/images/icon-detailed-records.svg" className='' alt="" />
          </div>
          <h1 className="text-[1.4rem] primary-text poppins-bold">Detailed Records</h1>
          <p className="poppins text-[16px] secondary-text mt-4">
          Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.          </p>
        </div>

        <div className="bg-white rounded-lg p-8 pt-[4.3rem] relative translate-y-20 max-md:mt-5">
          <div className="primary-bg  w-20 h-20 flex justify-center items-center absolute -top-10 max-md:left-[50%] max-md:-translate-x-[50%] rounded-full">
          <img src="/images/icon-fully-customizable.svg" className='' alt="" />
          </div>
          <h1 className="text-[1.4rem] primary-text poppins-bold">Brand Recognition</h1>
          <p className="poppins text-[16px] secondary-text mt-4">
          Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.          </p>
        </div>
      </div>
    </div>
  )
}

export default Statistics
