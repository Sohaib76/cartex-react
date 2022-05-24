import React from "react";
import Footer from "../component/Footer";

function Cancellation() {
  return (
    <div className="w-full bg-[#EEEEEE] overflow-hidden ">
      <div className="w-10/12 flex flex-col mx-auto pt-8">
        <h2 className="font-bold text-4xl">Cancellation & Refund Policy</h2>
        <p className="font-normal text-lg py-8">
          Cancellation of orders can be made under My Trips of your account
        </p>
        <div className="bg-white  p-4  md:p-6 mb-10  rounded-2xl">
          <h2 className="font-bold text-2xl py-4 md:py-6">
            AirPort/City to City Transfer Local - For orders towards the
            Airport/City of Service:
          </h2>
          <table class="table-fixed align-top mx-auto w-full md:w-full  md:p-0">
            <colgroup>
              <col style={{ width: "50%" }} />
              <col style={{ width: "50%" }} />
            </colgroup>
            <tbody>
              <tr className="align-top ">
                <td className="border border-collapse w-1/2 px-2 py-2">
                  Up to 24 hours before start time of scheduled slot
                </td>
                <td className="border border-collapse w-1/2 px-2 py-2">
                  No cancellation Fee. 100% refund back to source account
                </td>
              </tr>
              <tr className="align-top">
                <td className="border border-collapse px-2 w-1/2 py-2">
                  Between 24 Hours to 12 Hours of start time of schedule Slot.
                </td>
                <td className="border border-collapse px-2 w-1/2  py-2">
                  The order can be rescheduled to another day of travel of up to
                  5 days for self or to another nominated user. Please write to
                  customercare @carterporter ,in with Order# and the revised
                  date of service and time of departure at least 36 hours before
                  time of departure
                </td>
              </tr>
              <tr className="align-top">
                <td className="border border-collapse px-2 w-1/2  py-2">
                  Under 12 hours of start time of schedule Slot or no update
                  from passenger on location information up to 16 hours from
                  departure time.No response from the location contact or
                  customer at pick up location, after 15 minutes of waiting will
                  be considered as cancelled after slot time schedule.
                </td>
                <td className="border border-collapse px-2 w-1/2 py-2">
                  The cancellation charges are 100% of order amount citing no
                  response at location
                </td>
              </tr>
              <tr className="align-top">
                <td className="border border-collapse px-2 w-1/2 py-2">
                  Post Pick up: No show at the airport after 6 hours Gate meet
                  time.
                </td>
                <td className="border border-collapse px-2 w-1/2 py-2">
                  Reschedule order will be made with same order value and
                  rescheduled back for delivery at the location of pick up.
                  Local delivery to another location or delivery at the airport
                  again same order value charges will apply for rescheduled
                  order.
                </td>
              </tr>
              <tr className="align-top">
                <td className="border border-collapse px-2 w-1/2 py-2">
                  Post Pick up: Delayed show of up to 10 hours after gate meet
                  time.
                </td>
                <td className="border border-collapse px-2 w-1/2 py-2">
                  Reschedule order will be made with local delivery charges will
                  apply for rescheduled order for luggage storage services.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Cancellation;
