import React from "react";

import {
  AiOutlineBars,
  AiOutlineDisconnect,
  AiFillQuestionCircle,
  AiFillEye,
} from "react-icons/ai";
import { BsFillChatFill, BsFlag } from "react-icons/bs";
import { VscBook } from "react-icons/vsc";
import { IoIosGitBranch } from "react-icons/io";
import { FaExclamationTriangle } from "react-icons/fa";

import "./SideNav.css";

const SideNav = () => {
  return (
    <div className="side-nav">
      <ul className="nav-list">
        <li className="nav-item">
          <AiOutlineBars />
        </li>
        <li className="nav-item">
          <VscBook />
        </li>
        <li className="nav-item selected">
          <AiOutlineDisconnect />
        </li>
        <li className="nav-item">
          <BsFillChatFill />
        </li>
        <li className="nav-item">
          <FaExclamationTriangle />
        </li>
        <li className="nav-item">
          <AiFillQuestionCircle />
        </li>
        <li className="nav-item">
          <AiFillEye />
        </li>
        <li className="nav-item">
          <IoIosGitBranch />
        </li>
        <li className="nav-item selected">
          <BsFlag />
        </li>
      </ul>
    </div>
  );
};

export default SideNav;
