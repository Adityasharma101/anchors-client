import React from "react";
import { SiAnchor } from "react-icons/si";
import Callback from "../Callback/Callback";

import './Navbar.scss'
const Navbar = ({callback}) => {
  return (
    <nav>
      <div className="logo">
        <div className="logo_icon">
          <SiAnchor />
        </div>
        <div className="logo_name">anchors</div>
      </div>

        { callback && <Callback/>}
    </nav>
  );
};

export default Navbar;
