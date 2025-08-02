import React from "react";
import "./contact.css";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaClock,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <h2 className="section-title">Contact Us</h2>

        <div className="contact-content">
          {/* Contact Information */}
          <div className="contact-info">
            <div className="info-card">
              <FaEnvelope className="contact-icon" />
              <div>
                <h3>Email</h3>
                <a href="mailto:iamsankadesilva@gmail.com">
                  mahagedara@gmail.com
                </a>
              </div>
            </div>

            <div className="info-card">
              <FaPhoneAlt className="contact-icon" />
              <div>
                <h3>Phone</h3>
                <a href="tel:+358449465409">+358 45 173 0018</a>
              </div>
            </div>

            <div className="info-card">
              <FaMapMarkerAlt className="contact-icon" />
              <div>
                <h3>Location</h3>
                <p>Maasälväntie 5-9, 00741 Helsinki</p>
              </div>
            </div>

            <div className="info-card">
              <FaClock className="contact-icon" />
              <div>
                <h3>Opening Hours</h3>
                <p>Monday-Sunday: 10AM - 10PM</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form className="contact-form">
            <h3>Send Us a Message</h3>
            <div className="form-group">
              <input type="text" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <textarea placeholder="Your Message" rows="5" required></textarea>
            </div>
            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
        </div>

        {/* Social Media */}
        <div className="social-media">
          <a href="#" aria-label="Facebook">
            <FaFacebook />
          </a>
          <a href="#" aria-label="Instagram">
            <FaInstagram />
          </a>
        </div>

        {/* Copyright */}
        <div className="copyright">
          <p>
            Copyright © {new Date().getFullYear()} SanD. All Rights Reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
