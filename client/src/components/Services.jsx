import React from 'react'
import '../index.css'

//SERVICE CARD

const Services = () => {
  return (
    <div className="flex w-full justify-center items-center gradient-bg-services">
      <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
        <div className="flex-1 flex flex-col items-center">
          <h1 className="text-white text-3xl sm:text-5xl py-2 text-gradient">Services that we <br />
          continute to improve</h1>
          <p className="text-left my-2 text-white font-light md:w-9/12 w-11/12 text-base">
            Buying and Selling your crypto assets, with various Utopian services
          </p>
        </div>
      </div>
    </div>
  )
}

export default Services