import React from "react";
import "./Projects.css";

export function Projects() {
  return (
    <div id="projects">
      <h1>Projects</h1>
      <div className="projects-cred-container">
        <span>Credentials</span>
        <div className="projects-username">
          <span>Username : </span>
          <span>demo@gmail.com</span>
        </div>
        <div className="projects-password">
          <span>Password : </span>
          <span>Demo@123</span>
        </div>
      </div>

      <div className="project-container">
        <img
          className="project-image"
          src={require("../Images/petty-cash-manager.PNG")}
          alt=""
        ></img>
        <div className="project-inner-container">
          <h3>Petty Cash Manager</h3>
          <p>
            Smartest Online Petty Cash Manager for Commercial and Personal Use.
          </p>
          <p>HTML, CSS, JavaScript, React, NodeJS, ExpressJS, MongoDB</p>
          <div className="project-links">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://expenselogs.netlify.app/"
            >
              Live
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/Shankarprince/petty-cash-manager-client"
            >
              Client Code
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/Shankarprince/petty-cash-manager-server"
            >
              Server Code
            </a>
          </div>
        </div>
      </div>
      <div className="project-container">
        <img
          className="project-image"
          src={require("../Images/ecommerce.PNG")}
          alt=""
        ></img>
        <div className="project-inner-container">
          <h3>ElectroKart Ecommerce App</h3>
          <p>
            All latest Mobile reviews, recent launches, price drops and
            specifications.
          </p>
          <p>HTML, CSS, JavaScript, React, NodeJS, ExpressJS, MongoDB</p>
          <div className="project-links">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://electrokart.netlify.app/"
            >
              Live
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/Shankarprince/ecommerce-client"
            >
              Client Code
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/Shankarprince/ecommerce-server"
            >
              Server Code
            </a>
          </div>
        </div>
      </div>
      <div className="project-container">
        <img
          className="project-image"
          src={require("../Images/movies.PNG")}
          alt=""
        ></img>
        <div className="project-inner-container">
          <h3>Popcorn Time</h3>
          <p>
            All top trending movie reviews, analysis, stories and latest news.
            Box Office Collections, Upcoming releases.
          </p>
          <p>HTML, CSS, JavaScript, React, NodeJS, ExpressJS, MongoDB</p>
          <div className="project-links">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://movie-reviews-app.netlify.app/"
            >
              Live
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/Shankarprince/movie-reviews-client"
            >
              Client Code
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/Shankarprince/movie-reviews-server"
            >
              Server Code
            </a>
          </div>
        </div>
      </div>
      <div className="project-container">
        <img
          className="project-image"
          src={require("../Images/video-converter.PNG")}
          alt=""
        ></img>
        <div className="project-inner-container">
          <h3>Desktop Video Converter App</h3>
          <p>
            Convert any video to your desired format using the fast processing
            video converter app.{" "}
          </p>
          <p>HTML, CSS, JavaScript, NodeJS, ExpressJS, FFMPEG</p>
          <div className="project-links">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/Shankarprince/video-converter"
            >
              Source Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
