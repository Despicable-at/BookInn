import React from 'react';

function Contact() {
  return (
    <section id="contact" className="contact"style={{
        backgroundImage: 'url(https://bookinn-sc77.onrender.com/assets/background.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}>
      <div class="contact-form">
          <h2>Send Us a Message Today</h2>
          
          <div class="form-row">
            <input type="text" placeholder="Name" class="input name">
            <div class="phone-input">
              <span class="flag">🇬🇭 +233</span>
              <input type="text" placeholder="XX-XXX-XXXX" class="input phone">
            </div>
          </div>
          
          <input type="email" placeholder="Email" class="input full-width">
          
          <textarea placeholder="Message here" class="input full-width"></textarea>
          
          <button class="send-btn">Send</button>
      </div>

      <div className="contact-img">
        <img src="https://static.vecteezy.com/system/resources/previews/007/581/047/original/search-house-for-rent-or-sale-illustration-concept-free-vector.jpg" alt="Contact Illustration" />
      </div>
    </section>
  );
}

export default Contact;
