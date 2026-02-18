import { Link } from "react-router-dom";

import "./style.scss";

import { Link1 } from "../utils/links";

const Header = () => {
  return (
    <header className="footer">
      <div className="footer-attribution">
        <a href="https://wallpapers.com/background/80s-retro-background-3z1bhtp7tth8r6bu.html">
          Background by army19
        </a>{" "}
        on Wallpapers.com
      </div>
      <div className="footer-attribution">
        Music by{" "}
        <a href="https://pixabay.com/users/hitslab-47305729/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=396890">
          Ievgen Poltavskyi
        </a>{" "}
        from{" "}
        <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=396890">
          Pixabay
        </a>
      </div>
    </header>
  );
};

export default Header;
