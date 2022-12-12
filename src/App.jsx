import React from "react";
import "./App.css";
import Writing from "./components/Writing/Writing";
import Contact from "./components/Contact/Contact";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Profile from "./profile.jpeg";

const App = () => {
  const profile = <img src="./images/profile.jpeg"></img>;
  return (
    <div className="home-page">
      <div className="nav-bar">
        <Router>
          <nav>
            <div className="header">JACKSON PORTER</div>
            <div className="links">
              <Link className="home-link" to="/">
                HOME
              </Link>
              <Link className="writing-samples" to="/writing">
                WRITING SAMPLES
              </Link>
              <Link className="contact" to="/contact">
                CONTACT
              </Link>
            </div>
          </nav>
          <Routes>
            <Route path="/writing" element={<Writing />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
      </div>
      <div className="home-background">
        <h1>ABOUT JACKSON</h1>
        <div className="pictures">
          <img src={Profile} />
        </div>
        <p>
          Jackson Porter is a fantasy, science-fiction, and mystery writer who
          lives in Utah. He has a B.S. in English with an emphasis in Creative
          Writing from Utah Valley University, and a certificate of completion
          from the Devmountain Web Development Program. While he isn't writing
          or reading, he enjoys movies, video games, puzzles, board-games, and
          vacations. Jackson is represented by Terri Baranowski of Gateway
          Literary Agency.
        </p>
      </div>
    </div>
  );
};

export default App;
