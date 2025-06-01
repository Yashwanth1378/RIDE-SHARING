import React from 'react'
import {Link} from 'react-router-dom'

const FinishRide = (props) => {
  return (
    <div >
        <h5 className='p-1 text-center w-[93%] absolute top-0' onClick={(props) => {
                props.setFinishRidePanel(false)
            }}><i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i></h5>
            <h3 className='text-2xl font-semibold mb-5'>Finish this Ride</h3>
            <div className='flex items-center justify-between p-4 border-2 border-yellow-300 rounded-lg mt-4'>
                <div className='flex items-center gap-3 mt-3'>
                    <img className='h-12 rounded-full object-cover w-12' src='https://img.freepik.com/premium-photo/stylish-man-flat-vector-profile-picture-ai-generated_606187-309.jpg' alt=''/>
                    <h2  className='text-lg font-medium'>Arjun Sharma</h2>
                </div>
                <h5 className='text-lg font-semibold'>2.2 KM</h5>
            </div>
            <div className='flex gap-2 justify-between flex-col items-center'>
                <div className='w-full mt-5'>
                    <div className='flex items-center gap-5 p-3 border-b-2'>
                        <i className="ri-map-pin-user-fill"></i>
                        <div>
                            <h3 className='text-lg font-medium'>562/11-A</h3>
                            <p className='text-sm -mt-1 text-gray-600'>Kaikondrahalli, Bengaluru, Karnataka</p>
                        </div>
                    </div>
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
                
                <div className='mt-10 w-full'>
                
                <Link  to='/captain-home' className='w-full mt-5 flex text-lg justify-center bg-green-600 text-white font-semibold p-3 rounded-lg'>Finish Ride</Link>

                <p className=' mt-10 text-xm'>Cick on Ride button if you have completed the payment.</p>
                </div>
            </div>
    </div>
  )
}

export default FinishRide