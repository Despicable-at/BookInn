import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';


function Contact() {
  const [phone, setPhone] = useState('');

  const handlePhoneChange = (e) => {
    let input = e.target.value.replace(/\D/g, ''); // Remove non-numeric
    if (input.length > 9) input = input.slice(0, 9); // Max 9 digits
    
    // Format: 2-3-4 (XX XXX XXXX)
    let formatted = '';
    if (input.length <= 2) formatted = input;
    else if (input.length <= 5) formatted = `${input.slice(0, 2)} ${input.slice(2)}`;
    else formatted = `${input.slice(0, 2)} ${input.slice(2, 5)} ${input.slice(5)}`;

    setPhone(formatted);
  };
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
            <input 
              type="text" 
              placeholder="XX XXX XXXX" 
              className="input phone"
              value={phone}
              onChange={handlePhoneChange}
            />
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
