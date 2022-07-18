import React from "react";
import { useDispatch } from "react-redux";
import { useGetPostsQuery } from "../../api/apiSlice";
import TranslatorEngine from "../../components/translatorEngine/TranslatorEngine";
import Paginator from "../../components/paginator/Paginator";
import { setPost } from "../../store/features/postSlice";
import { setTranslatorText } from "../../store/features/translatorSlice";

import "./TranslatorView.css";

let pageSize = 10;

const TranslatorView = () => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const [translateText, setTranslateText] = React.useState({});

  const dispatch = useDispatch();
  const {
    data: dataSource,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetPostsQuery();

  const handleChange = (e) => {
    setTranslateText({ ...translateText, [e.target.name]: e.target.value });
  };

  const handleSelected = (id) => {
    dispatch(setPost(id));
  };

  React.useEffect(() => {
    dispatch(setTranslatorText(translateText));
  }, [translateText]);

  //Pagination handler
  const currentTableData = React.useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;
    return dataSource && dataSource?.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, isSuccess]);

  // Services
  let translateContent;
  if (isLoading) {
    translateContent = (
      <div>
        <p>Loading...</p>
      </div>
    );
  } else if (isSuccess) {
    translateContent =
      currentTableData &&
      currentTableData?.map((translatData, idx) => {
        return (
          <TranslatorEngine
            key={idx}
            id={translatData.id}
            translatorSource={translatData.body}
            onSelected={() => handleSelected(translatData)}
            onInputChange={handleChange}
            inputValue={translateText.inputName}
            inputName={translatData.id}
          />
        );
      });
  }
  return (
    <div className="translator-view container">
      <h2 className="title-txt">markdown1.md</h2>
      <div className="tranlator-content">{translateContent}</div>
      <div className="paginator-wrapper">
        <Paginator
          className="paginator-bar"
          currentPage={currentPage}
          totalCount={dataSource && dataSource?.length}
          pageSize={pageSize}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
    </div>
  );
};

export default TranslatorView;
