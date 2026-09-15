// ContactMap.js
import React from "react";

const ContactMap = () => {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.1306639856125!2d-0.09346422352986843!3d51.510818771814044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760355cc6e15e7%3A0x80c6854880210b1f!2sCannon%20Bridge%20House!5e0!3m2!1sen!2slk!4v1780993498220!5m2!1sen!2slk"
      width="100%"
      height="100%"
      style={{ border: 0, display: "block" }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Office Location"
    />
  );
};

export default ContactMap;
