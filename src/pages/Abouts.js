import React, { useState } from "react";
import Slider from "../Images/Main/slider1.png";
import Business from "../Images/About/business.png";
import Baddges from "../Images/About/baddges.png";
import Families from "../Images/About/families.png";
import Issues from "../Images/About/issues.png";
import Door from "../Images/About/door.png";
import Insurance from "../Images/About/insurance.png";
import Packing from "../Images/About/packing.png";
import Tracking from "../Images/About/tracking.png";
import Secure from "../Images/About/secure.png";
import Delivery from "../Images/About/delivery.png";
import Support from "../Images/About/support.png";
import Cancel from "../Images/About/cancel.png";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import Team1 from "../Images/About/team1.png";
import Team2 from "../Images/About/team2.png";
import Team3 from "../Images/About/team3.png";
import Team4 from "../Images/About/team4.png";
import Team5 from "../Images/About/team5.png";
import Team6 from "../Images/About/team6.png";
import Team7 from "../Images/About/team7.png";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import coverage1 from "../Images/About/coverage1.png";
import coverage2 from "../Images/About/coverage2.png";
import coverage3 from "../Images/About/coverage3.png";
import coverage4 from "../Images/About/coverage4.png";
import coverage5 from "../Images/About/coverage5.png";
import coverage6 from "../Images/About/coverage6.png";
import { Button, Hidden } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useNavigate } from "react-router-dom";
import Footer from "../component/Footer";

