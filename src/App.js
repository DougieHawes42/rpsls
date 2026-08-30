import controllers from "./controllers.js";

import "./assets/styles/style.scss";

import Header from "./components/layout/Header.js";

import GameScreen from "./components/routes/GameScreen.js";
import HomeScreen from "./components/routes/HomeScreen.js";
import GuideScreen from "./components/routes/GuideScreen.js";

const App = () => {
  const controller = controllers();

  return (
    <div className="app">
      <Header />
      {controller.gamePlaying && (
        <GameScreen
          handleBackToHome={() => {
            controller.setGamePlaying(false);
            controller.setHomeShowing(true);
          }}
        />
      )}
      {controller.homeShowing && (
        <>
          <HomeScreen
            onClick={() => {
              controller.setGamePlaying(true);
              controller.setHomeShowing(false);
            }}
          />
          <div
            className="instructions-link"
            onClick={() => {
              controller.setGuideShowing(true);
              controller.setHomeShowing(false);
            }}>
            How To Play
          </div>
        </>
      )}
      {controller.guideShowing && (
        <GuideScreen
          onClick={() => {
            controller.setGuideShowing(false);
            controller.setHomeShowing(true);
          }}
        />
      )}
    </div>
  );
};

export default App;
