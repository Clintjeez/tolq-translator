import React from "react";
import { useGetPostsQuery } from "../../api/apiSlice";
import TranslatorEngine from "../../components/translatorEngine/TranslatorEngine";

import "./TranslatorView.css";

const TranslatorView = ({ setPostId }) => {
  const {
    data: dataSource,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetPostsQuery();

  let translateContent;
  if (isLoading) {
    translateContent = (
      <div>
        <p>Loading...</p>
      </div>
    );
  } else if (isSuccess) {
    translateContent = dataSource.map((translatData, idx) => {
      return (
        <TranslatorEngine
          key={idx}
          id={translatData.id}
          translatorSource={translatData.body}
          onInputSelect={() => setPostId(translatData.id)}
        />
      );
    });
  }
  return (
    <div className="translator-view container">
      <h2 className="title-txt">markdown1.md</h2>
      <div className="tranlator-content">{translateContent}</div>
    </div>
  );
};

export default TranslatorView;
