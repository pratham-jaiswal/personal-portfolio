import React, { useEffect } from "react";
import parse from "html-react-parser";

export default function Contact({ contactDesc, contactLinks }) {
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
        <div className="contact-content">
          <div className="contact-details">{parse(contactDesc)}</div>
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
