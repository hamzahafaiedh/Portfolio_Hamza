import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import SmartEsprit from "../../Assets/Projects/Smart Esprit.png";
import HospiHub from "../../Assets/Projects/HospiHub.png";
import Kadem from "../../Assets/Projects/Kadem.png";

function Projects() {
  return (
    <Container fluid className="project-section" id="projects-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={HospiHub}
              isBlog={false}
              title="HospiHub"
              description="Development of a Full Stack JS web application that ensures a comprehensive schedule management system for doctors and appointment scheduling for patients in private hospitals, along with a recommendation system that informs patients about their illnesses and necessary precautions."
              ghLink="https://github.com/hamzahafaiedh/FrontEnd-PI-TWIN7-2023-THE-DEBUGGERS"
              demoLink="https://hospihub.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Kadem}
              isBlog={false}
              title="Kaddem"
              description="Development of a web application that enables the management of universities, students, and teachers, along with their activities such as events, contracts, clubs, and project teams."
              ghLink="https://github.com/hamzahafaiedh/KademFront"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SmartEsprit}
              isBlog={false}
              title="Smart Esprit"
              description="Development of a desktop application that enables establishments to manage various services such as administration, catering, inventory, dormitories, users, and complaints. Response: Selected to participate in the Project Ball, 9th edition 2022."              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
