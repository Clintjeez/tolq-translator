import React from "react";

const ProgressBar = ({ bgcolor, completed }) => {
  const containerStyles = {
    height: 17,
    width: "100%",
    backgroundColor: "#f1f5f1",
    borderRadius: 50,
  };

  const fillerStyles = {
    height: "100%",
    width: `${completed}%`,
    backgroundColor: bgcolor,
    borderRadius: "inherit",
    textAlign: "right",
    transition: "width 1s ease-in-out",
  };

  const labelStyles = {
    padding: 4,
    color: "#000",
    fontSize: 15,
  };

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>
        <span style={labelStyles}>{`${completed}%`}</span>
      </div>
    </div>
  );
};

export default ProgressBar;
