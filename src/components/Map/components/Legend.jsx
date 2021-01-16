import React from "react";
import "./CovidMap.scss";

const Legend = ({ legendItems }) => {
  return (
    <div className="legend-row"
      style={{
        display: "flex",
        alignItems: "stretch",
      }}
    >
      {legendItems.map((item) => (
        <div
          key={item.title}
          style={{
            backgroundColor: item.color,
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "black",
            fontWeight: "bolder",
            fontSize: "0.9em",
            height: "5vh",
          }}
        >
          <span>{item.title}</span>
        </div>
      ))}
    </div>
  );
};

export default Legend;
