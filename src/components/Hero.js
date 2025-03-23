import React from 'react';

function Hero() {
  return (
    <section
      className="hero"
      style={{ backgroundImage: 'url(/assets/background1.png)' }} // Set the background image
    >
      <h1>Welcome to <span className="highlight">Bookinn</span> – Your Ultimate Accommodation Hub</h1>
      <div className="app-buttons">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
          alt="Google Play"
        />
        <img
          src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
          alt="App Store"
        />
      </div>
    </section>
  );
}

export default Hero;
