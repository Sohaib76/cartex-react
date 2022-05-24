import React, { useState } from "react";
import Divider from "@mui/material/Divider";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "@mui/material";
import ModalPopup from "./UI/ModalPopup";
import OrderModal from "./OrderModal";

const OrderTrip = () => {
  const navigate = useNavigate();
  const smallScreen = useMediaQuery("(max-width:768px)");
  const [modal, setModal] = useState(false);
  return (
    <>
      <div className="flex flex-row w-full">
        <div className="bg-white rounded-2xl shadow-lg p-1.5 md:p-8 flex flex-col gap-2 md:gap-5 mb-6 w-full lg:w-3/4 ">
          <div className="flex flex-row whitespace-nowrap justify-between items-center overflow-hidden">
            <h2 className="font-bold text-lg md:text-2xl overflow-hidden ">
              Order No: XYZ0022786581
            </h2>
            <button className="text-[#F47521] font-bold text-lg md:text-2xl border-2 border-[#F47521] rounded-full px-2 md:px-3 py-2 overflow-hidden">
              In Progress
            </button>
          </div>
          <Divider />
          <div className="flex flex-col md:flex-row gap-3">
            <div className="flex flex-col gap-2 md:w-1/2">
              <h3 className="text-[#F47521] text-[15px] font-bold">
                Number of Bags
              </h3>
              <h2 className="font-bold text-2xl ">3</h2>
            </div>
            <div className="flex flex-col gap-2 md:w-1/2">
              <h3 className="text-[#F47521] text-[15px] font-bold">Date</h3>
              <h2 className="font-bold text-2xl ">9th August, 2021</h2>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-3">
            <div className="flex flex-col gap-2 md:w-1/2">
              <h3 className="text-[#F47521] text-[15px] font-bold"> From</h3>
              <h2 className="font-bold text-2xl ">New Delhi</h2>
            </div>
            <div className="flex flex-col gap-2 md:w-1/2">
              <h3 className="text-[#F47521] text-[15px] font-bold">To</h3>
              <h2 className="font-bold text-2xl ">Bangalore Airport</h2>
            </div>
          </div>
          <Divider />
          <div className="flex flex-row justify-between">
            {smallScreen ? (
              <>
                <div className="flex flex-row gap-3">
                  <button
                    onClick={() => navigate("orderdetail")}
                    className="text-white bg-[#1A7DC1] font-bold text-lg border-2 border-[#1A7DC1] rounded-full px-3 py-2"
                  >
                    Order Details
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className="flex flex-row gap-3">
                  <button
                    onClick={() => navigate("orderdetail")}
                    className="text-white bg-[#1A7DC1] font-bold text-lg border-2 border-[#1A7DC1] rounded-full px-3 py-2"
                  >
                    Order Details
                  </button>
                  <button
                    onClick={() => setModal(!modal)}
                    className="text-[#F47521] font-bold text-lg border-2 border-[#F47521] rounded-full px-3 py-2"
                  >
                    Share Feedback
                  </button>
                </div>
                <div className="flex flex-row gap-3">
                  <div className="flex flex-row text-[#F47521] items-center gap-2  ">
                    <CurrencyRupeeIcon fontSize="large" />
                    <h3 className="font-bold text-3xl">1046</h3>
                  </div>
                  <button className="text-white bg-[#F47521] font-bold text-lg border-2 border-[#F47521] rounded-full px-3 py-2">
                    REBOOK
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <ModalPopup modal={modal} setModal={setModal}>
        <OrderModal setModal={setModal} />
      </ModalPopup>
    </>
  );
};

export default OrderTrip;
