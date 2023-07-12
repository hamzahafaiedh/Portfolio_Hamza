import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./Education";
import Particle from "../Particle";
import lpn from "../../Assets/Projects/lpn.png";
import esprit from "../../Assets/Projects/esprit.png";
import ipein from "../../Assets/Projects/ipein.png";

function Educ() {
    return (
        <Container fluid className="project-section" id="educ-section">
          <Particle />
          <Container>
            <h1 className="project-heading">
              My <strong className="purple">Education </strong>
            </h1>
            <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
              <Col md={4} className="project-card">
                <ProjectCard
                  imgPath={lpn}
                  isBlog={false}
                  title="LPN - Pilot High School in Nabeul"
                  description="Baccalaureate"
                  text="June 2019"
                  />
              </Col>
    
              <Col md={4} className="project-card">
                <ProjectCard
                  imgPath={ipein}
                  isBlog={false}
                  title="IPEIN - Preparatory Institute for Engineering Studies in Nabeul"
                  description="National Entrance Examinations for Engineering Training Cycles"
                  text="September 2019 - June 2021"
                />
              </Col>
    
              <Col md={4} className="project-card">
                <ProjectCard
                  imgPath={esprit}
                  isBlog={false}
                  title="ESPRIT - Private Higher School of Engineering and Technology"
                  description="Engineering degree in Computer Science (in progress)"
                  text="September 2021 - Present "
                  />
              </Col>
            </Row>
          </Container>
        </Container>
      );
}

export default Educ;