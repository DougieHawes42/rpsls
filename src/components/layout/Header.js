import { Link } from "react-router-dom";

import "./style.scss";

import { Link1 } from "../utils/links";

const Header = () => {
  return (
    <header className="header">
      <div className="header-title-container">
        <Link to="/">
          <h1 className="header-title">Title</h1>
        </Link>
      </div>
      <div className="header-links">
        <Link1 to="/about" text="about" />
      </div>
    </header>
  );
};

export default Header;
