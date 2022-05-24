import React from "react";
import Header from "../../Images/Main/Header.png";
import Baggage from "../../Images/Airport/baggage.png";
import Partner from "../../Images/Airport/partner.png";
import City from "../../Images/Airport/city.png";
import Ola from "../../Images/Airport/Ola.png";
import Parcel from "../../Images/Airport/parcel.png";
import Transfer from "../../Images/Airport/transfer.png";
import Interterminal from "../../Images/Airport/Interterminal.png";
import Indigo from "../../Images/Airport/Indigo.png";
import Vistara from "../../Images/Airport/Vistara.png";
import Flyposter from "../../Images/Airport/Flyposter.png";
import Spicejet from "../../Images/Airport/Spicejet.png";
import Group from "../../Images/Airport/Group.png";
import { useNavigate } from "react-router-dom";
import CargoTransfer from "./CargoTransfer";
import CityTransfer from "./CityTransfer";
import Interterminals from "./InterTerminal";
import LocalParcels from "./LocalParcels";
import LocalAirport from "./LocalAirport";
import OlaCarter from "./OlaCarter";
import { useMediaQuery } from "@mui/material";
import Safety from "../../component/Safety";
import Footer from "../../component/Footer";
import PackagesSection from "../../components/PackagesSection";

function Home() {
  const [step, setStep] = React.useState(0);
  const [toggle, setToggle] = React.useState(false);
  const matches = useMediaQuery("(max-width:768px)");
  const navigate = useNavigate();

  console.log("steps", step);
  return (
    <>
      <div className=" w-full !bg-[#EEEEEE] ">
        <div className="relative w-full  ">
          <img className="  md:h-[430px] h-[650px] w-full" src={Header} />
          <div className="  absolute w-full top-[40px] ">
            {matches && (
              <>
                <div className=" w-10/12  mx-auto">
                  <div className=" rounded-2xl px-3 py-2 lg:px-3 lg:py-3 shadow-xl">
                    <div className="w-full ">
                      <div className=" flex flex-col gap-2">
                        <div
                          className={`border-2 rounded-lg   bg-white flex flex-row gap-2 w-full p-1 items-center ${
                            step == 0 && "!border-[#F47521]"
                          }`}
                          onClick={() => {
                            setStep(0);
                            navigate("local");
                          }}
                        >
                          <img src={Baggage} />
                          <h3 className="font-bold text-xs">
                            Airport Transfer
                          </h3>
                        </div>
                        <div
                          className={`border-2 rounded-lg  bg-white flex flex-row gap-2 w-full p-1 items-center ${
                            step == 1 && "!border-[#F47521]"
                          }`}
                          onClick={() => setToggle(!toggle)}
                        >
                          <img src={Partner} />
                          <h3 className="font-bold text-xs">
                            Alliance Partners
                          </h3>
                          <img src={Group} />
                          {toggle && (
                            <div className="absolute rounded-xl top-20   w-[248px]  p-1 shadow-xl bg-white">
                              <div
                                className="flex flex-row gap-1"
                                onClick={() => setToggle(!toggle)}
                              >
                                <img src={Indigo} className="cursor-pointer" />
                                <img src={Vistara} className="cursor-pointer" />
                              </div>
                              <div
                                className="flex flex-row gap-1"
                                onClick={() => setToggle(!toggle)}
                              >
                                <img
                                  src={Flyposter}
                                  className="cursor-pointer"
                                />
                                <img
                                  src={Spicejet}
                                  className="cursor-pointer"
                                />
                              </div>
                            </div>
                          )}
                        </div>{" "}
                        <div
                          className={`border-2 rounded-lg  bg-white flex flex-row gap-2 w-full p-1 items-center ${
                            step == 2 && "!border-[#F47521]"
                          }`}
                          onClick={() => {
                            setStep(2);
                            navigate("localparcel");
                          }}
                        >
                          <img src={Parcel} />
                          <h3 className="font-bold text-xs">Local Parcels</h3>
                        </div>{" "}
                        <div
                          className={`border-2 rounded-lg  bg-white flex flex-row gap-2 w-full p-1 items-center ${
                            step == 3 && "!border-[#F47521]"
                          }`}
                          onClick={() => {
                            setStep(3);
                            navigate("cargotransfer");
                          }}
                        >
                          <img src={Transfer} />
                          <h3 className="font-bold text-xs">Cargo Transfers</h3>
                        </div>{" "}
                        <div
                          className={`border-2 rounded-lg  bg-white flex flex-row gap-2 w-full p-1 items-center ${
                            step == 4 && "!border-[#F47521]"
                          }`}
                          onClick={() => {
                            setStep(4);
                            navigate("citytransfer");
                          }}
                        >
                          <img src={City} />
                          <h3 className="font-bold text-xs">City Transfers</h3>
                        </div>{" "}
                        <div
                          className={`relative border-2 rounded-lg  bg-white flex flex-row gap-2 w-full p-1 items-center ${
                            step == 5 && "!border-[#F47521]"
                          }`}
                          onClick={() => {
                            setStep(5);
                            navigate("interterminal");
                          }}
                        >
                          <img src={Interterminal} />
                          <h3 className="font-bold w-1/2 text-xs">
                            Interterminal Transfers
                          </h3>
                          <h3 className="absolute right-3 top-1 rounded-full text-xs font-bold text-white bg-[#F47521] py-0.5 px-1">
                            NEW!
                          </h3>
                        </div>
                        <div
                          className={`relative border-2 rounded-lg  bg-white flex flex-row gap-2 w-full p-1 items-center ${
                            step == 6 && "!border-[#F47521]"
                          }`}
                          onClick={() => {
                            setStep(6);
                            navigate("olacarter");
                          }}
                        >
                          <img src={Ola} />
                          <h3 className="font-bold text-xs">#olacarter</h3>
                          <h3 className="absolute right-3 top-1 rounded-full text-xs font-bold text-white bg-[#F47521] py-0.5 px-1">
                            NEW!
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
            <div className=" w-full bg-none">
              <div className=" md:w-11/12  lg:w-10/12  mx-auto">
                <div className="bg-white  rounded-2xl px-1 py-2 lg:px-3 lg:py-3 md:flex hidden shadow-xl">
                  <div className="md:flex hidden flex-row gap-2">
                    <div className="w-[230px] lg:w-[240px] flex">
                      <div className="flex flex-col gap-2">
                        <div
                          className={`border-2 pl-2 cursor-pointer rounded-lg flex flex-row gap-2 w-[225px] p-1 items-center ${
                            step == 0 && "!border-[#F47521]"
                          }`}
                          onClick={() => {
                            setStep(0);
                          }}
                        >
                          <img src={Baggage} />
                          <h3 className="font-bold text-[14px]">
                            Airport Baggage Assistance
                          </h3>
                        </div>
                        <div
                          className="relative border-2 pl-2 cursor-pointer rounded-lg flex flex-row   w-[225px] px-1  py-1 items-center"
                          onClick={() => setToggle(!toggle)}
                        >
                          <img src={Partner} />
                          <h3 className="font-bold text-[14px] text-center">
                            Alliance Partners
                          </h3>
                          <img src={Group} className="w-[85px]" />
                          {toggle && (
                            <div className="absolute -top-1 -left-3 w-[225px] p-1 shadow-xl bg-white">
                              <div
                                className="flex flex-row gap-1"
                                onClick={() => setToggle(!toggle)}
                              >
                                <img src={Indigo} className="cursor-pointer" />
                                <img src={Vistara} className="cursor-pointer" />
                              </div>
                              <div
                                className="flex flex-row gap-1"
                                onClick={() => setToggle(!toggle)}
                              >
                                <img
                                  src={Flyposter}
                                  className="cursor-pointer"
                                />
                                <img
                                  src={Spicejet}
                                  className="cursor-pointer"
                                />
                              </div>
                            </div>
                          )}
                        </div>{" "}
                        <div
                          className={`border-2 pl-2 cursor-pointer rounded-lg flex flex-row gap-2 w-[225px] p-1 items-center ${
                            step == 2 && "!border-[#F47521]"
                          }`}
                          onClick={() => {
                            setStep(2);
                          }}
                        >
                          <img src={Parcel} />
                          <h3 className="font-bold text-[14px]">
                            Local Parcels
                          </h3>
                        </div>{" "}
                        <div
                          className={`border-2 pl-2 cursor-pointer rounded-lg flex flex-row gap-2 w-[225px] p-1 items-center ${
                            step == 3 && "!border-[#F47521]"
                          }`}
                          onClick={() => {
                            setStep(3);
                          }}
                        >
                          <img src={Transfer} />
                          <h3 className="font-bold text-[14px]">
                            Cargo Transfers
                          </h3>
                        </div>{" "}
                        <div
                          className={`border-2 pl-2 cursor-pointer rounded-lg flex flex-row gap-2 w-[225px] p-1 items-center ${
                            step == 4 && "!border-[#F47521]"
                          }`}
                          onClick={() => {
                            setStep(4);
                          }}
                        >
                          <img src={City} />
                          <h3 className="font-bold text-[14px]">
                            City Transfers
                          </h3>
                        </div>{" "}
                        <div
                          className={`relative border-2 pl-2 cursor-pointer rounded-lg flex flex-row gap-2 w-[225px] p-1 items-center ${
                            step == 5 && "!border-[#F47521]"
                          }`}
                          onClick={() => {
                            setStep(5);
                          }}
                        >
                          <img src={Interterminal} />
                          <h3 className="font-bold text-[14px]">
                            Interterminal Transfers
                          </h3>
                          <h3 className="absolute right-1 top-1 rounded-full text-xs font-bold text-white bg-[#F47521] py-0.5 px-2">
                            NEW!
                          </h3>
                        </div>
                        <div
                          className={`relative border-2 pl-2 cursor-pointer rounded-lg flex flex-row gap-2 w-[225px] p-1 items-center ${
                            step == 6 && "!border-[#F47521]"
                          }`}
                          onClick={() => {
                            setStep(6);
                          }}
                        >
                          <img src={Ola} />
                          <h3 className="font-bold text-[14px]">#olacarter</h3>
                          <h3 className="absolute right-1 top-1 rounded-full text-xs font-bold text-white bg-[#F47521] py-0.5 px-2">
                            NEW!
                          </h3>
                        </div>
                      </div>
                    </div>
                    <hr className="h-auto w-[1px] bg-[#EEE] " />
                    {step === 0 && <LocalAirport />}
                    {step === 6 && <OlaCarter />}
                    {step === 2 && <LocalParcels />}
                    {step === 3 && <CargoTransfer />}
                    {step === 4 && <CityTransfer />}
                    {step === 5 && <Interterminals />}
                  </div>
                </div>
              </div>
            </div>
            <div className="  w-full py-3 mt-[20px] bg-[#eee]  md:pt-0 overflow-hidden ">
              <div className=" relative  w-11/12 md:w-full mx-auto">
                <PackagesSection />
                <div className="absolute leftcard blur-lg"></div>
                <div className="absolute rightcard blur-lg"></div>
              </div>
            </div>
            <Safety />
            <Footer />

            <div></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
