import React from 'react';

function Contact() {
  return (
    <section id="contact" className="contact" style={{
      backgroundImage: 'url(https://bookinn-sc77.onrender.com/assets/background.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}>
      <div className="contact-form">
        <h2>Send Us a Message Today</h2>

        <div className="form-row">
          <input type="text" placeholder="Name" className="input name" />
          <div className="phone-input">
            <span className="flag">🇬🇭 +233</span>
            <input type="text" placeholder="XX-XXX-XXXX" className="input phone" />
          </div>
        </div>

        <input type="email" placeholder="Email" className="input full-width" />

        <textarea placeholder="Message here" className="input full-width"></textarea>

        <button className="send-btn">Send</button>
      </div>

      <div className="contact-img">
        <img src="https://static.vecteezy.com/system/resources/previews/007/581/047/original/search-house-for-rent-or-sale-illustration-concept-free-vector.jpg" alt="Contact Illustration" />
      </div>
    </section>
  );
}

export default Contact;
