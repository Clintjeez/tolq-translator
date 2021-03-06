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
    padding: 2,
    color: "#000",
    fontSize: 10,
    width: "100%",
  };

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>
        <div style={labelStyles}>
          {completed >= 25 ? completed + " words" : completed}
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
