import React, { useState } from "react";
import Brand from "../brand/Brand";
import ProgressBar from "../progressBar/ProgressBar";

import "./Header.css";

const Header = () => {
  const [progressRate, setProgressRate] = useState(60);

  return (
    <div className="header container">
      <Brand />
      <div className="title-wrapper">
        <h3>markdown1.md</h3>
        <p>English - Spanish</p>
      </div>
      <div className="progress-bar-wrapper">
        <p>Progress bar</p>
        <ProgressBar bgcolor={"#68c97a"} completed={progressRate} />
      </div>
    </div>
  );
};

export default Header;
