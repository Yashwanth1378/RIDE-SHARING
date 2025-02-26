import React from 'react'

const LocationSearchPanel = (props) => {
  console.log(props)

  const locations=[
    "24B , Kappor's cafe,Near Gurukuls Sports Academy,Bengaluru",
    "74 , The Dome cafe, Near Jyothi Nivas College Road  ,Bengaluru",
    "431/1 , Trippy Goat cafe,Near Cunningham Road ,Bengaluru",
    "23 , Dyu Art cafe,KHB MIG Colony,Bengaluru"
  ]
  return (
    <div>
      {
        locations.map(function(elem,indx){
          return  <div key={indx} onClick={()=>{
            props.setVehiclePanel(true)
            props.setPanelOpen(false)
          }}
          className='flex gap-4 border-2 p-3 border-gray-50 active:border-black rounded-xl items-center my-2 justify-start'>
          <h2 className='bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full'><i className= "ri-map-pin-fill "></i></h2>
          <h4 className='font-medium'>{elem}</h4>
          </div>

        })
      }
        
      </div>
  )
}

export default LocationSearchPanel