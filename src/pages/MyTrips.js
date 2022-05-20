import React from "react";
import Footer from "../component/Footer";

import OrderTrip from "../component/OrderTrip";


function MyTrips() {

  return (
    <div className="bg-[#EEEEEE]">
      <div className="flex flex-col  gap-3 w-full px-2 md:w-10/12 md:mx-auto pt-12">
        <h2 className="font-bold text-2xl md:text-4xl pl-2 pb-10 text-center md:text-left" >
          My Trips
        </h2>
    
        <OrderTrip/>
        <OrderTrip/>
        <OrderTrip/>
   
      </div>
      <Footer/>
    </div>
  );
}

export default MyTrips;
