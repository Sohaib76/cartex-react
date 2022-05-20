import React from 'react'
import Card from "../component/UI/Card"
import profilepic from "../Images/Profile/profileimg.png"
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import { Navigate, useNavigate } from 'react-router-dom';
import Footer from '../component/Footer';

const EditProfile = () => {
  const navigate=useNavigate();
  const NewItem={
    image:profilepic,
  }
  const [newItem, setNewItem] = React.useState(NewItem);
  const hiddenFileInput = React.useRef(null);
  const handleClick = (event) => {
    event.preventDefault();
    hiddenFileInput.current.click();
  };
  const handleFileUpload=(event)=>{
    var file = event.target.files[0];
    var reader = new FileReader();
    var url = URL.createObjectURL(file);
    setNewItem({
      ...newItem,
      image: url,
    });
    console.log("url",url);
  }
  const saveImageHandler=()=>{
    localStorage.setItem("image",newItem.image);
    navigate('/profile')
  }
  return (
    <>
        <div className='bg-[#EEEEEE] pb-10 '>
        <h2 className='p-10 mx-10 w-11/12 font-bold  text-4xl'>Edit Profile</h2>
        <div className='flex flex-col  md:flex-row mx-auto w-10/12 md:w-11/12 gap-2 md:gap-2'>
            <Card css=" w-full lg:w-3/4 min-h-[348px]">
                  <div className='flex flex-col pt-4 justify-center items-center md:justify-start md:items-center'>
                      <div className='flex items-center justify-center relative cursor-pointer'>
                        <img className=' p-0 brightness-50 h-[180px] ' style={{borderRadius:"50%"}} src={newItem.image} alt='profile pic' width='180px'  ></img>
                        <div className=' absolute  text-center  '> <CameraAltOutlinedIcon className='text-white text-center '/></div>
                      </div>
                <div className='text-[17px] text-[#1A7DC1] font-bold py-3 pl-3 z-30 cursor-pointer  'onClick={handleClick} >Change Photo</div>
                <div className='text-[17px] text-[#FF0000] font-bold pb-5 pl-3 cursor-pointer ' onClick={()=>setNewItem('')}>Remove Photo</div>
                <input
            type="file"
            ref={hiddenFileInput}
            onChange={handleFileUpload}
            className="p-5 hidden"
            accept="image/*"
          />
            </div>
            <div className='flex flex-col md:w-8/12 w-full md:mx-auto  gap-4'>
            
                      <div className='rounded-lg border-[#CCCCCC]  border-2 w-full md:w-3/4 px-2'>
                          <div className='text-[15px] text-[#F47521] font-bold'>Name</div>
                          <p className='font-bold text-2xl border-[#fff] outline-0' contentEditable={true}>Jane Doe</p>
                      </div>
                      <div className='rounded-lg border-[#CCCCCC]  border-2 w-full md:w-3/4 px-2 py-2'>
                          <div className='text-[15px] text-[#F47521] font-bold'>Mobile No.</div>
              <p className='font-bold text-2xl outline-0' contentEditable={true}><span className='border-[1px] rounded-lg border-[#F47521] text-sm p-1 ' ><label className='text-[#F47521]' for="phonecode"><select  id="phonecode">
                <option value="+1">+1</option>
              
              </select></label></span>  234-567-890</p>
                      </div>
                      <div className='rounded-lg border-[#CCCCCC]  border-2 w-full md:w-3/4 px-2'>
                          <div className='text-[15px] text-[#F47521] font-bold'>Email</div>
                          <p className='font-bold text-2xl outline-0' contentEditable={true}>janedoe@gmail.com</p>
                      </div>
                      <div className='flex flex-col justify-center items-center gap-2 md:w-3/4'>
                      <div className='bg-[#F47521] rounded-3xl text-center text-white w-[250px] md:w-[340px] h-[48px] flex justify-center items-center cursor-pointer' onClick={saveImageHandler}>Save Changes </div>
                <div className=' rounded-3xl text-center text-[#F47521] w-[170px] px-2 py-3 cursor-pointer' onClick={()=>navigate('/profile')}>Discard Changes</div>
               </div>       
            </div>
         
              </Card>
          </div>

          </div>
          <Footer/></>
  )
}

export default EditProfile