import { Link } from "react-router-dom";

import "./style.scss";

import { Link1 } from "../utils/links";

import SheldonHead from "../../display/media/images/sheldonHead.png";

const Header = () => {
  return (
    <header className="header">
      <div className="header-title-container">
        <div className="header-head-container">
          <img className="header-head" src={SheldonHead} alt="" />
        </div>
        <Link to="/">
          <h1 className="header-title">
            <span className="header-title-initial">R</span>ock,{" "}
            <span className="header-title-initial">P</span>aper,{" "}
            <span className="header-title-initial">S</span>cissors,{" "}
            <span className="header-title-initial">L</span>izard,{" "}
            <span className="header-title-initial">S</span>pock
          </h1>
        </Link>
      </div>
    </header>
  );
};

export default Header;
