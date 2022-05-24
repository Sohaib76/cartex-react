import React from "react";
import Baggage from "../../src/Images/Airport/baggage.png";
import Partner from "../../src/Images/Airport/partner.png";
import City from "../../src/Images/Airport/city.png";
import Ola from "../../src/Images/Airport/Ola.png";
import Parcel from "../../src/Images/Airport/parcel.png";
import Transfer from "../../src/Images/Airport/transfer.png";
import Interterminal from "../../src/Images/Airport/Interterminal.png";

import Group from "../../src/Images/Airport/Group.png";
import { useNavigate } from "react-router-dom";

function MainAirportTransfer() {
  const [step, setStep] = React.useState(0);
  const navigate = useNavigate();

  console.log("steps", step);
  return (
    <div className="flex flex-row gap-2">
      <div className="w-[230px] lg:w-[240px] flex">
        <div className="flex flex-col gap-2">
          <div
            className={`border-2 rounded-lg flex flex-row gap-2 w-[225px] p-1 items-center ${
              step == 0 && "!border-[#F47521]"
            }`}
            onClick={() => {
              setStep(0);
            }}
          >
            <img src={Baggage} />
            <h3 className="font-bold text-base">Airport Baggage Assistance</h3>
          </div>
          <div
            className={`border-2 rounded-lg flex flex-row gap-2 w-[225px] p-1 items-center ${
              step == 1 && "!border-[#F47521]"
            }`}
            onClick={() => setStep(1)}
          >
            <img src={Partner} />
            <h3 className="font-bold text-base">Alliance Partners</h3>
            <img src={Group} />
          </div>{" "}
          <div
            className={`border-2 rounded-lg flex flex-row gap-2 w-[225px] p-1 items-center ${
              step == 2 && "!border-[#F47521]"
            }`}
            onClick={() => {
              setStep(2);
            }}
          >
            <img src={Parcel} />
            <h3 className="font-bold text-base">Local Parcels</h3>
          </div>{" "}
          <div
            className={`border-2 rounded-lg flex flex-row gap-2 w-[225px] p-1 items-center ${
              step == 3 && "!border-[#F47521]"
            }`}
            onClick={() => {
              setStep(3);
            }}
          >
            <img src={Transfer} />
            <h3 className="font-bold text-base">Cargo Transfers</h3>
          </div>{" "}
          <div
            className={`border-2 rounded-lg flex flex-row gap-2 w-[225px] p-1 items-center ${
              step == 4 && "!border-[#F47521]"
            }`}
            onClick={() => {
              setStep(4);
            }}
          >
            <img src={City} />
            <h3 className="font-bold text-base">City Transfers</h3>
          </div>{" "}
          <div
            className={`border-2 rounded-lg flex flex-row gap-2 w-[225px] p-1 items-center ${
              step == 5 && "!border-[#F47521]"
            }`}
            onClick={() => {
              setStep(5);
            }}
          >
            <img src={Interterminal} />
            <h3 className="font-bold text-base">Interterminal Transfers</h3>
          </div>
          <div
            className={`border-2 rounded-lg flex flex-row gap-2 w-[225px] p-1 items-center ${
              step == 6 && "!border-[#F47521]"
            }`}
            onClick={() => {
              setStep(6);
            }}
          >
            <img src={Ola} />
            <h3 className="font-bold text-base">#olacarter</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainAirportTransfer;
