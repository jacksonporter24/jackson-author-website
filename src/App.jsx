import React from "react";
import "./App.css";
import Home from './components/Home/Home'
import Writing from "./components/Writing/Writing";
import Contact from "./components/Contact/Contact";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const App = () => {
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
            <Route path="/" element={<Home />} />
            <Route path="/writing" element={<Writing />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
};

export default App;
