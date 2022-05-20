import React from 'react'
import ModalPopup from "./UI/ModalPopup"
import { Rating } from '@mui/material'
import fast from "../Images/OrderModal/fast-delivery.png"
import money from "../Images/OrderModal/get-money.png"
import manager from "../Images/OrderModal/manager.png"
import time from "../Images/OrderModal/time-check.png"
import medal from "../Images/OrderModal/medal.png"
import closebtn from "../component/UI/modalpics/closebtnn.png"

const OrderModal = ({setModal}) => {
  
  return (
    <div className='mx-auto py-10 bg-white flex flex-col relative p-5 rounded-xl shadow-lg justify-center items-center  '>
        
        <img onClick={()=>setModal(false)}  className='w-[48px] h-[48px] absolute top-0 right-2 cursor-pointer' src={closebtn} ></img>
    <div className='flex flex-col justify-center items-center gap-3'>
      <div className='text-xl md:text-2xl' >Order No:</div>
      <div className='font-bold text-2xl md:text-4xl'>XYZ0022786581</div>
      <div className='text-sm md:text-xl text-center'>Please share your feedback with us</div>
      <div className='flex flex-row gap-2  text-center'>
        <div className='flex flex-col'>
          <img className='w-[40px] md:w-[52px] h-[40px] md:h-[52px] bg-[#FDE3D2] p-3 rounded-full' src={medal}></img>
          <div className='text-[10px] md:text-sm'>Product<br/>Quality</div>
        </div>

        <div className='flex flex-col'>
          <img className='w-[40px] md:w-[52px] h-[40px] md:h-[52px] bg-[#FDE3D2] p-2 md:p-3 rounded-full' src={money}></img>
          <div className='text-[10px] md:text-sm'>Value for<br/>Money</div>
        </div>

        <div className='flex flex-col'>
          <img className='w-[40px] md:w-[52px] h-[40px] md:h-[52px] bg-[#FDE3D2] p-2 md:p-3 rounded-full' src={fast}></img>
          <div className='text-[10px] md:text-sm'>On time<br/>Delivery</div>
        </div>

        <div className='flex flex-col'>
          <img className='w-[40px] md:w-[52px] h-[40px] md:h-[52px] bg-[#FDE3D2] p-2 md:p-3 rounded-full' src={time}></img>
          <div className='text-[10px] md:text-sm'>Timely<br/>Pickup</div>
        </div>
        
        <div className='flex flex-col'>
          <img className='w-[40px] md:w-[52px] h-[40px] md:h-[52px] bg-[#FDE3D2] p-2 md:p-3 rounded-full' src={manager}></img>
          <div className='text-[10px] md:text-sm'>Great<br/>Executive</div>
        </div>

      </div>
      <Rating className='' name="size-medium" defaultValue={2} />

      <div className='rounded-lg border-[#CCCCCC]  border-2  px-2 w-[250px] md:w-[352px] h-[170px] md:h-[200px]'>
          <div className='text-[15px] text-[#F47521] font-bold'>Feedback (optional)</div>
          <textarea className='text:lg md:text-2xl border-[#fff] text-[#707070] w-full h-[140px] md:h-[170px] outline-0' placeholder='Write something'></textarea>
          {/* <p className='text:lg md:text-2xl border-[#fff] text-[#707070] ' contentEditable={true}>Write something</p> */}
      </div> 
      <div className='bg-[#F47521] rounded-3xl text-center text-white w-[250px] md:w-[352px] h-[48px] flex justify-center items-center cursor-pointer'>Submit</div>

        </div>
        </div>
  )
}

export default OrderModal;



