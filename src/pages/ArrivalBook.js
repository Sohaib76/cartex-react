import React from "react";
import Footer from "../component/Footer";

function ArrivalBook() {

  return (
    <div className="bg-[#EEEEEE]">
      <div className="flex flex-col  gap-3 w-full px-2 md:w-10/12 md:mx-auto pt-12">
        <h2 className="font-bold text-2xl md:text-4xl pb-10 text-center md:text-left"  >
          Arrival Booking Information
        </h2>
        <div className="bg-white rounded-2xl p-4 md:p-8 flex flex-col gap-5 mb-6 ">
          <h2 className="font-bold text-2xl">Mandatory:</h2>
          <p className="text-lg font-normal ">
            Passenger must certify status of his/her health through the Aarogya
            Setu App. Green/Safe is mandatory for pickup of order and delivery
            of order
          </p>
        </div>
        <div className="bg-white rounded-2xl p-4 md:p-8 flex flex-col gap-5 mb-6 ">
          <h2 className="font-bold text-2xl">
            Arriving passenger needs to meet CarterX personnel before leaving
            the terminal
          </h2>
          <div className="flex flex-col text-lg gap-2 font-normal ">
          <p >
            Booking address can be modified upto 24 hours prior to the slot time
          </p>
          <p >
            Arrival bookings are accepted upto 24 hours prior to the slot time
          </p>
          <p>
            Passenger ID proof is mandatory at the time of pick up at the
            terminal and will be validated on delivery
          </p>
          <p>Bags cannot be added/subtracted once booking is confirmed</p>
          <p>
            Maximum dimension of each bag cannot exceed 319 linear cms ( 81cm
            (H) x 119cm (W) x 119 cm (D) ). Maximum weight can be up to 32/kgs
            per piece.{" "}
          </p>
          <p>Multiple bookings can be made under single PNR</p>
          <p>No charges for excess weight are levied for Arrival passengers</p>
          <p>Upto 2 bags are accepted with each booking</p>
          <p>Customer Care Bookings are confirmed post payment</p>
          <p>
            Delivery will be made based on the slot time. Slot Times are
            prefixed based on your arrival at the airport. Address will be
            collected in detail before delivery
          </p>
          <div className="py-6 flex flex-col gap-2" >
          <p>
            Arrival from 12am - 3pm | Same day delivery between 5pm – 11.55pm
          </p>
          <p>Arrival from 3pm – 12 am|Next day delivery between 7am– 2pm</p>
          </div>
          <p>
            Orders from containment zones will not be delivered as per
            government regulations{" "}
          </p>
          <p>No delivery during curfew times imposed by the government</p>
          <p>All bags of each order will be delivered at the doorstep to minimise exposure. Passenger/household personnel should continue to wear mask while interacting with CarterX personnel at delivery location and the airport</p>
          </div>
        </div>
      </div>
      <Footer/>

    </div>
  );
}

export default ArrivalBook;
