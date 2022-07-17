import React from "react";
import { BsFlag } from "react-icons/bs";
import { AiFillQuestionCircle } from "react-icons/ai";
import { useGetCommentsQuery } from "../../api/apiSlice";
import { generateRandomColor } from "../../utils/randomColorGenerator";

import MetaDataItem from "../../components/metaDataItem/MetaDataItem";

import "./MetadataView.css";

const MetadataView = ({ postId }) => {
  const {
    data: metaData,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetCommentsQuery(postId);

  let metaDataContent;
  if (isLoading) {
    metaDataContent = (
      <div>
        <p>Loading...</p>
      </div>
    );
  } else if (isError) {
    <div>
      <p>An error occurred</p>
    </div>;
  } else if (isSuccess) {
    metaDataContent = metaData.map((data, idx) => {
      return (
        <MetaDataItem
          key={idx}
          itemTitle={data.name}
          itemText={data.body}
          bgcolor={generateRandomColor()}
        />
      );
    });
  }

  return (
    <div className="metadata-view container">
      <div className="view-title">
        <BsFlag />
        <h2>Quality check</h2>
      </div>

      <p className="quality-lable">
        <span>
          Expected quality: <strong>Localization</strong>
        </span>
        <AiFillQuestionCircle className="icon" />
      </p>

      <div className="metadata-note">
        <h3>
          Please highlight as shown below any errors or mistake in the original
          translation.
        </h3>
        <p>
          Be aware that it is not possible to create subselection or selections
          overlapping each other
        </p>
      </div>
      <div className="metadata-list-wrapper">
        <div className="metadata-list">
          {postId === null ? <div>No data selected</div> : metaDataContent}
        </div>
      </div>
    </div>
  );
};

export default MetadataView;
