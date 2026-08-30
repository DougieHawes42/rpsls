import { useState } from "react";

const controllers = () => {
  const [gamePlaying, setGamePlaying] = useState(false);
  const [homeShowing, setHomeShowing] = useState(true);
  const [guideShowing, setGuideShowing] = useState(false);

  return {
    gamePlaying,
    setGamePlaying,

    homeShowing,
    setHomeShowing,

    guideShowing,
    setGuideShowing,
  };
};

export default controllers;
