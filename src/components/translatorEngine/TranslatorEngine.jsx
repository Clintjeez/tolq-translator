import React from "react";
import { useSelector } from "react-redux";

import "./TranslatorEngine.css";

const TranslatorEngine = ({
  id,
  translatorSource,
  onSelected,
  onInputChange,
  inputValue,
  inputName,
}) => {
  const post = useSelector((state) => state.selectedPost.post);

  return (
    <div className="translator-engine">
      <p>{`Key-${id}`}</p>
      <div
        className={
          id === post?.id ? "translator-wrapper active" : "translator-wrapper"
        }
        onClick={onSelected}
      >
        <p className="translator-source">{translatorSource}</p>
        <textarea
          className="translator-input"
          onChange={onInputChange}
          value={inputValue}
          name={inputName}
          placeholder="Enter your text here"
        />
      </div>
    </div>
  );
};

export default TranslatorEngine;
