import React from "react";
import MemoryCard from "../MemoryCard";

function Container(props) {
  return (
    <div className="card-container">
      {/* Pass props to MemoryCard */}
      {props.children}
    </div>
  );
}

export default Container;
