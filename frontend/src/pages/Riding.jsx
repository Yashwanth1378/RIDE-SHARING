import React from 'react'
import {Link} from 'react-router-dom'

const Riding = () => {
  return (
    <div className='h-screen'>
        <Link to='/home' className='fixed  right-2 top-2 h-10 w-10 bg-white flex items-center justify-center rounded-full'>
            <i className=' text-lg font-medium ri-home-5-line'></i>
        </Link>
        <div className='h-1/2'>
        <img className= 'h-full w-full object-cover' src="https://s.wsj.net/public/resources/images/BN-XR452_201802_M_20180228165525.gif" alt=""/>

        </div>
        <div className='h-1/2 p-4'> 
        <div className='flex items-center justify-between'>
    <img className='h-12' src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg" alt="" />
    <div classNmae='text-right'>
        <h2 className='text-lg font-medium '>Shamanth V</h2>
        <h4 className='text-xl font-semibold -mt-1 -mb-1'>KA09 JU 1345</h4>
        <p  className='text-sm text-gray-600'>Maruto Suzuki Alto</p>
    </div>
    </div>

    <div className='flex gap-2 justify-between flex-col items-center'>
        <div className='w-full mt-5'>
        
            <div className='flex items-center gap-5 p-3 border-b-2'>
                <i className="text-lg ri-map-pin-2-fill"></i>
                <div>
                    <h3 className='text-lg font-medium'>562/11-A</h3>
                    <p className='text-sm -mt-1 text-gray-600'>Kaikondrahalli, Bengaluru, Karnataka</p>
                </div>
            </div>
            <div className='flex items-center gap-5 p-3'>
                <i className="ri-currency-line"></i>
                <div>
                    <h3 className='text-lg font-medium'>₹195.20</h3>
                    <p className='text-sm -mt-1 text-gray-600'>Cash Cash</p>
                </div>
            </div>
        </div>
    </div>
            <button className='w-full mt-5 bg-green-600 text-white font-semibold p-2 rounded-lg'>Make a Payment</button>
        </div>
    </div>
  )
}

export default Riding