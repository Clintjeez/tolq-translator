import React from "react";

import { AiOutlineBars, AiOutlineDisconnect } from "react-icons/ai";
import { VscBook } from "react-icons/vsc";

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
      </ul>
    </div>
  );
};

export default SideNav;
