import React, { useState } from "react";
import customerService from "../Images/Profile/customer-service.png";
import Card from "../component/UI/Card";
import { useNavigate } from "react-router-dom";
import Footer from "../component/Footer";

function Profile() {
  const navigate = useNavigate();
  return (
    <>
      <div className="bg-[#EEEEEE] pb-10 ">
        <h2 className="p-10 mx-10 w-11/12 text-4xl font-bold">Edit Profile</h2>
        <div className="flex flex-col md:flex-row mx-auto w-10/12 md:w-11/12 gap-2 md:gap-2">
          <Card css=" w-full md:w-3/4 min-h-[348px]">
            <div className="flex flex-col pt-4 justify-center items-center">
              <img
                className="rounded-full p-0 "
                src={localStorage.getItem("image")}
                alt="profile pic"
                height="180px"
                width="180px"
              ></img>
              <div
                className="bg-[#F47521] m-3 p-2 px-5 rounded-3xl text-center text-white w-[170px] cursor-pointer"
                onClick={() => navigate("/profile/editprofile")}
              >
                Edit profile
              </div>
            </div>
            <div className="flex flex-col md:px-12 ">
              <div className="text-[#F47521] text-[15px] pt-10">Name</div>
              <div className="text-2xl">Jane Doe</div>
              <div className="text-[#F47521] text-[15px] pt-3">Mobile No.</div>
              <div className="text-2xl">+1-234-567-890</div>
              <div className="text-[#F47521] text-[15px] pt-3">Email</div>
              <div className="text-2xl">janedoe@gmail.com</div>
            </div>
          </Card>
          <Card css="w-full  lg:w-1/4  h-[260px] justify-center items-center ">
            <div className="flex flex-col justify-center items-center ">
              <img
                className="h-[108px] w-[108px] "
                src={customerService}
                alt="customer care"
              ></img>
              <div className="text-sm">Need help</div>
              <div className="text-[#F47521] text-lg md:text-2xl">
                +91 911 063 5588
              </div>
              <div className="text-sm">24/7 Monday - Sunday</div>
            </div>
          </Card>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Profile;
