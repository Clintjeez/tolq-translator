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
  return (
    <div className="translator-engine">
      <p>{`Key-${id}`}</p>
      <div
        className={
          id === active.id ? "translator-wrapper active" : "translator-wrapper"
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
