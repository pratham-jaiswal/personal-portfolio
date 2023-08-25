import React from 'react'
import parse from 'html-react-parser'

export default function Contact({ contactDesc, contactLinks }) {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    
    return (
        <div>
            <section id="contact">
                <div className="contact-title">
                    Contact <span>Me</span>
                </div>
                <div className="contact-content">
                    <div className="contact-details">
                        {parse(contactDesc)}
                    </div>
                    <div className="contact-icons">
                        {parse(contactLinks)}
                    </div>
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