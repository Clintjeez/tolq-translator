import React from "react";

import "./metaDataItem.css";

const MetaDataItem = ({ bgcolor, itemTitle, itemText }) => {
  return (
    <div className="metadata-item">
      <div className="bullet">
        <div className="item-bullet" style={{ backgroundColor: bgcolor }}></div>
      </div>
      <div className="item-txts">
        <h3>{itemTitle}</h3>
        <p>{itemText}</p>
      </div>
    </div>
  );
};

export default MetaDataItem;
