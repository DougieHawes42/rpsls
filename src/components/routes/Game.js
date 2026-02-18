import { Route1 } from "../utils/routes";

import "./style.scss";

const Game = () => {
  const content = <div className="game">game</div>;

  return <Route1 content={content} />;
};

export default Game;
