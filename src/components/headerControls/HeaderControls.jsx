import React from "react";

import { ImDownload3 } from "react-icons/im";
import {
  MdOutlineArticle,
  MdArrowBackIosNew,
  MdArrowForwardIos,
} from "react-icons/md";
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";
import { IoIosEye } from "react-icons/io";

import "./HeaderControls.css";

const HeaderControls = () => {
  return (
    <div className="header-controls">
      <div className="container">
        <div className="flex-wrapper">
          <div className="controls-group">
            <button className="controls-btn">
              <ImDownload3 />
            </button>
            <button className="controls-btn selected">
              <MdOutlineArticle />
            </button>
            <button className="controls-btn">
              <AiOutlineDoubleLeft />
            </button>
            <button className="controls-btn">
              <MdArrowBackIosNew />
            </button>
            <button className="controls-btn">
              <MdArrowForwardIos />
            </button>
            <button className="controls-btn">
              <AiOutlineDoubleRight />
            </button>
            <button className="controls-btn selected">
              <IoIosEye />
            </button>
          </div>
          <button className="cta-btn">Comfirm highlights</button>
        </div>
      </div>
    </div>
  );
};

export default HeaderControls;
