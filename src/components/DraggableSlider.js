import React from 'react'
import { Slider } from "react-draggable-slider";

function DraggableSlider({data}) {
    const sliderSettings = {
        speed: 3000,
        data:data,
        easing: "elastic",
        bgColor: "rgba(255, 255, 255, 0.05)",
        buttonHref: "https://www.google.com",
        buttonTarget: "_self",
        buttonText: "View project",
        showButton: true,
      };
  return (
    <Slider sliderSettings={sliderSettings} />
  )
}

export default DraggableSlider