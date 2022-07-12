import React from 'react'
import {BsShieldFillCheck} from 'react-icons/bs'
import {BiSearchAlt} from 'react-icons/bi'
import {RiHeart2Fill} from 'react-icons/ri'
import '../index.css'

//SERVICE CARD

const ServiceCard = ({color, title, icon, subtitle}) => (
  <div className="flex flex-row justify-start items-center white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl">
    <div className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}>
      {icon}
    </div>
    <div className="ml-5 flex flex-col flex-1">
      <h3 className="mt-2 text-white text-lg">{title}</h3>
      <p className="mt-1 text-white text-sm md:w-9/12">{subtitle}</p>
    </div>
  </div>
)
  
const Services = () => {
  return (
    <div className="flex w-full justify-center items-center gradient-bg-services">
      <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
        <div className="flex-1 flex flex-col items-center">
          <h1 className="text-white text-3xl sm:text-5xl py-2 text-gradient">Services that we <br />
          continute to improve</h1>
          <p className="text-left my-2 text-white font-light md:w-9/12 w-11/12 text-base">
            Buy, Sell, Swap, more than 1,200 CryptoCurrencies across multiple decentralized platforms.
          </p>
        </div>
        <div className="flex-1 flex flex-col justify-start items-center">
          <ServiceCard color="bg-[#0a9cf5]" title="Security Guaranteed" icon={<BsShieldFillCheck fontSize={21} className="text-white"/>} subtitle="Security is guranteed. We always maintain privacy and quality of our products. Our Systems are protected by Mars Tech, #1 rated Blockchain Security" />
          <ServiceCard color="bg-[#85ebd9]" title="Best Exchange Rates" icon={<BiSearchAlt fontSize={21} className="text-white"/>} subtitle="The Best Exchange Rate in the Crypto World. Use our DEX and compare us to your favorites! " />
          <ServiceCard color="bg-[#ff577d]" title="Fastest Transactions" icon={<RiHeart2Fill fontSize={21} className="text-white"/>} subtitle="Speed matters to us, because it benefits you. Faster you send crypto the faster you can use it." />
        </div>
      </div>
    </div>
  )
}

export default Services