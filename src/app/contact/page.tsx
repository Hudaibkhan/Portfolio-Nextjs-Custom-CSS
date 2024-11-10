import Image from "next/image"
import React from "react";
import "../../styles/contact.css";
import "../globals.css"
export default function Contact(){
    return(
        <div className="contact-box">
        <div className="contact-content">
          <h2>Contact Me</h2>
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" required></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
          <div className="contact-links">
            <a
              href="https://github.com/Hudaibkhan"
              target="_blank"
              className="link-item"
            >
              <Image
                src="/github-icon.png"
                alt="GitHub"
                width={50}
                height={50}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/hudaib-khan-383b21330/"
              target="_blank"
              className="link-item"
            >
              <Image
                src="/linkedin-icon.png"
                alt="LinkedIn"
                width={50}
                height={50}
              />
            </a>
            <a
              href="https://www.npmjs.com/~hudaib"
              target="_blank"
              className="link-item"
            >
              <Image
                src="/npm-icon.png"
                alt="Gmail"
                width={35}
                height={35}
                className="npm-icon"
              />
            </a>
          </div>
        </div>
      </div>
    )
}