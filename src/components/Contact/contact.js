import React from "react";
import { useForm, ValidationError } from "@formspree/react";
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
  const [state, handleSubmit] = useForm("mqaljzwd"); // Replace with your Formspree form ID

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <h2 className="section-title">Contact Us</h2>

        <div className="contact-content">
          {/* Contact Information (unchanged) */}
          <div className="contact-info">
            <div className="info-card">
              <FaEnvelope className="contact-icon" />
              <div>
                <h3>Email</h3>
                <a
                  href="mailto:Mahagedara.jyk2023@gmail.com?subject=Inquiry&body=Hello, I would like to ask about..."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Mahagedara.jyk2023@gmail.com
                </a>
              </div>
            </div>

            <div className="info-card">
              <FaPhoneAlt className="contact-icon" />
              <div>
                <h3>Phone</h3>
                <a
                  href="https://wa.me/358451730018"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +358 45 173 0018
                </a>
              </div>
            </div>

            <div className="info-card">
              <FaMapMarkerAlt className="contact-icon" />
              <div>
                <h3>Location</h3>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Maasälväntie+5-9,+00741+Helsinki"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Maasälväntie 5-9, 00741 Helsinki
                </a>
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

          {/* Updated Contact Form */}
          <form className="contact-form" onSubmit={handleSubmit}>
            <h3>Send Us a Message</h3>

            {state.succeeded ? (
              <div className="form-success">
                Thank you! Your message has been sent successfully.
              </div>
            ) : (
              <>
                <div className="form-group">
                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Your Name"
                  />
                  <ValidationError
                    prefix="Name"
                    field="name"
                    errors={state.errors}
                  />
                </div>

                <div className="form-group">
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Your Email"
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />
                </div>

                <div className="form-group">
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Your Message"
                    rows="5"
                  />
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                  />
                </div>

                <button
                  type="submit"
                  className="submit-btn"
                  disabled={state.submitting}
                >
                  {state.submitting ? "Sending..." : "Send Message"}
                </button>
              </>
            )}
          </form>
        </div>

        {/* Social Media */}
        <div className="social-media">
          <a
            href="https://www.facebook.com/profile.php?id=100089887830631"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.instagram.com/mahagedara.jyk2023/?igsh=MXUxazIzN3UzdjJyZA%3D%3D&utm_source=ig_contact_invite#"
            aria-label="Instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
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
