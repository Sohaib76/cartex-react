import React,{useState} from 'react'


function SelectAddress({toggle,toggler,setToggler,data}) {
    const [eventType, setEventType] = useState(data)
  return (
    <div className='w-full '>
    <div className=' flex flex-col w-full'> 
    <div className="bg-transparent outline-0 w-full font-bold text-lg lg:text-lg border-[#fff] text-black cursor-pointer" onClick={()=>setToggler(true)} >
      <h3 defaultValue ={eventType}>{eventType}</h3>
            </div>
           
    {
      toggler && ( <div className={`absolute flex flex-col z-10 p-4 inset-x-0 top-[85px] mt-2 w-full overflow-hidden  rounded-2xl text-xl font-normal shadow-2xl border-primary bg-white ${true && 'top-[62px]'}`}>
          <div className='flex flex-row justify-between items-center '>
              <h3 className='font-bold text-base'>Pickup Address</h3>
              <button className='bg-[#F47521] text-white text-base px-3 py-2 rounded-full ' onClick={()=>setToggler(false)}>Done</button>
          </div>
          <div>
              <label className='text-[#F47521] text-sm font-bold'>House/Flat/Door.no</label>
              <input type='text' className='w-full border-[#F47521] text-[14px] font-bold indent-1.5 border-[1px] rounded-lg p-2' placeholder='Enter House/Flat/Door.no'  />
          </div>
          <div>
              <label className='text-[#F47521] text-sm font-bold'>Appartment/Road/Area</label>
              <input type='text' className='w-full border-[#F47521] text-[14px] font-bold indent-1.5 border-[1px] rounded-lg p-2' placeholder='Enter Appartment/Road/Area'  />
          </div><div>
              <label className='text-[#F47521] text-sm font-bold'>City</label>
              <input type='text' className='relative w-full border-[#F47521] text-[14px] font-bold indent-1.5 border-[1px] rounded-lg p-2' placeholder='Enter City'  />
          </div>

    </div>)
}

    {
      toggler && ( <div className={`absolute top-[340px] flex flex-col z-10 inset-x-0  mt-2 w-full overflow-hidden  rounded-2xl text-xl font-normal shadow-2xl border-primary h-[225px] overflow-y-auto bg-white ${false && 'top-[62px]'}`}>
        {
          toggle.map((item,i)=>(
              <>
              <h2 className='cursor-pointer indent-4 py-2 hover:bg-[#fdeadf] hover:text-[#F47521] text-black text-[15px]' onClick={() => { setEventType(item); setToggler(false) }}>{item}</h2>
              <hr/></>
          ))
        }
    </div>)
}
    
     </div>
  </div>
  );
}

export default SelectAddress;
