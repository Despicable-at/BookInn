import React from 'react';

function About() {
  return (
    <section
      id="about"
      className="about1"
      style={{
        backgroundImage: 'url(https://bookinn-sc77.onrender.com/assets/background.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="intro-content">
        <h2>
          Welcome to <span className="green">Bookinn</span> - Your Ultimate Accommodation Hub
        </h2>
        <p>
          Finding the perfect place to stay has never been easier.<br />
          Bookinn brings all types of accommodations under one<br />
          umbrella, giving you seamless access to hotels,<br />
          apartments, guesthouses, and more—all in one app.<br />
          Whether you are travelling for business, planning a<br />
          getaway, or looking for a cozy staycation, Bookinn ensures<br />
          you find the best options tailored to your needs.
        </p>
        <p>
          Enjoy a smooth booking experience with real-time<br />
          availability, secure payments, and verified listings.<br />
          With Bookinn, convenience meets comfort at your fingertips.
        </p>
        <p>
          Start exploring and book your next stay today.
        </p>

        <div 
  className="app-buttons1" 
  style={{ display: 'flex', justifyContent: 'flex-start', gap: '20px' }}
>
  <img
    src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
    alt="Google Play"
    className="app-btn1"
  />
  <img
    src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
    alt="App Store"
    className="app-btn1"
  />
</div>

      <div className="intro-image-container">
        <div className="intro-image">
          <img src="https://bookinn-sc77.onrender.com/assets/Frame1.png" alt="Ellipse and Phone" />
        </div>
      </div>
    </section>
  );
}

export default About;
