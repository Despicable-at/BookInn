import React from 'react';
import './Home.css';
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="home-content">
        <div className="home-text">
          <h1>Welcome to Bookinn - Your Ultimate Accommodation Hub</h1>
        </div>
        <div className="app-buttons">
        <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" />
        <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="App Store" />
      </div>
      </div>
    </div>
  );
};

export default Home;
