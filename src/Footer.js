import React from "react";
import "./Footer.css";
export default function Footer() {
  return (
    <div className="Footer">
      <footer>
        <a
          href="https://github.com/tbrincatos/weather-app-gentilly"
          target="_blank"
          rel="noreferrer"
          title="Go to GitHub account"
        >
          Open-source code
        </a>{" "}
        by{" "}
        <a
          href="https://chimerical-babka-82bcda.netlify.app/"
          target="_blank"
          rel="noreferrer"
          title="Visit Portfolio"
        >
          Tamsin Brincat 👩‍🦰
        </a>
      </footer>
    </div>
  );
}
