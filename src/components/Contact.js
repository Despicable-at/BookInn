import React from 'react';

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Send Us a Message Today</h2>
      <form>
        <input type="text" placeholder="Name" />
        <div className="phone-input">
          <span>🇬🇭 +233</span>
          <input type="tel" placeholder="XX-XXX-XXXX" />
        </div>
        <input type="email" placeholder="Email" />
        <textarea placeholder="Message here"></textarea>
        <button type="submit">Send</button>
      </form>
      <div className="contact-img">
        <img src="https://static.vecteezy.com/system/resources/previews/007/581/047/original/search-house-for-rent-or-sale-illustration-concept-free-vector.jpg" alt="Contact Illustration" />
      </div>
    </section>
  );
}

export default Contact;
