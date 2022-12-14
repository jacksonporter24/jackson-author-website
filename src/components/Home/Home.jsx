import React from "react";
import Profile from "./profile.jpeg";
import './Home.css'

const Home = () => {
  return (
    <div className="home-background">
      <h1>ABOUT JACKSON</h1>
      <div className="pictures">
        <img src={Profile} />
      </div>
      <p>
        Jackson Porter is a fantasy, science-fiction, and mystery writer who
        lives in Utah. He has a B.S. in English with an emphasis in Creative
        Writing from Utah Valley University, and a certificate of completion
        from the Devmountain Web Development Program. While he isn't writing or
        reading, he enjoys movies, video games, puzzles, board-games, and
        vacations.
      </p>
      <p>
        Jackson is represented by Terri Baranowski of Gateway Literary Agency.
      </p>
    </div>
  );
};

export default Home;
