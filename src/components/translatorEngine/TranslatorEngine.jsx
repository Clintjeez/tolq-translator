import React from "react";

import "./TranslatorEngine.css";

const TranslatorEngine = ({
  id,
  translatorSource,
  onSelected,
  onInputChange,
  inputValue,
  inputName,
  active,
}) => {
  const [activeCheck, setActiveCheck] = React.useState(0);

  React.useEffect(() => {
    setActiveCheck(active);
  }, []);

  console.log("ActiveChecker", activeCheck);

  return (
    <div className="translator-engine">
      <p>{`Key-${id}`}</p>
      <div
        className={
          activeCheck === active
            ? "translator-wrapper active"
            : "translator-wrapper"
        }
        onClick={onSelected}
      >
        <p className="translator-source">{translatorSource}</p>
        <textarea
          className="translator-input"
          onChange={onInputChange}
          value={inputValue}
          name={inputName}
        />
      </div>
    </div>
  );
};

export default TranslatorEngine;
