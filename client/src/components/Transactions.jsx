import React from 'react'
import '../index.css'

//<div className="bg-[#181918] m-4 flex flex-1 2xl:min-w-[450px] 2xl:max-w-[500px] sm:min-w-[270px] sm:max-w-[300px] min-w-full flex-col p-3 rounded-md hover:shadow-2xl">
//<div className=" flex flex-col items-center w-full mt-3">
 // <p className="text-white text-base">From: Addy </p>
  //<p className="text-white text-base">To: Addy</p>
  //<p className="text-white text-base">Amount: ___ ETH</p>
  //<br />
  //<p className="text-white text-base"> Message: </p>
//</div>
//</div>

const Transactions = () => {
  return (
    <div className="flex w-full justify-center items-center 2xl:px-20 gradient-bg-transactions">
      <div className='flex flex-col md:p-12 py-12 px-4'>
        Current Account
        <h3 className="text-white text-3xl text-center my-2">Latest Transactions</h3>
      </div>
    </div>
  )
}

export default Transactions