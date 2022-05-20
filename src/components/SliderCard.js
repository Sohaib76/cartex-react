import React from "react";
import { Grid } from "@material-ui/core";


function SliderCard(props) {
  const {
    id,
    image,
    tag,
    title,
    description,
    location,
    departure,
    arrival,
    luggage,
    transfer,
  } = props.packages;
  return (
    <>
          <div className=" pb-2 w-[350px] bg-white rounded-2xl">
        <div className='flex flex-col gap-1.5'>
            <img src={image} className=" relative h-[200px]" />
            <img src={tag} className="absolute pl-3 pt-2" />
            <div className="flex flex-col p-2 gap-2">
              <h3 className="text-xl font-bold">{title}</h3>
              <p className="text-base ">{description}</p>
            </div>
            <div className="flex flex-col px-3 ">
              <h3 className="text-base font-bold">Location at Airport</h3>
              <p className="text-base">{location}</p>
            </div>
            <div className="flex flex-col px-3 ">
              <h3 className="text-base font-bold">Departure</h3>
              <p className="text-base">{departure}</p>
            </div>
            <div className="flex flex-col px-3 ">
              <h3 className="text-base font-bold">Arrivals</h3>
              <p className="text-base">{arrival}</p>
            </div>
            <div className="flex flex-col px-3 ">
              <h3 className="text-base font-bold">Luggage Storage</h3>
              <p className="text-base">{luggage}</p>
            </div>
            <div className="flex flex-col px-3 ">
              <h3 className="text-base font-bold">Inter Terminal Transfer</h3>
              <p className="text-base">{transfer}</p>
            </div>
            </div>
        </div>
     </>
  );
}

export default SliderCard;