function Abouts() {
  const navigate = useNavigate();
  const smallScreen = useMediaQuery("(max-width:768px)");
  const [active, setActive] = useState(0);
  return (
    <div className="w-full overflow-hidden">
      <div className="w-full ">
        <img
          className="relative h-[200px] md:h-[350px]"
          src={Slider}
          width="100%"
          alt=""
        />
        <div className="absolute top-[130px] md:top-[210px] w-full">
          <div className="lg:w-[35%] md:w-[60%] text-center w-full  text-white md:text-left md:ml-[100px]  lg:ml-[200px]">
            <div className=" text-2xl md:text-7xl mt-2 inset-x-0 md:inset-x-none md:ml-[100px]  lg:ml-[200px] absolute md:-top-[63px] -top-[30px] font-bold  z-20 ">
              CarterX{" "}
            </div>
            <div className=" bg-[#F47521] border-0 mb-2 md:mb-5 bottom-2 md:w-[265px] w-[90px] mx-auto md:mx-0 text-center p-0.5 md:p-1 "></div>

            <div className="text-lg md:text-5xl font-bold">
              Your Personalized Baggage Porter
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#EEEEEE] w-full ">
        {/* section1 */}
        <div className="flex flex-col items-center justify-center gap-2">
          <div className="mt-[40px] font-bold text-2xl md:text-4xl ">
            {" "}
            Effortless Air Travel
          </div>
          <div className=" font-normal text-base md:text-2xl ">
            Hassle free Baggage Transfer to and from Airport
          </div>
        </div>
        <div className="flex mt-3 flex-col md:flex-row justify-center gap-3 p-2     ">
          <div className="flex flex-col gap-2 p-4 bg-white  shadow-lg rounded-xl h-auto md:w-1/2 lg:w-1/3">
            <div>
              <img src={Business} />
            </div>
            <div className="font-bold text-2xl">
              Care for your <span className="text-[#F47521]">Business</span>
            </div>
            <div className="font-normal text-base">
              Stop stressing about your Baggage and let us care for it while
              attending to your business in style. We at CarterX also pick up
              your Shopping items from your retail stores and deliver directly
              to you.
            </div>
          </div>
          <div className="flex flex-col gap-2 p-4 bg-white shadow-lg rounded-xl h-auto md:w-1/2 lg:w-1/3">
            <div>
              <img src={Baddges} />
            </div>
            <div className="font-bold text-2xl">
              Care for your <span className="text-[#F47521]">Baddges</span>
            </div>
            <div className="font-normal text-base">
              No searching for trolleys, pushing or lugging yourself out from
              your vehicle. We at CarterX help you transfer your baggage to and
              from your airport
            </div>
          </div>
        </div>
        <div className="flex mt-1 flex-col  md:flex-row p-2  justify-center gap-3">
          <div className="flex flex-col gap-2 p-4 bg-white shadow-lg rounded-xl h-auto md:w-1/2 lg:w-1/3">
            <div>
              <img src={Families} />
            </div>
            <div className="font-bold text-2xl">
              Care for your <span className="text-[#F47521]">Families</span>
            </div>
            <div className="font-normal text-base">
              Travelling with kids or a large family can mean chaos? Let CarterX
              handle the prams/buggies and suitcases. Get them delivered
              personally at the departure gate or hand them over at the arrival
              gate, travel stress free.
            </div>
          </div>
          <div className="flex flex-col gap-2 p-4 bg-white  shadow-lg rounded-xl h-auto md:w-1/2 lg:w-1/3">
            <div>
              <img src={Issues} />
            </div>
            <div className="font-bold text-2xl">
              Weight <span className="text-[#F47521]">Issues</span>
            </div>
            <div className="font-normal text-base">
              Too many and too heavy? We are here to handle your baggage weight
              and count for you. At CarterX we accept baggage in almost all
              shapes and sizes. Our quotes are completely free.
            </div>
          </div>
        </div>
        {/* //section2 */}
        <div className="flex flex-col items-center justify-center gap-2">
          <div className="mt-[40px] font-bold text-2xl md:text-4xl">
            {" "}
            Effortless Cargo Transfers
          </div>
          <div className="font-normal text-base md:text-2xl">
            Hassle free Cargo Transfer
          </div>
        </div>
        <div className="flex mt-3 flex-col  md:flex-row p-2 items-center justify-center gap-3">
          <div className="flex flex-col gap-2 p-4 bg-white  shadow-lg rounded-xl h-auto md:w-1/2 lg:w-1/3">
            <div>
              <img src={Business} />
            </div>
            <div className="font-bold text-2xl">
              Care for your <span className="text-[#F47521]">Business</span>
            </div>
            <div className="font-normal text-base">
              Aenean non accumsan ante. Duis et risus accumsan sem tempus porta
              nec sit amet est. Sed ut euismod quam. Suspendisse potenti.
              Aliquam fringilla orci tincidunt, ullamcorper erat in, malesuada
              metus.
            </div>
          </div>
          <div className="flex flex-col gap-2 p-4 bg-white shadow-lg rounded-xl h-auto md:w-1/2 lg:w-1/3">
            <div>
              <img src={Baddges} />
            </div>
            <div className="font-bold text-2xl">
              Care for your <span className="text-[#F47521]">Baddges</span>
            </div>
            <div className="font-normal text-base">
              Aenean non accumsan ante. Duis et risus accumsan sem tempus porta
              nec sit amet est. Sed ut euismod quam. Suspendisse potenti.
              Aliquam fringilla orci tincidunt, ullamcorper erat in, malesuada
              metus.
            </div>
          </div>
        </div>
        <div className="flex mt-1 flex-row p-2 items-center justify-center gap-3">
          <div className="flex flex-col gap-2 p-4 bg-white shadow-lg rounded-xl h-auto md:w-1/2 lg:w-1/3">
            <div>
              <img src={Issues} />
            </div>
            <div className="font-bold text-2xl">
              Weight <span className="text-[#F47521]">Issues</span>
            </div>
            <div className="font-normal text-base">
              Aenean non accumsan ante. Duis et risus accumsan sem tempus porta
              nec sit amet est. Sed ut euismod quam. Suspendisse potenti.
              Aliquam fringilla orci tincidunt, ullamcorper erat in, malesuada
              metus.
            </div>
          </div>
        </div>
        {/* section3 */}
        <div className="flex flex-col items-center justify-center gap-2">
          <div className="mt-[40px] font-bold text-2xl md:text-4xl">
            {" "}
            Effortless Hyperlocal Transfers
          </div>
          <div className="font-normal text-base md:text-2xl">
            Hassle free Local Transfer
          </div>
        </div>
        <div className="flex mt-3 flex-col  md:flex-row p-2 justify-center gap-3">
          <div className="flex flex-col gap-2 p-4 bg-white shadow-lg rounded-xl h-auto md:w-1/2 lg:w-1/3">
            <div>
              <img src={Business} />
            </div>
            <div className="font-bold text-2xl">
              Care for your <span className="text-[#F47521]">Business</span>
            </div>
            <div className="font-normal text-base">
              Aenean non accumsan ante. Duis et risus accumsan sem tempus porta
              nec sit amet est. Sed ut euismod quam. Suspendisse potenti.
              Aliquam fringilla orci tincidunt, ullamcorper erat in, malesuada
              metus.
            </div>
          </div>
          <div className="flex flex-col gap-2 p-4 bg-white shadow-lg rounded-xl h-auto md:w-1/2 lg:w-1/3">
            <div>
              <img src={Baddges} />
            </div>
            <div className="font-bold text-2xl">
              Care for your <span className="text-[#F47521]">Baddges</span>
            </div>
            <div className="font-normal text-base">
              Aenean non accumsan ante. Duis et risus accumsan sem tempus porta
              nec sit amet est. Sed ut euismod quam. Suspendisse potenti.
              Aliquam fringilla orci tincidunt, ullamcorper erat in, malesuada
              metus.
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#EEEEEE] w-full py-4">
        <div className="flex flex-wrap md:flex-nowrap flex-row  sm:px-4  md:p-2 justify-center md:items-center gap-2 pt-5 ">
          <div className="flex flex-col p-2 gap-3 w-[150px] h-[130px] bg-white text-center justify-center items-center rounded-xl shadow-lg">
            <div>
              <img src={Door} />
            </div>
            <div className="font-bold text-base">Door Step Pickup</div>
          </div>
          <div className="flex flex-col p-2 gap-3 w-[150px] h-[130px]  bg-white justify-center items-center text-center rounded-xl shadow-lg">
            <div>
              <img src={Insurance} />
            </div>
            <div className="font-bold text-base ">Free Insurance</div>
          </div>
          <div className="flex flex-col p-2 gap-3 w-[150px] h-[130px] bg-white text-center justify-center items-center rounded-xl shadow-lg">
            <div>
              <img src={Packing} />
            </div>
            <div className="font-bold text-base ">Tamper Resistant Packing</div>
          </div>
          <div className="flex flex-col p-2 gap-3 w-[150px] h-[130px]  bg-white justify-center items-center text-center rounded-xl shadow-lg">
            <div>
              <img src={Tracking} />
            </div>
            <div className="font-bold text-base">Live Tracking</div>
          </div>
        </div>
        {/* section2 */}
        <div className="flex flex-wrap md:flex-nowrap flex-row sm:px-4 md:p-2 justify-center md:items-center gap-2 pt-2 ">
          <div className="flex flex-col p-2 gap-3 w-[150px] h-[130px] bg-white text-center justify-center items-center rounded-xl shadow-lg">
            <div>
              <img src={Secure} />
            </div>
            <div className="font-bold text-base">Secure Handling</div>
          </div>
          <div className="flex flex-col p-2 gap-3 w-[150px] h-[130px]  bg-white justify-center items-center text-center rounded-xl shadow-lg">
            <div>
              <img src={Delivery} />
            </div>
            <div className="font-bold text-base ">Door Step Delivery</div>
          </div>
          <div className="flex flex-col p-2 gap-3 w-[150px] h-[130px] bg-white text-center justify-center items-center rounded-xl shadow-lg">
            <div>
              <img src={Support} />
            </div>
            <div className="font-bold text-base ">24/7 Support</div>
          </div>
          <div className="flex flex-col p-2 gap-3 w-[150px] h-[130px]  bg-white justify-center items-center text-center rounded-xl shadow-lg">
            <div>
              <img src={Cancel} />
            </div>
            <div className="font-bold text-base">Free Cancellation</div>
          </div>
        </div>
        <div className="relative  sm:mx-2 md:w-11/12 lg:w-10/12 bg-[#1A7DC1] mb-2 mt-8 md:mx-auto rounded-lg py-5 lg:px-5 md:gap-2">
          <div className="flex flex-col justify-center items-center py-4 gap-0.5 md:gap-4 md:px-2 lg:px-5">
            <div className="font-bold sm:text-2xl md:text-4xl text-white">
              See How it Works
            </div>
            <div className="flex flex-row  sm:gap-1 md:gap-2 lg:gap-4 pt-2">
              <div
                className={`${
                  active == 0 && "!bg-white"
                } bg-[#1A7DC1] rounded-full mt-2 border-2 border-white`}
                onClick={() => setActive(0)}
              >
                <div
                  className={`${
                    active == 0 && "!text-[#F47521]"
                  } text-white  sm:p-1 md:p-2 lg:p-4 font-bold sm:text-base cursor-pointer md:text-2xl text-center`}
                >
                  Air Transfer
                </div>
              </div>
              <div
                className={`${
                  active == 1 && "!bg-white"
                } bg-[#1A7DC1] rounded-full mt-2 border-2 border-white`}
                onClick={() => setActive(1)}
              >
                <div
                  className={`${
                    active == 1 && "!text-[#F47521]"
                  }  text-white  sm:p-1 md:p-2 lg:p-4 font-bold sm:text-base cursor-pointer md:text-2xl text-center`}
                >
                  Rush Chargo
                </div>
              </div>
              <div
                className={`${
                  active == 2 && "!bg-white"
                } bg-[#1A7DC1] rounded-full mt-2 border-2 border-white`}
                onClick={() => setActive(2)}
              >
                <div
                  className={`${
                    active == 2 && "!text-[#F47521]"
                  } text-white sm:p-1 md:p-2 lg:p-4 font-bold sm:text-base cursor-pointer md:text-2xl text-center`}
                >
                  Rush Local
                </div>
              </div>
            </div>
            {active == 0 && (
              <p className="sm:text-base md:text-xl font-normal text-white gap-2 text-center mx-1 md:mx-5 pt-2">
                With CarterPorter's CarterX, your Baggage is efficiently picked
                up and securely transported from the first mile to the last.
                Book, Move and Track your Baggage at the tip of your fingers on
                your smart phone, tablet or PC and stay updated throughout the
                service. Your Baggage is waiting ahead of you making your travel
                light, stress free without the weight and chaos.
              </p>
            )}
            {active == 1 && (
              <p className=" sm:text-base md:text-xl font-normal text-white gap-2 text-center mx-1 md:mx-5 pt-2">
                Aenean non accumsan ante. Duis et risus accumsan sem tempus
                porta nec sit amet est. Sed ut euismod quam. Suspendisse
                potenti. Aliquam fringilla orci tincidunt, ullamcorper erat in,
                malesuada metus.Aenean non accumsan ante. Duis et risus accumsan
                sem tempus porta nec sit amet est. Sed ut euismod quam.
                Suspendisse potenti.{" "}
              </p>
            )}
            {active == 2 && (
              <p className="sm:text-base md:text-xl font-normal text-white gap-2 text-center mx-1 md:mx-5 pt-2">
                Suspendisse potenti. Aliquam fringilla orci tincidunt,
                ullamcorper erat in, malesuada metus.Aenean non accumsan ante.
                Duis et risus accumsan sem tempus porta nec sit amet est. Sed ut
                euismod quam. Suspendisse potenti. Aenean non accumsan ante.
                Duis et risus accumsan sem tempus porta nec sit amet est. Sed ut
                euismod amet est. Sed ut euismod quam. Suspendisse potenti.{" "}
              </p>
            )}
            <button
              className="bg-[#F47521] px-5 py-1.5 md:px-10 md:py-2 lg:px-14 lg:py-3 rounded-full font-bold text-lg text-white md:mb-1 lg:mb-5"
              onClick={() => navigate("/privacy")}
            >
              {" "}
              Call Us{" "}
            </button>
            <div
              className="absolute -bottom-6 flex flex-row justify-center items-center bg-white rounded-full 
            mt-2 px-2 border-2 border-white"
            >
              <Button>
                <PlayCircleIcon fontSize="large" className="text-[#F47521]" />
                <div className="text-black p-0 font- normal text-xl text-center ">
                  See Video
                </div>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#EEEEEE] py-7">
        {smallScreen ? (
          Hidden
        ) : (
          <>
            <div className=" flex flex-col justify-center items-center gap-3 pt-5">
              <h2 className="font-bold text-4xl ">Meet the Team</h2>
              <p className="text-2xl font-normal">
                Aliquam fringilla orci tincidunt, ullamcorper erat in, malesuada
                metus.
              </p>
            </div>
            <div className="  flex flex-row justify-center md:w-11/12 lg:w-10/12 mx-auto flex-wrap md:gap-2 lg:gap-3 mt-10">
              <div className="bg-white flex flex-col w-auto gap-2 p-2 rounded-3xl">
                <img src={Team1} alt="" className="lg:w-[250px] md:w-[220px]" />
                <div className="mx-2 font-bold text-xl">John Doe</div>
                <div className="flex flex-row justify-between mx-2 font-normal text-base">
                  <div className="whitespace-nowrap mb-1 ">
                    Co-Founder & CEO
                  </div>
                  <LinkedInIcon />
                </div>
              </div>
              <div className="bg-white flex flex-col w-auto gap-2 p-2 rounded-3xl">
                <img src={Team2} alt="" className="lg:w-[250px] md:w-[220px]" />
                <div className="mx-2 font-bold text-xl">John Doe</div>
                <div className="flex flex-row justify-between mx-2 font-normal text-base">
                  <div className="whitespace-nowrap mb-1 ">
                    Co-Founder & CEO
                  </div>
                  <LinkedInIcon />
                </div>
              </div>
              <div className="bg-white flex flex-col w-auto gap-2 p-2 rounded-3xl">
                <img src={Team3} alt="" className="lg:w-[250px] md:w-[220px]" />
                <div className="mx-2 font-bold text-xl">John Doe</div>
                <div className="flex flex-row justify-between mx-2 font-normal text-base">
                  <div className="whitespace-nowrap mb-1 ">
                    Co-Founder & CEO
                  </div>
                  <LinkedInIcon />
                </div>
              </div>
              <div className="bg-white flex flex-col w-auto gap-2 p-2 rounded-3xl">
                <img src={Team4} alt="" className="lg:w-[250px] md:w-[220px]" />
                <div className="mx-2 font-bold text-xl">John Doe</div>
                <div className="flex flex-row justify-between mx-2 font-normal text-base">
                  <div className="whitespace-nowrap mb-1 ">
                    Co-Founder & CEO
                  </div>
                  <LinkedInIcon />
                </div>
              </div>
              <div className="bg-white flex flex-col w-auto gap-2 p-2 rounded-3xl">
                <img src={Team5} alt="" className="lg:w-[250px] md:w-[220px]" />
                <div className="mx-2 font-bold text-xl">John Doe</div>
                <div className="flex flex-row justify-between mx-2 font-normal text-base">
                  <div className="whitespace-nowrap mb-1 ">
                    Co-Founder & CEO
                  </div>
                  <LinkedInIcon />
                </div>
              </div>
              <div className="bg-white flex flex-col w-auto gap-2 p-2 rounded-3xl">
                <img src={Team6} alt="" className="lg:w-[250px] md:w-[220px]" />
                <div className="mx-2 font-bold text-xl">John Doe</div>
                <div className="flex flex-row justify-between mx-2 font-normal text-base">
                  <div className="whitespace-nowrap mb-1 ">
                    Co-Founder & CEO
                  </div>
                  <LinkedInIcon />
                </div>
              </div>
              <div className="bg-white flex flex-col w-auto gap-2 p-2 rounded-3xl">
                <img src={Team7} alt="" className="lg:w-[250px] md:w-[220px]" />
                <div className="mx-2 font-bold text-xl">John Doe</div>
                <div className="flex flex-row justify-between mx-2 font-normal text-base">
                  <div className="whitespace-nowrap mb-1 ">
                    Co-Founder & CEO
                  </div>
                  <LinkedInIcon />
                </div>
              </div>
            </div>
          </>
        )}
        <div className="flex flex-col justify-center gap-2 mx-auto sm:mt-2 md:mt-10">
          <div className="flex flex-row gap-2 justify-center items-center">
            <div className="font-bold sm:text-2xl md:text-4xl">
              Media Coverages{" "}
            </div>
            <InfoOutlinedIcon />
          </div>
          <div className="flex flex-row justify-center md:w-11/12 lg:w-10/12 md:mx-auto flex-wrap mt-3 gap-2">
            <img
              src={coverage1}
              alt=""
              className="w-[150px] md:w-[180px] h-[150px]"
            />
            <img
              src={coverage2}
              alt=""
              className="w-[150px] md:w-[180px] h-[150px]"
            />
            <img
              src={coverage3}
              alt=""
              className="w-[150px] md:w-[180px] h-[150px]"
            />
            <img
              src={coverage4}
              alt=""
              className="w-[150px] md:w-[180px] h-[150px]"
            />
            <img
              src={coverage5}
              alt=""
              className="w-[150px] md:w-[180px] h-[150px]"
            />
            <img
              src={coverage6}
              alt=""
              className="w-[150px] md:w-[180px] h-[150px]"
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Abouts;
