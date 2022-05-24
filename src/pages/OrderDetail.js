import React, { useState } from "react";
import customerService from "../Images/Profile/customer-service.png";
import Stepper from "../component/Stepper";
import team from "../Images/About/team2.png";
import team1 from "../Images/About/team1.png";
import lugage1 from "../Images/OrderDetail/lugage1.png";
import lugage2 from "../Images/OrderDetail/lugage2.png";
import lugage3 from "../Images/OrderDetail/lugage3.png";
import lugage4 from "../Images/OrderDetail/lugage4.png";
import lugage5 from "../Images/OrderDetail/lugage5.png";
import lugage6 from "../Images/OrderDetail/lugage6.png";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Button } from "@mui/material";
import Footer from "../component/Footer";

const OrderDetail = () => {
  const [btn, setBtn] = useState(true);
  const [btn1, setBtn1] = useState(true);
  return (
    <>
      <div className="bg-[#EEEEEE] pb-10 overflow-hidden ">
        <h2 className="p-10 mx-10 w-full font-bold  ">Order Details</h2>
        <div className="w-full  md:w-10/12 mx-auto flex flex-col lg:flex-row gap-3">
          <div className="flex flex-col px-0 w-full lg:w-3/4  gap-3 ">
            <div className="border-t-2 rounded-lg w-full"></div>

            <div className="flex flex-row w-full justify-between items-center ">
              <div className="flex flex-col">
                <div className="text-sm md:text-2xl">Your Order No:</div>
                <div className="text-xl md:text-4xl font-bold">
                  XYZ0022786581
                </div>
              </div>
              <div className="bg-[#F47521] p-2 px-5 rounded-full text-sm  lg:text-lg text-white font-bold cursor-pointer">
                Rebook
              </div>
            </div>

            <div className="bg-white flex flex-col lg:flex-row md:mx-1 md:p-5 py-2 rounded-xl shadow-lg">
              <Stepper />
            </div>

            <div className="bg-white flex flex-col lg:flex-row md:mx-1 p-5 rounded-xl shadow-lg">
              <div className="flex flex-col w-full gap-2">
                <div className="font-bold text-2xl">Pickup Details </div>
                <div className="text-[17px]">Let's meet at the right place</div>
                <div className="text-[17px] font-bold pt-2">Pickup Details</div>
                <div className="border-t-2 rounded-lg w-full"></div>
                <div className="border-2 rounded-lg flex flex-col gap-3 ">
                  <div className="flex flex-row justify-start items-center w-full pl-3 pt-3">
                    <div className="w-1/2 text-xs md:text-[17px] font-bold">
                      Meeting
                    </div>
                    <div className="w-1/2 text-xs md:text-[17px]">
                      Ravi Anand
                    </div>
                  </div>

                  <div className="border-t-2 rounded-lg w-full"></div>

                  <div className="flex flex-row justify-start items-center w-full pl-3">
                    <div className="w-1/2 text-xs md:text-[17px] font-bold">
                      Contact Number
                    </div>
                    <div className="w-1/2 text-xs md:text-[17px]">
                      999 765 4321
                    </div>
                  </div>
                  <div className="border-t-2 rounded-lg w-full"></div>

                  <div className="flex flex-row justify-start items-center w-full pl-3">
                    <div className="w-1/2 text-xs md:text-[17px] font-bold">
                      Date
                    </div>
                    <div className="w-1/2 text-xs md:text-[17px]">
                      19 June 2019
                    </div>
                  </div>
                  <div className="border-t-2 rounded-lg w-full"></div>

                  <div className="flex flex-row justify-start items-center w-full pl-3">
                    <div className="w-1/2 text-xs md:text-[17px] font-bold">
                      Time Slot
                    </div>
                    <div className="w-1/2 text-xs md:text-[17px]">
                      05:00 P.M.
                    </div>
                  </div>
                  <div className="border-t-2 rounded-lg w-full"></div>

                  <div className="flex flex-row justify-start items-center w-full pl-3 pb-3">
                    <div className="w-1/2 text-xs md:text-[17px] font-bold">
                      Address
                    </div>
                    <div className="w-1/2 text-xs md:text-[17px]">
                      Navarang Theatre, 19th Main Road, Nagapura, Bengaluru,
                      Karnataka 560010, India
                    </div>
                  </div>
                </div>
                <div className="text-[17px] font-bold pt-2">Proter Detail</div>
                <div className="border-t-2 rounded-lg w-full"></div>
                <div className="w-full md:w-1/2 flex flex-col md:flex-row ">
                  <div className="w-full md:w-1/2 py-3">
                    <img className="h-[168px] w-[168px]" src={team}></img>
                  </div>
                  <div className="w-full md:w-1/2 flex flex-col gap-3 justify-center items-start  pt-3 md:pt-0">
                    <div className="text-xs md:text-[17px] font-bold">Name</div>
                    <div className="text-[17px] pb-2">Anil Anand</div>
                    <div className="text-xs md:text-[17px] font-bold">
                      Number
                    </div>
                    <div className="text-[17px] ">+91-9642818941</div>
                  </div>
                </div>
                <div
                  onClick={() => setBtn(!btn)}
                  className="w-full flex flex-row justify-center items-center bg-[#FDE3D2] text-[#F47521] font-bold h-[48px] rounded-xl cursor-pointer"
                >
                  Baggage Images
                  <KeyboardArrowDownIcon />{" "}
                </div>
                {btn && (
                  <div className="flex flex-wrap gap-4 bg-[#CCCCCC] w-full p-4 justify-center items-center rounded-xl">
                    <img className="h-[179px] w-[179px]" src={lugage1}></img>
                    <img className="h-[179px] w-[179px]" src={lugage2}></img>
                    <img className="h-[179px] w-[179px]" src={lugage3}></img>
                    <img className="h-[179px] w-[179px]" src={lugage4}></img>
                    <img className="h-[179px] w-[179px]" src={lugage5}></img>
                    <img className="h-[179px] w-[179px]" src={lugage6}></img>
                  </div>
                )}
              </div>
            </div>

            <div className="bg-white flex flex-col lg:flex-row md:mx-1 p-5 rounded-xl shadow-lg">
              <div className="flex flex-col w-full gap-2">
                <div className="font-bold text-2xl">Delivery Details </div>
                <div className="text-[17px]">
                  Let's deliver at the right place
                </div>
                <div className="text-[17px] font-bold pt-2">
                  Delivery Details
                </div>
                <div className="border-t-2 rounded-lg w-full"></div>
                <div className="border-2 rounded-lg flex flex-col gap-3 ">
                  <div className="flex flex-row justify-start items-center w-full pl-3 pt-3">
                    <div className="w-1/2 text-xs md:text-[17px] font-bold">
                      Meeting
                    </div>
                    <div className="w-1/2 text-xs md:text-[17px]">
                      Ravi Anand
                    </div>
                  </div>

                  <div className="border-t-2 rounded-lg w-full"></div>

                  <div className="flex flex-row justify-start items-center w-full pl-3">
                    <div className="w-1/2 text-xs md:text-[17px] font-bold">
                      Contact Number
                    </div>
                    <div className="w-1/2 text-xs md:text-[17px]">
                      999 765 4321
                    </div>
                  </div>
                  <div className="border-t-2 rounded-lg w-full"></div>

                  <div className="flex flex-row justify-start items-center w-full pl-3">
                    <div className="w-1/2 text-xs md:text-[17px] font-bold">
                      Departure Date
                    </div>
                    <div className="w-1/2 text-xs md:text-[17px]">
                      19 June 2019
                    </div>
                  </div>
                  <div className="border-t-2 rounded-lg w-full"></div>

                  <div className="flex flex-row justify-start items-center w-full pl-3 pb-3">
                    <div className="w-1/2 text-xs md:text-[17px] font-bold">
                      Time to meet Carter X
                    </div>
                    <div className="w-1/2 text-xs md:text-[17px]">
                      05:00 P.M.
                    </div>
                  </div>
                </div>
                <div className="text-[17px] font-bold pt-2">Proter Detail</div>
                <div className="border-t-2 rounded-lg w-full"></div>
                <div className="w-full md:w-1/2 flex flex-col md:flex-row ">
                  <div className="w-full md:w-1/2 py-3">
                    <img className="h-[168px] w-[168px]" src={team1}></img>
                  </div>
                  <div className="w-full md:w-1/2 flex flex-col gap-3 justify-center items-start  pt-3 md:pt-0">
                    <div className="text-xs md:text-[17px] font-bold">Name</div>
                    <div className="text-[17px] pb-2">Anil Anand</div>
                    <div className="text-xs md:text-[17px] font-bold">
                      Number
                    </div>
                    <div className="text-[17px] ">+91-9642818941</div>
                  </div>
                </div>
                <div
                  onClick={() => setBtn1(!btn1)}
                  className="w-full flex flex-row justify-center items-center bg-[#FDE3D2] text-[#F47521] font-bold h-[48px] rounded-xl cursor-pointer"
                >
                  Baggage Images
                  <KeyboardArrowDownIcon />{" "}
                </div>
                {btn1 && (
                  <div className="flex flex-wrap gap-4 bg-[#CCCCCC] w-full p-4 justify-center items-center rounded-xl">
                    <img className="h-[179px] w-[179px]" src={lugage1}></img>
                    <img className="h-[179px] w-[179px]" src={lugage2}></img>
                    <img className="h-[179px] w-[179px]" src={lugage3}></img>
                    <img className="h-[179px] w-[179px]" src={lugage4}></img>
                    <img className="h-[179px] w-[179px]" src={lugage5}></img>
                    <img className="h-[179px] w-[179px]" src={lugage6}></img>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 lg:w-1/4 w-full ">
            <div className="w-full  min-w-[290px]  bg-white flex flex-col lg:flex-row md:mx-1 p-5 md:p-2 rounded-xl shadow-lg ">
              <div className="flex flex-col w-full gap-2">
                <div className="text-xl  font-bold text-center">
                  Payment Details
                </div>
                <div className="border-[1px] rounded-lg flex flex-col gap-2 border-t-0 ">
                  <div className="flex flex-row gap-1 rounded-lg justify-start items-center w-full bg-[#1A7DC1] text-white p-2 rounded-b-none">
                    <div className="w-1/2 text-[10px]  font-bold">Bag Type</div>
                    <div className="w-1/4 text-[10px] "># of bags</div>
                    <div className="w-1/4 text-[10px] ">Amount</div>
                  </div>

                  {/* <div className='border-t-2 rounded-lg w-full'></div> */}

                  <div className="flex flex-row px-2 justify-start items-center w-full ">
                    <div className="w-1/2 text-[10px] ">
                      {" "}
                      <div className="font-bold">Check in bag </div>
                      <div>Extra weight 5kg</div>
                    </div>
                    <div className="w-1/4 text-[10px]">1</div>
                    <div className="w-1/4 text-[10px] text-right">₹ 499</div>
                  </div>

                  <div className="border-t-2 rounded-lg w-full"></div>
                  <div className="flex flex-row px-2 justify-start items-center w-full ">
                    <div className="w-1/2 text-[10px] ">
                      {" "}
                      <div className="font-bold">Fragile</div>
                    </div>
                    <div className="w-1/4 text-[10px]">2</div>
                    <div className="w-1/4 text-[10px] text-right">₹ 299</div>
                  </div>

                  <div className="border-t-2 rounded-lg w-full"></div>
                  <div className="flex flex-row px-2 justify-start items-center w-full ">
                    <div className="w-1/2 text-[10px] ">
                      {" "}
                      <div className="font-bold">Gst</div>
                      <div>Extra weight 5kg</div>
                    </div>
                    <div className="w-1/4 text-[10px]"></div>
                    <div className="w-1/4 text-[10px] text-right">₹ 12</div>
                  </div>
                </div>

                <div className="flex flex-row justify-between p-4">
                  <div className="text-sx font-bold">Total Cost</div>
                  <div className="font-bold text-lg lg:text-2xl text-[#F47521]">
                    ₹ 1046
                  </div>
                </div>

                <div className="bg-[#F47521] text-white text-center p-3 font-bold text-xs w-full rounded-full cursor-pointer">
                  Book Now
                </div>
              </div>
            </div>

            <div className="w-full min-w-[290px]  bg-white flex flex-col lg:flex-row md:mx-1 p-5 md:p-2 rounded-xl shadow-lg ">
              <div className="flex flex-col w-full gap-4">
                <div className="text-xl  font-bold text-center">
                  Insurance Details
                </div>

                <div className="border-2 rounded-lg flex flex-col gap-3 ">
                  <div className="flex flex-row justify-start items-center w-full pl-3 md:pl-2 pt-3">
                    <div className="w-1/2 text-[11px] ">
                      <div className="font-bold">Total Value</div>
                      <div>*includes all charges as applicable</div>
                    </div>
                    <div className="w-1/2 text-[11px] text-right">₹ 313.95</div>
                  </div>
                  <div className="border-t-2 rounded-lg w-full"></div>
                  <div className="flex flex-row justify-start items-center w-full pl-3 md:pl-2 pt-3">
                    <div className="w-1/2 text-[11px] font-bold">
                      Policy No.
                    </div>
                    <div className="w-1/2 text-[11px] text-right">
                      2455/0009084/000/00
                    </div>
                  </div>
                  <div className="border-t-2 rounded-lg w-full"></div>

                  <div className="flex flex-row justify-start items-center w-full pl-3 md:pl-2 py-3">
                    <div className="w-1/2 text-[11px] font-bold">
                      Insurance Chain Number
                    </div>
                    <div className="w-1/2 text-[11px] text-right whitespace-nowrap ">
                      90SDF908PHASDFHOI
                    </div>
                  </div>
                </div>

                <div className="text-xs font-bold text-center">
                  Standard Insurance{" "}
                  <Button size="small">
                    {" "}
                    <span className="text-[#1A7DC1]">Terms & Conditions</span>
                  </Button>
                </div>

                <div className="bg-[#F47521] text-white text-center p-3 font-bold text-xs w-full rounded-full cursor-pointer">
                  Procedure To Claim Insurance
                </div>
              </div>
            </div>
            <div className="bg-white flex flex-col lg:flex-row md:mx-1 p-5 rounded-xl shadow-lg w-full min-w-[290px]  h-[260px] justify-center items-center">
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
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default OrderDetail;
