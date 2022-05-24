import React, { useState } from "react";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import PhoneAndroidOutlinedIcon from "@mui/icons-material/PhoneAndroidOutlined";
import LocalAtmOutlinedIcon from "@mui/icons-material/LocalAtmOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import BeachAccessOutlinedIcon from "@mui/icons-material/BeachAccessOutlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import { useNavigate } from "react-router-dom";

const Faqmain = () => {
  const navigate = useNavigate();
  const [register, setRegister] = useState(false);
  const [account, setAccount] = useState(false);
  const [order, setOrder] = useState(false);
  const [payment, setPayment] = useState(false);
  const [pickup, setPickup] = useState(false);
  const [insurance, setInsurance] = useState(false);
  const [customer, setCustomer] = useState(false);
  return (
    <div>
      <div className="w-full bg-[#eee] md:w-1/4 block md:hidden">
        <div className=" bg-white flex flex-col md:flex-row md:mx-1 p-2 lg:p-5  rounded-xl shadow-lg ">
          <div className="flex flex-col w-full gap-4">
            <div
              className={` ${
                register && "text-[#F47521] "
              } flex flex-row justify-between gap-2 cursor-pointer`}
              onClick={() => {
                setRegister(true);
                setAccount(false);
                setOrder(false);
                setPayment(false);
                setPickup(false);
                setInsurance(false);
                setCustomer(false);
                navigate("register");
              }}
            >
              <div>
                {" "}
                <PersonAddAltIcon className="selection:text-[#F47521] mr-1" />
                Register
              </div>
              <div>
                <ChevronRightOutlinedIcon />
              </div>
            </div>
            <div className="border-t-2 rounded-lg w-full "></div>

            <div
              className={` ${
                account && "text-[#F47521]"
              } flex flex-row justify-between gap-2 cursor-pointer`}
              onClick={() => {
                setRegister(false);
                setAccount(true);
                setOrder(false);
                setPayment(false);
                setPickup(false);
                setInsurance(false);
                setCustomer(false);
                navigate("account");
              }}
            >
              <div>
                {" "}
                <PersonOutlineIcon className="selection:text-[#F47521] mr-1" />
                Account
              </div>
              <div>
                <ChevronRightOutlinedIcon />
              </div>
            </div>

            <div className="border-t-2 rounded-lg w-full "></div>

            <div
              className={` ${
                order && "text-[#F47521]"
              } flex flex-row justify-between gap-2 cursor-pointer`}
              onClick={() => {
                setRegister(false);
                setAccount(false);
                setOrder(true);
                setPayment(false);
                setPickup(false);
                setInsurance(false);
                setCustomer(false);
                navigate("order");
              }}
            >
              <div>
                {" "}
                <PhoneAndroidOutlinedIcon className="selection:text-[#F47521] mr-1" />
                Order
              </div>
              <div>
                <ChevronRightOutlinedIcon />
              </div>
            </div>
            <div className="border-t-2 rounded-lg w-full "></div>

            <div
              className={` ${
                payment && "text-[#F47521]"
              } flex flex-row justify-between gap-2 cursor-pointer`}
              onClick={() => {
                setRegister(false);
                setAccount(false);
                setOrder(false);
                setPayment(true);
                setPickup(false);
                setInsurance(false);
                setCustomer(false);
                navigate("payment");
              }}
            >
              <div>
                {" "}
                <LocalAtmOutlinedIcon className="selection:text-[#F47521] mr-1" />
                Payment
              </div>
              <div>
                <ChevronRightOutlinedIcon />
              </div>
            </div>
            <div className="border-t-2 rounded-lg w-full "></div>

            <div
              className={` ${
                pickup && "text-[#F47521]"
              } flex flex-row justify-between gap-2 cursor-pointer`}
              onClick={() => {
                setRegister(false);
                setAccount(false);
                setOrder(false);
                setPayment(false);
                setPickup(true);
                setInsurance(false);
                setCustomer(false);
                navigate("pickup");
              }}
            >
              <div>
                {" "}
                <LocalShippingOutlinedIcon className="selection:text-[#F47521] mr-1" />
                Pickup & Delivery
              </div>
              <div>
                <ChevronRightOutlinedIcon />
              </div>
            </div>
            <div className="border-t-2 rounded-lg w-full "></div>

            <div
              className={` ${
                insurance && "text-[#F47521]"
              } flex flex-row justify-between gap-2 cursor-pointer`}
              onClick={() => {
                setRegister(false);
                setAccount(false);
                setOrder(false);
                setPayment(false);
                setPickup(false);
                setInsurance(true);
                setCustomer(false);
                navigate("insurance");
              }}
            >
              <div>
                {" "}
                <BeachAccessOutlinedIcon className="selection:text-[#F47521] mr-1" />
                Insurance
              </div>
              <div>
                <ChevronRightOutlinedIcon />
              </div>
            </div>
            <div className="border-t-2 rounded-lg w-full "></div>

            <div
              className={` ${
                customer && "text-[#F47521]"
              } flex flex-row justify-between gap-2 cursor-pointer`}
              onClick={() => {
                setRegister(false);
                setAccount(false);
                setOrder(false);
                setPayment(false);
                setPickup(false);
                setInsurance(false);
                setCustomer(true);
                navigate("customer");
              }}
            >
              <div>
                {" "}
                <SupportAgentOutlinedIcon className="selection:text-[#F47521] mr-1" />
                Customer
              </div>
              <div>
                <ChevronRightOutlinedIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faqmain;
