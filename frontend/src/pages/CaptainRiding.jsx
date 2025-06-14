import React , { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import FinishRide from '../components/FinishRide'

const CaptainRiding = () => {

    const [finishRidePanel , setFinishRidePanel] = useState(false)
    const finishRidePanelRef = useRef(null)

    useGSAP(function(){
        if(finishRidePanel){
          gsap.to(finishRidePanelRef.current,{
            transform:'translateY(0)'
          })
        }else{
          gsap.to(finishRidePanelRef.current,{
          transform:'translateY(100%)'
        })}
      },[finishRidePanel])

  return (
    <div className='h-screen relative'>
        
        <div className='fixed p-6 top-0 flex items-center justify-between w-screen'>
          <img  className='w-16' src='https://media.licdn.com/dms/image/v2/C4E16AQEGXFwsidczjA/profile-displaybackgroundimage-shrink_200_800/profile-displaybackgroundimage-shrink_200_800/0/1652255630776?e=2147483647&v=beta&t=IeVm4DhfxFODoArJkmHZZ5FY2hL3lmKSOxvkxz5UJu4' alt=''></img>
          <Link to='/captain-login' className='h-10 w-10 bg-white flex items-center justify-center rounded-full'>
            <i className=' text-lg font-medium ri-logout-box-r-line'></i>
        </Link>
        </div>
        <div className='h-4/5'>
        <img className= 'h-full w-full object-cover' src="https://s.wsj.net/public/resources/images/BN-XR452_201802_M_20180228165525.gif" alt=""/>

        </div>
        <div className='h-1/5 p-6 flex items-center justify-between  relative  bg-yellow-400 pt-10'
        onClick={()=>{
            setFinishRidePanel(true)
        }}> 
        <h5 className='p-1 text-center w-[95%] absolute top-0' onClick={() => {
                
        }}><i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i></h5>
        <h4 className='text-xl font-semibold '>4 KM away</h4>
        <button className='bg-green-600 text-white font-semibold p-3 px-10 rounded-lg'>Complete Ride</button>
        </div>
        <div ref={finishRidePanelRef} className='fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-10 pt-12'>
        <FinishRide setFinishRidePanel={setFinishRidePanel}/>
      </div>
    </div>
  )
}

export default CaptainRiding