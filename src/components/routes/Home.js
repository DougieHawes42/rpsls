import "./style.scss";

// components
// utils
import { Route1 } from "../utils/routes";
import { Link } from "react-router-dom";

const Home = ({ onClick }) => {
  const playQuotes = [
    "I have prepared myself mentally, physically, and intellectually. Commence the game.",
    "Before we begin, I’d like to note that I fully expect to win.",
    "I am ready to play, though statistically speaking, you are not.",
    "Initiating gameplay. Now would be… acceptable.",
    "Let us proceed. I have already calculated the optimal strategy.",
    "I am ready. Please try to keep up.",
  ];

  const content = (
    <div className="home">
      <p className="home-intro">
        {playQuotes[Math.floor(Math.random() * playQuotes.length)]}
      </p>
      <Link to="/game">
        <p className="home-play-button" onClick={onClick}>
          PLAY
        </p>
      </Link>
    </div>
  );

  return <Route1 content={content} />;
};

export default Home;
