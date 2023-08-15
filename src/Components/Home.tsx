import React from "react";
import "../Styles/Home.css";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { fetchPageInfo } from "../utils/fetchPageInfo";
import { useQuery } from "react-query";

const Home = () => {
  const { data, isLoading } = useQuery("pageInfo", fetchPageInfo);

  const [text] = useTypewriter({
    words: [`Hi, My name is ${data?.name} `, "Guy-who-loves-to-code.tsx"],
    loop: true,
    delaySpeed: 2000,
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="app__home">
      <div className="image-container"></div>
      <div className="content">
        {/* <img src="profile.jpg" alt="profile" className="profile-image" /> */}
        <div>
          <h2 className="title">{data?.role}</h2>
          <h1 className="scroll-text">
            <span>{text}</span>
            <Cursor cursorColor="#F7ABBA" />
          </h1>
        </div>
        <div className="button_div">
          <a href="#about" className="nav-links">
            <button className="homeButton">About</button>
          </a>
          <a href="#experience" className="nav-links">
            <button className="homeButton">Experience</button>
          </a>
          <a href="#education" className="nav-links">
            <button className="homeButton">Education</button>
          </a>
          <a href="#skills" className="nav-links">
            <button className="homeButton">Skills</button>
          </a>
          <a href="#projects" className="nav-links">
            <button className="homeButton">Projects</button>
          </a>
          <a href="#contact" className="nav-links">
            <button className="homeButton">Contact Me</button>
          </a>
        </div>

        <div className="resume_download">
          <button className="download-button">
            <a href="SagarSharma_CV.pdf" target="_blank">
              <img src="download-2.png" alt="download" />
              Download Resume
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
