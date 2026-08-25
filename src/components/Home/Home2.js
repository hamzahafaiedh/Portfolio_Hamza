import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/home-main.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            A passionate Full-Stack Software Engineer 🚀 with 3+ years building AI-integrated web platforms. <br></br>
            Contact Me : <a href="mailto:Hamza.hafaiedh13@gmail.com" className="purple">Hamza.hafaiedh13@gmail.com</a>
              <br />
              <br />I work daily with 
              <i>
                <b className="purple"> TypeScript / React / Next.js / Node.js / C# / .NET / Python / FastAPI</b>
              </i>
              <br />
              and their surrounding libraries, frameworks and cloud tooling.
              <br />
              <br></br>
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">AI-driven Web Technologies and Products. </b> 
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing <b className="purple">highly interactive Front end / User Interfaces</b> for your web applications 
              and Build <b className="purple">powerful and efficient </b>backend systems and APIs for seamless data processing, communication, and integration.

            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <br/>
        
      </Container>
    </Container>
  );
}
export default Home2;
