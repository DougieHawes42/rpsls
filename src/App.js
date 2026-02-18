import { useState } from "react";

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
import About from "./components/routes/About";
import { Route, Routes } from "react-router-dom";

const App = () => {
  const [musicPlaying, setMusicPlaying] = useState(true);

  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
      {musicPlaying ? (
        <div className="music-toggle" onClick={() => setMusicPlaying(false)}>
          <MdMusicOff />
          <audio src={Music} autoPlay loop />
        </div>
      ) : (
        <div className="music-toggle" onClick={() => setMusicPlaying(true)}>
          <MdMusicNote />
        </div>
      )}
    </div>
  );
};

export default App;
