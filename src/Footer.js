import React from "react";
import "./Footer.css";
export default function Footer() {
  return (
    <div className="Footer">
      <footer>
        <a
          href="https://github.com/tbrincatos/weather-app-gentilly"
          target="_blank"
          rel="noopener noreferrer"
          title="Go to GitHub account"
        >
          Open-source code
        </a>{" "}
        by{" "}
        <a
          href="https://maltisian.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          title="Visit Portfolio"
        >
          Tamsin Brincat
        </a>
        <span role="img" aria-label="girl">
          {" "}
          👩‍🦰
        </span>
      </footer>
    </div>
  );
}
