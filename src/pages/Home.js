import React from 'react';
import './Home.css';
import Navbar from '../components/Navbar';
import backgroundImage from './12323 1.png'; // Import the image

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="home-content">
        <div className="home-text">
          <h1>Welcome to Bookinn - Your Ultimate Accommodation Hub</h1>
        </div>
        <div className="app-buttons">
          <a href="https://play.google.com" target="_blank" rel="noopener noreferrer">
            <img src="https://via.placeholder.com/150x50.png?text=Get+it+on+Google+Play" alt="Google Play" />
          </a>
          <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
            <img src="https://via.placeholder.com/150x50.png?text=Download+from+App+Store" alt="App Store" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
