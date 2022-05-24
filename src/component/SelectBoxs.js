import React, { useState } from "react";

export default function SelectBoxs({
  toggler,
  setToggler,
  toggle,
  data,
  topp,
  extraData,
}) {
  const [eventType, setEventType] = useState(data);
  const [xraData, setoType] = useState(extraData);
  return (
    <div className="w-full ">
      <div className="  w-full">
        <div
          className="bg-transparent outline-0 w-full font-bold text-lg lg:text-lg border-[#fff] text-black cursor-pointer"
          onClick={() => setToggler(true)}
        >
          <h3 defaultValue={eventType}>
            {eventType} <span className="text-[#707070]"> {xraData}</span>{" "}
          </h3>
          <div className={``}></div>
        </div>
        {toggler && (
          <div
            className={`absolute flex flex-col z-10 inset-x-0 top-[80px] mt-2 w-full overflow-hidden  rounded-2xl text-xl font-normal shadow-2xl border-primary bg-white ${
              topp && "top-[61px]"
            }`}
          >
            {toggle.map((item, i) => (
              <>
                <h2
                  className="cursor-pointer indent-4 py-2 hover:bg-[#fdeadf] hover:text-[#F47521] text-black text-[15px]"
                  onClick={() => {
                    setEventType(item);
                    setToggler(false);
                    setoType("");
                  }}
                >
                  {item}
                </h2>
                <hr />
              </>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
