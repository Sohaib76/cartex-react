import React from "react";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "@mui/material";
import Home from "./Home";

function AirportTransfer() {
  const [step,setStep]=React.useState(0);
  const matches = useMediaQuery('(max-width:768px)');

  console.log("steps",step);
  return (<>
    <Home/>
  
    </>
  );
}

export default AirportTransfer;
