import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Hamza Hafaiedh </span>
            from <span className="purple"> Nabeul, Tunisia.</span>
            <br /> I am a second-year student pursuing an engineering degree at the Private School of Engineering and Technologies, specializing in web development.
            <br />
            With a creative and passionate mindset, I have always been drawn to the field of web development
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Video Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Photography
            </li>
            <li className="about-activity">
              <ImPointRight /> Sports
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Hamza Hafaiedh</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
