import React from "react";
import { useGetPostsQuery } from "../../api/apiSlice";
import TranslatorEngine from "../../components/translatorEngine/TranslatorEngine";
import Paginator from "../../components/paginator/Paginator";

import "./TranslatorView.css";

let pageSize = 10;

const TranslatorView = ({ setPostId }) => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const {
    data: dataSource,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetPostsQuery();

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
            onInputSelect={() => setPostId(translatData.id)}
          />
        );
      });
  }
  return (
    <div className="translator-view container">
      <h2 className="title-txt">markdown1.md</h2>
      <div className="tranlator-content">{translateContent}</div>

      <Paginator
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={dataSource && dataSource?.length}
        pageSize={pageSize}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
};

export default TranslatorView;
