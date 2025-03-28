import React from 'react';

function Hero() {
  return (
    <section
      className="hero"
      style={{ backgroundImage: 'url(https://bookinn-sc77.onrender.com/assets/12375.jpg)' }} // Set the background image
    >
      <div className="overlay"></div>
      <div className="hero-content">
        <h1>Welcome to <span className="highlight">Bookinn</span> – Your Ultimate Accommodation Hub</h1>
        <div className="app-buttons">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
            alt="Google Play"
            className="app-btn"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Apple-badge%402x.png"
            alt="App Store"
            className="app-btn"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
