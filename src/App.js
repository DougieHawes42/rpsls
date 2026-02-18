import { useState } from "react";
import { Link } from "react-router-dom";

import { FaQuestion } from "react-icons/fa";
import { MdMusicOff, MdMusicNote } from "react-icons/md";

import "./display/style/style.scss";

import Music from "./display/media/music/music.mp3";

// components
// layout
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
// routes
// public
import Home from "./components/routes/Home";
import Game from "./components/routes/Game";
import About from "./components/routes/About";
import { Route, Routes } from "react-router-dom";

const App = () => {
  const [musicPlaying, setMusicPlaying] = useState(false);

  return (
    <div className="app">
      <Header musicPlaying={musicPlaying} />
      <Routes>
        <Route
          path="/"
          element={<Home onClick={() => setMusicPlaying(true)} />}
        />
        <Route path="/game" element={<Game />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
      <Link to="/about">
        <div className="about-link">
          <FaQuestion />
        </div>
      </Link>
      <div className="music-player">
        {musicPlaying ? (
          <>
            <MdMusicOff onClick={() => setMusicPlaying(false)} />
            <audio src={Music} autoPlay loop />
          </>
        ) : (
          <>
            <MdMusicNote onClick={() => setMusicPlaying(true)} />
          </>
        )}
      </div>
    </div>
  );
};

export default App;
