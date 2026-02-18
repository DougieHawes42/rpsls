import { useState } from "react";

import "./style.scss";

// components
// utils
import { Route1 } from "../utils/routes";

const Home = () => {
  const [gamePlaying, setGamePlaying] = useState(false);

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
      {gamePlaying ? (
        <>game</>
      ) : (
        <>
          <p className="home-intro">
            {playQuotes[Math.floor(Math.random() * playQuotes.length)]}
          </p>
          <p className="home-play-button" onClick={setGamePlaying}>
            PLAY
          </p>
        </>
      )}
    </div>
  );

  return <Route1 content={content} />;
};

export default Home;
