import React from "react";

import "./TranslatorEngine.css";

const TranslatorEngine = ({ id, translatorSource, onInputSelect }) => {
  return (
    <div className="translator-engine">
      <p>{`Key-${id}`}</p>
      <div className="translator-wrapper">
        <p className="translator-source">{translatorSource}</p>
        <textarea className="translator-input" onClick={onInputSelect} />
      </div>
    </div>
  );
};

export default TranslatorEngine;
