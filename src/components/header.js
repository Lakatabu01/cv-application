import React from "react";
import "./components.css";

const Top = (props) => {
  return (
    <div className="header">
      <h1>{props.text}</h1>
    </div>
  );
};

export default Top;
