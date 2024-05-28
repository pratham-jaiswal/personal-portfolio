import React, { useEffect, useRef, useState } from "react";
import parse from "html-react-parser";
import emailjs from "@emailjs/browser";

export default function Contact({ contactLinks }) {
  const [status, setStatus] = useState({
    message: "",
    type: "",
  });
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAIL_SERVICE_KEY,
        process.env.REACT_APP_EMAIL_TEMPLATE_ID,
        form.current,
        {
          publicKey: process.env.REACT_APP_EMAIL_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          form.current.reset();
          setStatus({
            message: "Your message has been successfully sent. I will get back to you as soon as possible.",
            type: "success",
          });
          setTimeout(() => {
            setStatus({
              message: "",
              type: "",
            });
          }, 5000);
        },
        (error) => {
          setStatus({
            message: "Oops! Something went wrong while sending your message. Please try again later or use alternative contact options below.",
            type: "error",
          });
          setTimeout(() => {
            setStatus({
              message: "",
              type: "",
            });
          }, 5000);
        }
      );
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const contactsSection = document.getElementById("contact-container");

      if (contactsSection) {
        const rect = contactsSection.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100 && rect.bottom > 100) {
          contactsSection.classList.add("visible");
        } else {
          contactsSection.classList.remove("visible");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div id="contact-container">
      <section id="contact">
        <div className="contact-title">
          Contact <span>Me</span>
        </div>
        <form className="contact-form" ref={form} onSubmit={sendEmail}>
          <div className={`status ${status.type}`}>{status.message}</div>
          <input type="text" name="user_name" placeholder="Name" required />
          <input type="email" name="user_email" placeholder="Email" required />
          <textarea
            placeholder="Message"
            cols="30"
            rows="10"
            name="message"
            required
          ></textarea>
          <button type="submit">Send</button>
        </form>
        <div className="contact-content">
          <div className="contact-icons">{parse(contactLinks)}</div>
        </div>
      </section>
      <div className="to-top">
        <button className="scroll-top" onClick={scrollToTop} type="button">
          Back to top
        </button>
      </div>
    </div>
  );
}
