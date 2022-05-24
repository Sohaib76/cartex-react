import React from "react";
import Slider from "./Slider";
import img1 from "../../src/Images/Contact/img1.png";
import tag1 from "../../src/Images/Contact/tag1.png";
import SliderCard from "./SliderCard";

function PackagesSection() {
  const packages = [
    {
      id: "1",
      image: img1,
      tag: tag1,
      title: "Hyderabad RGIA",
      description: "Rajiv Gandhi International Airport",
      location: "24/7 CarterX kiosk",
      departure: "Delivery till terminal entry gates",
      arrival:
        "Bags to be dropped at CarterX kiosk at Arrivals village. Opp Café Coffee Day",
      luggage: "Available",
      transfer: "Available",
    },
    {
      id: "2",
      image: img1,
      tag: tag1,
      title: "Hyderabad RGIA",
      description: "Rajiv Gandhi International Airport",
      location: "24/7 CarterX kiosk",
      departure: "Delivery till terminal entry gates",
      arrival:
        "Bags to be dropped at CarterX kiosk at Arrivals village. Opp Café Coffee Day",
      luggage: "Available",
      transfer: "Available",
    },
    {
      id: "3",
      image: img1,
      tag: tag1,
      title: "Hyderabad RGIA",
      description: "Rajiv Gandhi International Airport",
      location: "24/7 CarterX kiosk",
      departure: "Delivery till terminal entry gates",
      arrival:
        "Bags to be dropped at CarterX kiosk at Arrivals village. Opp Café Coffee Day",
      luggage: "Available",
      transfer: "Available",
    },
    {
      id: "4",
      image: img1,
      tag: tag1,
      title: "Hyderabad RGIA",
      description: "Rajiv Gandhi International Airport",
      location: "24/7 CarterX kiosk",
      departure: "Delivery till terminal entry gates",
      arrival:
        "Bags to be dropped at CarterX kiosk at Arrivals village. Opp Café Coffee Day",
      luggage: "Available",
      transfer: "Available",
    },
    {
      id: "4",
      image: img1,
      tag: tag1,
      title: "Hyderabad RGIA",
      description: "Rajiv Gandhi International Airport",
      location: "24/7 CarterX kiosk",
      departure: "Delivery till terminal entry gates",
      arrival:
        "Bags to be dropped at CarterX kiosk at Arrivals village. Opp Café Coffee Day",
      luggage: "Available",
      transfer: "Available",
    },
  ];
  return (
    <div className=" w-full flex flex-row gap-4">
      <Slider autoPlay={true}>
        {packages.map((v, i) => (
          <div className=" mx-2">
            <SliderCard packages={v} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default PackagesSection;
