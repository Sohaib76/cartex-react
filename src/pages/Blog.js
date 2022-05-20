import React from "react";
import Slider from "../Images/Main/slider1.png";
import Tour from "../../src/Images/Blog/tour.png";
import Takeoff from "../../src/Images/Blog/takeoff.png";
import Passport from "../../src/Images/Blog/passport.png";
import Train from "../../src/Images/Blog/train.png";
import Friend from "../../src/Images/Blog/friend.png";
import Post1 from "../../src/Images/Blog/post1.png";
import Post2 from "../../src/Images/Blog/post2.png";
import Post3 from "../../src/Images/Blog/post3.png";
import SearchIcon from "@mui/icons-material/Search";
import { Hidden, useMediaQuery } from "@mui/material";
import Footer from "../component/Footer";
function Blog() {

  const smallScreen = useMediaQuery("(max-width:786px)");
  return (
    <div className="w-full h-full bg-[#EEEEEE] ">
      <div className=" w-full ">
        <img className="relative h-[200px] md:h-[350px]" src={Slider} width="100%" alt="" />
       <div className="absolute top-[110px] md:top-[200px] w-full">
       <div className='md:w-[60%] lg:w-[45%]  w-11/12  text-white text-center inset-x-0 mx-auto  '>
                      <div className='absolute text-2xl md:text-5xl mt-2 inset-x-0 -top-[27px]  md:-top-[45px] font-bold  z-20 '>Welcome to Our Blog </div>
                        <div className='bg-[#F47521] border-0 mb-5 mx-auto bottom-2 md:w-[450px] w-[220px] text-center p-1 '></div>

                      <div className='text-lg md:text-3xl font-bold'>Stay updated with the latest news, stories and insights shared by the CarterX Team.</div>
                  </div>
       </div>
        {
          smallScreen?Hidden:<>
          <div className="absolute top-[405px] w-full ">
          <div className="md:w-11/12 lg:w-10/12 px-2 md:px-4 py-4 bg-white rounded-xl shadow-2xl mx-auto">
            <div className=" flex flex-row mx-auto justify-between gap-1 px-0 md:px-2 font-normal md:text-base py-2">
              <div>Travelling</div>
              <div>Tourism</div>
              <div>Flights</div>
              <div>Category 04</div>
              <div>Category 05</div>
              <div>Category 06</div>
              <div>Category 07</div>
              <div>Category 08</div>
            </div>
          </div>
        </div>
          </>
        }
        
        <div className="w-full mt-10 md:mt-20">
          <div className="w-full md:w-11/12 lg:w-10/12 mt-0 md:mt-10 mx-auto">
            <h2 className="text-2xl md:text-4xl w-11/12  font-bold pb-10">Featured</h2>
            <div className="flex flex-col-reverse md:flex-row w-full md:gap-5 lg:gap-10 py-2">
              <div className="flex flex-col w-11/12 mx-auto md:w-8/12 ">
                <div className="bg-white rounded-2xl shadow-xl p-3 mb-2 ">
                  <img src={Tour} className=' h-fit md:h-[300px]' width="100%" />
                  <h2 className="text-lg md:text-2xl font-bold pl-2 py-2 md:py-4">
                    8 of the top trending destinations for travelers to explore
                  </h2>
                  <p className=" px-2 font-baseline text-base">
                    Forget the days of dreaming of trips and holidays abroad,
                    2022 is looking like an optimistic and extraordinary year
                    for travel. Our annual Travel Predictions research* found
                    that nearly two thirds (63%) of travelers say they need to
                    make...
                  </p>
                </div>
                <h2 className=" text-2xl md:text-4xl font-bold py-5">Trending</h2>
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="bg-white rounded-2xl shadow-xl p-3 mb-2 ">
                    <img src={Takeoff} height="100%" width="100%" />
                    <h2 className="text-lg md:text-2xl font-bold pl-2 py-4">
                      8 of the top trending destinations for travelers to
                      explore
                    </h2>
                    <p className=" px-2 font-baseline text-base md:text-2xl">
                      Forget the days of dreaming of trips and holidays abroad,
                      2022 is looking like an optimistic and extraordinary year
                      for travel. Our annual Travel Predictions research* found
                      that nearly two thirds (63%) of travelers say they need to
                      make...
                    </p>
                  </div>
                  <div className="bg-white rounded-2xl shadow-xl p-3 mb-2 ">
                    <img src={Train} height="100%" width="100%" />
                    <h2 className="text-lg md:text-2xl font-bold pl-2 py-4">
                      8 of the top trending destinations for travelers to
                      explore
                    </h2>
                    <p className=" px-2 font-baseline text-base md:text-2xl">
                      Forget the days of dreaming of trips and holidays abroad,
                      2022 is looking like an optimistic and extraordinary year
                      for travel. Our annual Travel Predictions research* found
                      that nearly two thirds (63%) of travelers say they need to
                      make...
                    </p>
                  </div>
                </div>{" "}
                <div className="flex flex-col  md:flex-row gap-4 py-2">
                  <div className="bg-white rounded-2xl shadow-xl p-3 mb-2 ">
                    <img src={Passport} height="100%" width="100%" />
                    <h2 className="text-lg md:text-2xl font-bold pl-2 py-4">
                      8 of the top trending destinations for travelers to
                      explore
                    </h2>
                    <p className=" px-2 font-baseline text-lg md:text-2xl">
                      Forget the days of dreaming of trips and holidays abroad,
                      2022 is looking like an optimistic and extraordinary year
                      for travel. Our annual Travel Predictions research* found
                      that nearly two thirds (63%) of travelers say they need to
                      make...
                    </p>
                  </div>
                  <div className="bg-white rounded-2xl shadow-xl p-3 mb-2 ">
                    <img src={Friend} height="100%" width="100%" />
                    <h2 className="text-lg md:text-2xl font-bold pl-2 py-4">
                      8 of the top trending destinations for travelers to
                      explore
                    </h2>
                    <p className=" px-2 font-baseline text-base md:text-2xl">
                      Forget the days of dreaming of trips and holidays abroad,
                      2022 is looking like an optimistic and extraordinary year
                      for travel. Our annual Travel Predictions research* found
                      that nearly two thirds (63%) of travelers say they need to
                      make...
                    </p>
                  </div>
                </div>
              </div>
              <div className=" w-[300px] p-4 mx-auto md:w-2/5 lg:w-1/3 flex mb-3 flex-col  h-fit gap-2 md:p-2  lg:p-4 bg-white rounded-2xl shadow-xl">
                <h3 className="font-bold text-base">Search</h3>
                <div className="flex flex-row rounded-2xl mb-3 border-2 gap-2 py-2 w-full  px-2">
                  <SearchIcon className="text-[#EEE]" />
                  <div
                    className="w-full "
                  >
                    <input type="text "
                    className=" w-full focus:outline-transparent focus:border-transparent"
                    placeholder="Type Here"/></div>
                </div>
                <h3 className="font-bold text-medium">Recent Posts</h3>
                <div className="flex flex-row gap-2 h-[80px] mb-1 ">
                  <img src={Post1} className="w-1/3 " alt="" />
                  <div className="flex flex-col ">
                    <p className="font-bold text-sm">
                      8 of the top trending destinations for travelers to
                      explore
                    </p>
                    <h5 className="text-sm tex-[#EEE]">3 min ago</h5>
                  </div>
                </div>
                <div className="flex flex-row gap-2 h-[80px] mb-1">
                  <img src={Post2} className="w-1/3" alt="" />
                  <div className="flex flex-col">
                    <p className="font-bold text-sm">
                      8 of the top trending destinations for travelers to
                      explore
                    </p>
                    <h5 className="text-sm tex-[#EEE]">3 min ago</h5>
                  </div>
                </div>
                <div className="flex flex-row gap-2 h-[80px] mb-2">
                  <img src={Post3} className="w-1/3" alt="" />
                  <div className="flex flex-col">
                    <p className="font-bold text-sm">
                      8 of the top trending destinations for travelers to
                      explore
                    </p>
                    <h5 className="text-sm tex-[#EEE]">3 min ago</h5>
                  </div>
                </div>
                <h3 className="font-bold text-medium">Tags</h3>
                <div className="flex flex-row gap-1 flex-wrap pr-2">
                  <button className="bg-[#F47521] text-white text-sm font-normal py-1 px-2 rounded-2xl">
                    Travelling
                  </button>
                  <button className="bg-[#F47521] text-white text-sm font-normal py-1 px-2 rounded-2xl">
                    Tourism
                  </button>
                  <button className="bg-[#F47521] text-white text-sm font-normal py-1 px-2 rounded-2xl">
                   Flights
                  </button>
                  <button className="bg-[#F47521] text-white text-sm font-normal py-1 px-2 rounded-2xl">
                    Tag 01
                  </button>
                  <button className="bg-[#F47521] text-white text-sm font-normal py-1 px-2 rounded-2xl">
                  Tag 02
                  </button>
                  <button className="bg-[#F47521] text-white text-sm font-normal py-1 px-2 rounded-2xl">
                  Tag 03
                  </button>
                  <button className="bg-[#F47521] text-white text-sm font-normal py-1 px-2 rounded-2xl">
                  Tag 04
                  </button>
                  <button className="bg-[#F47521] text-white text-sm font-normal py-1 px-2 rounded-2xl">
                  Tag 05
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Blog;
