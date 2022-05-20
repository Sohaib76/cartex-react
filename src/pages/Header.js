import React, { useState } from 'react'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { Divider, Hidden, useMediaQuery } from '@mui/material';
import logo from '../Images/Main/logo.png';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import LoginModal from '../component/LoginModal';
import ModalPopup from '../component/UI/ModalPopup';
import QueryModal from '../component/QueryModal';
import FlightSharpIcon from '@mui/icons-material/FlightSharp';
import LogoutSharpIcon from '@mui/icons-material/LogoutSharp';
function Header() {
  const[login,setLogin]=useState(false);
  const[active,setActive]=useState('');
  const [modal, setModal] = useState(false);
  const [qmodal, setqModal] = useState(false);
    const navigate=useNavigate();
    const [toggler,setToggler]=useState(false);
  const smallScreen = useMediaQuery("(max-width:786px)");
  localStorage.getItem('login');
  return (
    <>
    <div className='bg-white w-full shadow-lg'>
      {
        smallScreen?Hidden:<>
         <div className='flex flex-row w-10/12 gap-3 justify-between text-xs font-normal mx-auto py-1.5'>
            <div className='flex flex-row gap-4 justify-between text-sm font-normal'>
                <div className='flex flex-row text-sm font-normal justify-center items-center cursor-pointer'>
                <LocalPhoneIcon style={{fontSize:"16px"}}/>
                <p>+91 911 063 5588</p>
                </div>
                <div className='flex flex-row justify-center items-center'>
                <MailOutlineIcon style={{fontSize:"16px"}}/>
                <p>customercare@carterporter.in</p>
                </div>
                <div className='flex flex-row justify-center items-center cursor-pointer' onClick={()=> setqModal(!qmodal)}>
                <HelpOutlineIcon style={{fontSize:"16px"}}/>
                <p>Support</p>
                </div>
            </div>
            <div className='flex flex-row gap-4 justify-between text-sm font-normal'>
          {
            login  && <>
              <div className='flex flex-row justify-center items-center cursor-pointer' onClick={()=>setLogin(!login)}>
              <pre>| </pre>
                <LogoutSharpIcon style={{fontSize:"16px"}}/>
                <p>Logout</p>
            </div><div className='flex flex-row justify-center items-center cursor-pointer' onClick={()=>navigate('/trip')}>
              <pre>| </pre>
                <FlightSharpIcon style={{fontSize:"16px"}}/>
                <p>My Trip</p>
            </div>
            <div className='flex flex-row justify-center items-center cursor-pointer' onClick={()=>navigate('/profile')}>
              <pre>| </pre>
                <PersonOutlineIcon style={{fontSize:"16px"}}/>
                <p> My Profile</p>
            </div></>
          }
          {
            !login && <div className='flex flex-row justify-center items-center cursor-pointer' onClick={()=>setModal(!modal)}>

            <PersonOutlineIcon style={{fontSize:"16px"}}/>
            <p>Login to Track order</p>
        </div>
          }
            </div>
            
            
        </div>
        <Divider/></>

      }
       
        <div className='flex flex-row w-10/12 gap-3 justify-between text-xs font-normal mx-auto '>
            <div className='flex flex-row gap-4 justify-between text-xs font-normal py-3'>
              <img className='h-[26px] cursor-pointer w-[160px]' src={logo} onClick={()=>navigate('/')} />
            </div>
            <div className='flex flex-row justify-center items-center text-base font-normal'>
              {
                smallScreen?<>
                <MenuIcon className="relative" onClick={()=>setToggler(!toggler)} />
                {
                  toggler && (<div className= ' p-2 bottom-0 z-50 absolute right-0 font-medium text-lg top-12 w-[150px] flex flex-col bg-white  gap-5'>
                  <a className='hover:cursor-pointer ' onClick={()=>{navigate('/airport');setToggler(!toggler)}}>Home</a>
                  <a className='hover:cursor-pointer' onClick={()=>{navigate('/about');setToggler(!toggler)}}>About Us</a>
                  <a className='hover:cursor-pointer' onClick={()=>{navigate('/blog');setToggler(!toggler)}}>Blog</a>
                  <a className='hover:cursor-pointer' onClick={()=>{navigate('/contactus');setToggler(!toggler)}}>Contact US</a>
                  <a className='hover:cursor-pointer' onClick={()=>{navigate('/trip');setToggler(!toggler)}}>My Trip</a>
                  <a className='hover:cursor-pointer'  onClick={()=> {setqModal(!qmodal);setToggler(!toggler)}}>Support</a>
                  {
                    login && <>
                  <a className='hover:cursor-pointer' onClick={()=>{navigate('/profile');setToggler(!toggler)}}>Profile</a>
                  <a className='hover:cursor-pointer' onClick={()=>{setLogin(!login);setToggler(!toggler)}}>Logout</a>
                    </>
                  }  
                  {
                    !login && <>
                  <a className='hover:cursor-pointer' onClick={()=>{setModal(!modal);setToggler(!toggler)}}>Login</a>
                    </>
                  } 
                  </div>)
                }
                </>:<>
                <div className= ' font-medium text-lg h-full flex flex-row justify-between items-center md:gap-3 lg:gap-6'>
                  <a className={`hover:cursor-pointer h-[50px] pt-3  ${active===0 && 'border-b-4 text-[#F47521] border-b-[#F47521]/100'} `} onClick={()=>{navigate('/airport');setActive(0)}}>Home </a>
                  <a className={`hover:cursor-pointer h-[50px] pt-3  ${active===1 && 'border-b-4 text-[#F47521] border-b-[#F47521]/100'} `} onClick={()=>{navigate('/about');setActive(1)}}>About Us</a>
                  <a className={`hover:cursor-pointer h-[50px] pt-3  ${active===2 && 'border-b-4 text-[#F47521] border-b-[#F47521]/100'} `} onClick={()=>{navigate('/blog');setActive(2)}}>Blog</a>
                  <a className={`hover:cursor-pointer h-[50px] pt-3  ${active===3 && 'border-b-4 text-[#F47521] border-b-[#F47521]/100'} `} onClick={()=>{navigate('/contactus');setActive(3)}}>Contact US</a>
                  </div>
                </>
              }
            </div>
        </div>
        

      </div>
      <ModalPopup modal={modal} setModal={setModal}>
      <LoginModal setModal={setModal} setLogin={setLogin} login={login}/>
      </ModalPopup>
      <ModalPopup modal={qmodal} setModal={setqModal}>
      <QueryModal setModal={setqModal}/>
      </ModalPopup>
    </>
  )
}

export default Header