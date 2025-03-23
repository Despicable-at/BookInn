import React from 'react';
import './About.css';
import Navbar from '../components/Navbar';

const About = () => {
  return (
    <div className="about">
      <Navbar />
      <div className="about-content">
        <div className="about-text">
          <h1>Welcome to Bookinn - Your Ultimate Accommodation Hub</h1>
          <p>
            Bookinn is your go-to platform for booking accommodations at affordable prices with guaranteed
            quality. Whether you're looking for a cozy room or a luxurious suite, we have a range of options
            to suit your needs.
          </p>
        </div>
        <div className="about-image">
          <img src="https://via.placeholder.com/400x400.png?text=Image+Here" alt="Accommodation" />
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

export default About;
