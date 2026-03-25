import React from "react";
import "./Contact.scss";
import emailIcon from "../Images/email-icon.svg";

export function Contact() {
  return (
    <section id="contact">
      <h2>Get in touch</h2>
      <p>Have a project or question? Send me a message.</p>
      <form action="https://formspree.io/f/xqeepnqe" method="POST">
        <input type="text" placeholder="Name" required />
        <input type="email" name="email" placeholder="Email" required />
        <textarea placeholder="Message" name="message" rows="4" required></textarea>
        <button type="submit">Send Message</button>
      </form>
      <div>
        <img src={emailIcon} alt="email" />
        shankarmylesamy@gmail.com
      </div>
    </section>
  );
}
