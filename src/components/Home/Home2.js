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
            A passionate Full Stack Software Developer 🚀 having an experience of building Web applications. <br></br>
            Contact Me : Hamza.hafaiedh13@gmail.com
              <br />
              <br />I am fluent with 
              <i>
                <b className="purple"> Java / JavaScript / Angular / Reactjs / Nodejs / Spring Boot</b>
              </i>
              <br />
              and some other cool libraries and frameworks.
              <br />
              <br></br>
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Web Technologies and Products. </b> 
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
