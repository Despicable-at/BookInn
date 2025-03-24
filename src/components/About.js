import React from 'react';

function IntroSection() {
  return (
    <section className="intro-section">
      <div className="intro-content">
        <h2>
          Welcome to <span className="green">Bookinn</span> - Your Ultimate Accommodation Hub
        </h2>
        <p>
          Finding the perfect place to stay has never been easier.<b>
          Bookinn brings all types of accommodations under ine<b>
          umbrella, giving you seamless access to hotels,<br>
          apartments, guesthouses, and more—all in one app.<b>
          Whether you are travelling for business, planning a<b>
          getaway, or looking for a cozy staycation, Bookinn ensures<b>
          you find the best options tailored to your needs.
        </p>
        <p>
          Enjoy a smooth booking experience with real-time<b>
          availability, secure payments, and verified listings.<b>
          With Bookin, convenience meets comfort at your fingertips.
        </p>
        <p>
          Start exploring and book your next stay today
        </p>

        <div className="app-buttons">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
            alt="Google Play"
            className="app-btn"
          />
          <img
            src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
            alt="App Store"
            className="app-btn"
          />
        </div>
      </div>
    </section>
  );
}

export default IntroSection;
