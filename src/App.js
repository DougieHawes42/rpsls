import "./display/style/style.scss";

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
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
