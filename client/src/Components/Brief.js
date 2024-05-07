import React from "react";
import parse from "html-react-parser";

export default function Brief({ brief }) {
  return (
    <section id="brief">
      <div id="brief-container">
        <div className="brief-pic">
          <img src="https://i.imgur.com/mzscIsi.jpg" alt="profile-pic" />
        </div>
        <div className="brief-text">
          <div className="brief-pre">Hello👋, I'm</div>
          <div className="brief-name">
            Pratham <span>Jaiswal</span>
          </div>
          <div className="brief-description">{parse(brief)}</div>
        </div>
      </div>
    </section>
  );
}
