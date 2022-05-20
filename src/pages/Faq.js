import React,{useState} from 'react'
import Slider from "../Images/Main/slider1.png";
import RegisterAccordianDetail from '../component/Accordions/RegisterAccordianDetail';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import PhoneAndroidOutlinedIcon from '@mui/icons-material/PhoneAndroidOutlined';
import LocalAtmOutlinedIcon from '@mui/icons-material/LocalAtmOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import BeachAccessOutlinedIcon from '@mui/icons-material/BeachAccessOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import customerService from "../Images/Profile/customer-service.png"
import AccountAcordianDetail from '../component/Accordions/AccountAcordionDetail';
import OrderAccordianDetail from '../component/Accordions/OrderAccordionDetail';
import PaymentAccordianDetail from '../component/Accordions/PaymentAccordionDetail';
import PickupAccordianDetail from '../component/Accordions/PickupAccordionDetail';
import InsuranceAccordianDetail from '../component/Accordions/InsuranceAccordionDetail';
import CustomerAccordianDetail from '../component/Accordions/CustomerAccordion';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import Faqmain from '../component/Faqmain';
import Footer from '../component/Footer';

const Faq = () => {
  const[register,setRegister]=useState(true)
  const[account,setAccount]=useState(false)
  const[order,setOrder]=useState(false)
  const[payment,setPayment]=useState(false)
  const[pickup,setPickup]=useState(false)
  const[insurance,setInsurance]=useState(false)
  const [customer, setCustomer] = useState(false)
  
  return (
      <>
          
          <div className="w-full h-full  ">
      <div className=" w-full ">
                  <img className="relative h-[200px] md:h-[350px]" src={Slider} width="100%" alt="" />
                  <div className='w-full absolute top-[110px] md:top-[200px]'>
                  <div className='md:w-3/4 w-11/12  text-white text-center inset-x-0  mx-auto '>
                      <div className='text-xl md:text-5xl mt-2 absolute inset-x-0 -top-[28px]  md:-top-[45px] z-20 '>Frequently Asked Questions</div>
                        <div className='bg-[#F47521] border-0 mb-2 md:mb-5 mx-auto bottom-2 md:w-[600px] w-[250px]  p-1 '></div>

                      <div className=' text-base md:text-2xl'>Kindly check the FAQ below if you are not very familiar with the functioning of this website or the application</div>
                  </div>
                  </div>
              </div>
      </div>
      {/* content */}
      <div className='bg-[#eee]'>
      <div className='mx-auto w-10/12 flex flex-row py-5' >
        <div className='w-full md:w-1/4 hidden md:block pt-8'>
          <div className=' bg-white flex flex-col md:flex-row md:mx-1 p-2 lg:p-5  rounded-xl shadow-lg '>
            <div className='flex flex-col w-full gap-4'>
              <div className={` ${register && "text-[#F47521] "} flex flex-row justify-between gap-2 cursor-pointer`}
               onClick={() => {
                setRegister(true);
                setAccount(false);
                setOrder(false);
                setPayment(false);
                setPickup(false);
                setInsurance(false);
                setCustomer(false);
                }}>
                <div> <PersonAddAltIcon className="selection:text-[#F47521] mr-1" />
              Register</div>
                <div>
                  <ChevronRightOutlinedIcon/>
                </div>
           
                {/* <hr /> */}
                
              </div>
        <div className='border-t-2 rounded-lg w-full '></div>
              

              <div className={` ${account && "text-[#F47521]"} flex flex-row justify-between gap-2 cursor-pointer`}
                onClick={() => {
                  setRegister(false);
                  setAccount(true);
                  setOrder(false);
                  setPayment(false);
                  setPickup(false);
                  setInsurance(false);
                  setCustomer(false);
              }}
              >
                <div> <PersonOutlineIcon className="selection:text-[#F47521] mr-1" />Account    
              </div>
                <div>
                  <ChevronRightOutlinedIcon/>
                </div>
              </div>




              <div className='border-t-2 rounded-lg w-full '></div>
              


              <div className={` ${order && "text-[#F47521]"} flex flex-row justify-between gap-2 cursor-pointer`}
               onClick={() => {
                setRegister(false);
                setAccount(false);
                setOrder(true);
                setPayment(false);
                setPickup(false);
                setInsurance(false);
                setCustomer(false);
                }}>
                <div> <PhoneAndroidOutlinedIcon className="selection:text-[#F47521] mr-1" />
              Order</div>
                <div>
                  <ChevronRightOutlinedIcon/>
                </div>

              </div>
        <div className='border-t-2 rounded-lg w-full '></div>

              <div className={` ${payment && "text-[#F47521]"} flex flex-row justify-between gap-2 cursor-pointer`}
               onClick={() => {
                setRegister(false);
                setAccount(false);
                setOrder(false);
                setPayment(true);
                setPickup(false);
                setInsurance(false);
                setCustomer(false);
                }}>
                <div> <LocalAtmOutlinedIcon className="selection:text-[#F47521] mr-1" />
              Payment</div>
                <div>
                  <ChevronRightOutlinedIcon/>
                </div>
              </div>
        <div className='border-t-2 rounded-lg w-full '></div>

              
              <div className={` ${pickup && "text-[#F47521]"} flex flex-row justify-between gap-2 cursor-pointer`}
               onClick={() => {
                setRegister(false);
                setAccount(false);
                setOrder(false);
                setPayment(false);
                setPickup(true);
                setInsurance(false);
                setCustomer(false);
                }}>
                <div> <LocalShippingOutlinedIcon className="selection:text-[#F47521] mr-1" />
              Pickup & Delivery</div>
                <div>
                  <ChevronRightOutlinedIcon/>
                </div>
                {/* <LocalShippingOutlinedIcon/>
              Pickup & Delivery */}
              </div>
              <div className='border-t-2 rounded-lg w-full '></div>
              
              <div className={` ${insurance && "text-[#F47521]"} flex flex-row justify-between gap-2 cursor-pointer`}
               onClick={() => {
                setRegister(false);
                setAccount(false);
                setOrder(false);
                setPayment(false);
                setPickup(false);
                setInsurance(true);
                setCustomer(false);
                }}>
                <div> <BeachAccessOutlinedIcon className="selection:text-[#F47521] mr-1" />
              Insurance</div>
                <div>
                  <ChevronRightOutlinedIcon/>
                </div>
                {/* <BeachAccessOutlinedIcon/>
              Insurance */}
              </div>
              <div className='border-t-2 rounded-lg w-full '></div>

              <div className={` ${customer && "text-[#F47521]"} flex flex-row justify-between gap-2 cursor-pointer`}
               onClick={() => {
                setRegister(false);
                setAccount(false);
                setOrder(false);
                setPayment(false);
                setPickup(false);
                setInsurance(false);
                setCustomer(true);
                }}>
                <div> <SupportAgentOutlinedIcon className="selection:text-[#F47521] mr-1" />
              Customer</div>
                <div>
                  <ChevronRightOutlinedIcon/>
                </div>
                {/* <SupportAgentOutlinedIcon/>
              Customer */}
              </div>




            </div>
          </div>
            
            <div className='bg-white flex flex-col lg:flex-row md:mx-1 p-5 rounded-xl shadow-lg w-full mt-5 justify-center items-center'>
          <div className='flex flex-col justify-center items-center '>
          <img className='h-[108px] w-[108px] ' src={customerService} alt="customer care" ></img>
          <div className='text-sm' >Need help</div>
          <div className='text-[#F47521] text-lg md:text-2xl'>+91 911 063 5588</div>
              <div className='text-sm'>24/7 Monday - Sunday</div>
              </div>
          </div>



        </div>
        <div className='w-full block md:hidden'>

        <Faqmain/>
        </div>
        <div className=' md:w-3/4 lg:pl-3 hidden md:block '>

          {register && ( <RegisterAccordianDetail />)}
          {account && ( <AccountAcordianDetail />)}
          {order && (<OrderAccordianDetail />)}
          {payment && (<PaymentAccordianDetail />)}
          {pickup && (<PickupAccordianDetail />)}
          {insurance && (<InsuranceAccordianDetail />)}
          {customer && (<CustomerAccordianDetail/>)}
          
         
            
        </div>

        </div>
        </div>
        <Footer/>

          
    </>
  )
}

export default Faq