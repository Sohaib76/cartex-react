import React from "react";
import slider from "../Images/Main/slider2.png";
import InfoIcon from "@mui/icons-material/Info";
import city1 from "../../src/Images/Contact/city1.png";
import city2 from "../../src/Images/Contact/city2.png";
import city3 from "../../src/Images/Contact/city3.png";
import city4 from "../../src/Images/Contact/city4.png";
import PackagesSection from "../components/PackagesSection";
import useMediaQuery from "@mui/material/useMediaQuery";
import Footer from "../component/Footer";

function Contact() {
  const smallScreen = useMediaQuery("(max-width:850px)");
  return (
    <>
      <div className="w-full overflow-hidden bg-[#EEE] pb-9">
        <div className="relative h-[650px] md:h-[600px] w-full ">
          <img className=" h-full " src={slider} width="100%" alt="" />
        </div>
        <div className="absolute top-[80px] md:top-[100px] w-full ">
          {smallScreen ? (
            <>
              <div className="w-10/12  flex gap-7 flex-row mx-auto">
                <div className="w-full  md:w-8/12 mx-auto flex flex-col gap-3">
                  <div className="md:w-[3/4] w-11/12  text-white text-center mx-auto ">
                    <div className="text-2xl md:text-5xl mt-2 relative  z-20 ">
                      Contact Us
                    </div>
                    <div className="bg-[#F47521] border-0 mb-2 md:mb-5 mx-auto bottom-2 w-[120px] md:w-[250px] lg:w-[250px]   p-1 "></div>

                    <div className="visible">
                      Feel free to contact us for all your queries
                    </div>
                  </div>
                  <div className=" flex flex-col mt-7 gap-2">
                    <div className="bg-[#fff] shadow-2xl py-2 px-4 rounded-2xl">
                      <div className="flex flex-col gap-2">
                        <p className="text-start text-[#F47521] font-bold text-base w-1/4">
                          General Queries
                        </p>
                        <p className="text-right text-black font-bold text-xl">
                          +91-911 063 5588
                        </p>
                      </div>
                    </div>
                    <div className="bg-[#fff] shadow-2xl py-2 px-4  rounded-2xl">
                      <div className="flex flex-col gap-2">
                        <p className="text-start text-[#F47521] font-bold text-base w-10/12">
                          Door Step Baggage Checkin Service
                        </p>
                        <p className="text-right text-black font-bold text-xl">
                          +91-911 063 5588
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className=" flex flex-col gap-2">
                    <div className="bg-[#fff] shadow-2xl py-2 px-4 rounded-2xl">
                      <div className="flex flex-col gap-2">
                        <p className="text-start text-[#F47521] font-bold text-base w-1/4">
                          Mishandled Luggage
                        </p>
                        <p className="text-right text-black font-bold text-xl">
                          +91-911 063 5588
                        </p>
                      </div>
                    </div>
                    <div className="bg-[#fff] shadow-2xl py-2 px-4  rounded-2xl">
                      <div className="flex flex-col gap-2">
                        <p className="text-start text-[#F47521] font-bold text-base w-1/2">
                          Make a booking
                        </p>
                        <p className="text-right text-black font-bold text-xl">
                          +91-911 063 5588
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="w-11/12  flex gap-7 lg:justify-between flex-row mx-auto">
                <div className="w-1/2 mx-auto flex flex-col gap-6 pt-[20px]">
                  <div className="md:w-[520px] w-11/12  text-white  ">
                    <div className=" relative flex flex-col gap-4 w-1/2  ">
                      <div className="text-2xl md:text-7xl mt-2 md:font-bold md:w-[500px]  relative  z-20 ">
                        Contact Us
                      </div>
                      <div className="absolute text-center top-[62px]  bg-[#F47521] border-0 mb-5 mx-auto bottom-2 md:w-[360px] w-[200px]  p-1 "></div>
                    </div>
                    <div className="visible md:font-bold text-[32px] w-[350px]">
                      Feel free to contact us for all your queries
                    </div>
                  </div>
                  <div className=" flex flex-row gap-3">
                    <div className="bg-[#fff] shadow-2xl py-2 px-4  w-[250px] rounded-2xl">
                      <div className="flex flex-col gap-7">
                        <p className="text-start text-[#F47521] font-bold text-base w-1/4">
                          General Queries
                        </p>
                        <p className="text-right text-black font-bold text-xl">
                          +91-911 063 5588
                        </p>
                      </div>
                    </div>
                    <div className="bg-[#fff] shadow-2xl py-2 px-4  w-[250px] rounded-2xl">
                      <div className="flex flex-col gap-7">
                        <p className="text-start text-[#F47521] font-bold text-base w-10/12">
                          Door Step Baggage Checkin Service
                        </p>
                        <p className="text-right text-black font-bold text-xl">
                          +91-911 063 5588
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className=" flex flex-row gap-3">
                    <div className="bg-[#fff] shadow-2xl py-2 px-4  w-[250px] rounded-2xl">
                      <div className="flex flex-col gap-7">
                        <p className="text-start text-[#F47521] font-bold text-base w-1/4">
                          Mishandled Luggage
                        </p>
                        <p className="text-right text-black font-bold text-xl">
                          +91-911 063 5588
                        </p>
                      </div>
                    </div>
                    <div className="bg-[#fff] shadow-2xl py-2 px-4  w-[250px] rounded-2xl">
                      <div className="flex flex-col gap-7">
                        <p className="text-start text-[#F47521] font-bold text-base w-1/2">
                          Make a booking
                        </p>
                        <p className="text-right text-black font-bold text-xl">
                          +91-911 063 5588
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-2/5 mr-auto">
                  <div className="w-10/12 mx-auto flex flex-col gap-4 rounded-2xl bg-white p-4  ">
                    <h3 className="font-bold text-[32px] text-center ">
                      Have a Query?
                    </h3>
                    <div className="flex flex-col gap-2 border-2 rounded-xl p-2 border-[#CCCCCC]">
                      <div className="text-[#F47521] font-bold text-sm">
                        Name
                      </div>
                      <input
                        className="outline-0 text-xl"
                        type="text"
                        placeholder="Enter your name"
                      />
                    </div>
                    <div className="flex flex-col gap-2 border-2 rounded-xl p-2 border-[#CCCCCC]">
                      <div className="text-[#F47521] font-bold text-sm">
                        Email
                      </div>
                      <input
                        className="outline-0 text-xl"
                        type="text"
                        placeholder="Enter your email"
                      />
                    </div>
                    <div className="flex flex-col gap-2 border-2 rounded-xl p-2 border-[#CCCCCC]">
                      <div className="text-[#F47521] font-bold text-sm">
                        Name
                      </div>
                      <textarea
                        className="outline-0 text-xl h-[150px]"
                        placeholder="Write your query here"
                      />
                    </div>
                    <div className="bg-[#F47521] w-8/12 rounded-full py-2  mx-auto">
                      <p className="text-center text-[#FFFFFF] font-bold text-lg">
                        Submit Query
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
        <div className=" w-full mx-auto ">
          {smallScreen ? (
            <>
              <div className="w-11/12 md:w-10/12 mx-auto">
                <div className="w-full my-2">
                  <div className="w-full md:w-8/12 mx-auto flex flex-col gap-4 rounded-2xl shadow-2xl bg-white p-4  ">
                    <h3 className="font-bold text-[32px] text-center ">
                      Have a Query?
                    </h3>
                    <div className="flex flex-col gap-2 border-2 rounded-xl p-2 border-[#CCCCCC]">
                      <div className="text-[#F47521] font-bold text-sm">
                        Name
                      </div>
                      <input
                        className="outline-0 text-xl"
                        type="text"
                        placeholder="Enter your name"
                      />
                    </div>
                    <div className="flex flex-col gap-2 border-2 rounded-xl p-2 border-[#CCCCCC]">
                      <div className="text-[#F47521] font-bold text-sm">
                        Email
                      </div>
                      <input
                        className="outline-0 text-xl"
                        type="text"
                        placeholder="Enter your email"
                      />
                    </div>
                    <div className="flex flex-col gap-2 border-2 rounded-xl p-2 border-[#CCCCCC]">
                      <div className="text-[#F47521] font-bold text-sm">
                        Name
                      </div>
                      <textarea
                        className="outline-0 text-xl h-[150px]"
                        placeholder="Write your query here"
                      />
                    </div>
                    <div className="bg-[#F47521] w-8/12 rounded-full py-2  mx-auto">
                      <p className="text-center text-[#FFFFFF] font-bold text-lg">
                        Submit Query
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="w-11/12 md:w-10/12 mx-auto">
                <div className="flex flex-col justify-center items-center ">
                  <div className="flex flex-row gap-2 items-center">
                    <h3 className="text-[36px] font-bold">
                      Position at Airport
                    </h3>
                    <InfoIcon />
                  </div>
                  <h4 className="text-2xl font-baseline">Find us here</h4>
                </div>
                <div className="flex flex-col gap-3">
                  <h3 className="text-4xl font-bold">Airport Transfer</h3>
                </div>
              </div>

              <div className=" relative w-full">
                <PackagesSection />
                <div className="absolute leftcard blur-lg"></div>
                <div className="absolute rightcard blur-lg"></div>
              </div>
              <div className="w-11/12 md:w-10/12 mx-auto">
                <div className="w-full mt-5 mb-2">
                  <h2 className="text-[36px] pt-4 pb-5 font-bold">
                    City Transfer
                  </h2>
                  <div className="flex flex-row gap-2  flex-wrap  justify-around">
                    <div className="bg-white flex flex-col px-2 py-3 w-[240px] rounded-3xl shadow-xl">
                      <img src={city1} />
                      <h4 className="font-bold text-2xl text-center pt-2">
                        Banglore
                      </h4>
                    </div>{" "}
                    <div className="bg-white flex flex-col px-2 py-3 w-[240px] rounded-3xl shadow-xl">
                      <img src={city2} />
                      <h4 className="font-bold text-2xl text-center pt-2">
                        Hyderabad
                      </h4>
                    </div>{" "}
                    <div className="bg-white flex flex-col px-2 py-3 w-[240px] rounded-3xl shadow-xl">
                      <img src={city3} />
                      <h4 className="font-bold text-2xl text-center pt-2">
                        Mumbai
                      </h4>
                    </div>{" "}
                    <div className="bg-white flex flex-col px-2 py-3 w-[240px] rounded-3xl shadow-xl">
                      <img src={city4} />
                      <h4 className="font-bold text-2xl text-center pt-2">
                        New Dehli
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
