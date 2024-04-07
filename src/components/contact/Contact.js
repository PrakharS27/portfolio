import React, { useRef } from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { RiWhatsappLine } from "react-icons/ri";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_tvrgujq", "template_780ab36", form.current, {
        publicKey: "fKsN7fwINQH5DwuJW",
      })
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <div className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>prakharshivam0@gmail.com</h5>
            <a href="mailto:prakharshivam0@gmail.com">Send a message</a>
          </div>
          {/* <div className="contact__option">
              <RiMessengerLine className="contact__option-icon" />
              <h4>Messenger</h4>
              <h5>Dummy Hungry</h5>
              <a href="https://m.me">Send a message</a>
            </div> */}
          <div className="contact__option">
            <RiWhatsappLine className="contact__option-icon" />
            <h4>Whatsapp</h4>
            <h5>+91 7068912757</h5>
            <a href="https://api.whatsapp.com/send?phone=7068912757">
              Send a message
            </a>
          </div>
        </div>
        <form ref={form} onSubmit={sendEmail} action="" className="form">
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
