import React, { useState } from "react";
import Brand from "../brand/Brand";
import ProgressBar from "../progressBar/ProgressBar";
import { getWordCount } from "../../utils/wordsCounter";

import "./Header.css";

const Header = ({ active, translateText = [] }) => {
  const [progressRate, setProgressRate] = useState(0);

  React.useEffect(() => {
    setProgressRate(getWordCount(translateText[active?.id]));
  }, [translateText]);

  return (
    <div className="header container">
      <Brand />
      <div className="title-wrapper">
        <h3>markdown1.md</h3>
        <p>English - Spanish</p>
      </div>
      <div className="progress-bar-wrapper">
        <p>Progress bar</p>
        <ProgressBar
          bgcolor={progressRate >= 100 ? "#ff0000" : "#68c97a"}
          completed={progressRate}
        />
      </div>
    </div>
  );
};

export default Header;
