import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hey there! I'm <span className="purple">Hamza Hafaiedh</span> from <span className="purple">Nabeul, Tunisia</span>.
            <br />
            I'm a Full-Stack Software Engineer with 3+ years of experience, currently leading a 3-engineer team on client integration engineering at a Swiss remote-first company.
            <br />
            I specialize in the <span className="purple">TypeScript / React</span> ecosystem, backend consolidation, and shipping production SDKs, and I'm passionate about modern web technologies, AI integration and clean development practices.
            <br />
            I’m someone who loves learning, communicating clearly, and working with others to build awesome stuff.
            <br />
            <br />
            Outside of coding, there are a few other things I enjoy doing too!
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
