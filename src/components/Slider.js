import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import Flickity from "react-flickity-component";

function Slider({ children, autoPlay }) {
  const smallScreen = useMediaQuery("(max-width:1400px)");

  const flickityOptions = {
    freeScroll: true,
    cellAlign: "left",
    pageDots: false,
    prevNextButtons: false,
    autoPlay: autoPlay,
    contain: false,
    draggable: true,
  };
  return (
    <Flickity
      className={`carousel w-full `}
      elementType={"div"}
      options={flickityOptions}
      disableImagesLoaded={false}
      reloadOnUpdate
      static
    >
      {children}
    </Flickity>
  );
}

export default Slider;
