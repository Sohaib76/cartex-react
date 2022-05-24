import React from "react";
const Card = (props) => {
  const classes = `${props.css} bg-white w-full flex flex-col  md:flex-row md:mr-1 p-5 rounded-xl shadow-lg `;
  return <div className={classes}>{props.children}</div>;
};

export default Card;
