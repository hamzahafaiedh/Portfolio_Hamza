import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import CertifCard from "./CertificationCard";
import C1 from "../../Assets/Projects/Certif1.png";
import C2 from "../../Assets/Projects/Certif2.png";
import C3 from "../../Assets/Projects/Certif3.png";

function Certif() {
    return (
        <Container fluid className="project-section" id="certif-section">
          <Particle />
          <Container>
            <h1 className="project-heading">
              My <strong className="purple">Certifications 🏆 </strong>
            </h1>
            <p style={{ color: "white" }}>
            Achievements, Certifications, Award letters and some cool stuff that i have done !
        </p>
            <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
              <Col md={4} className="project-card">
                <CertifCard
                  imgPath={C1}
                  isBlog={false}
                  title="OpenBee's Commercial Curriculum"
                  />
              </Col>
    
              <Col md={4} className="project-card">
                <CertifCard
                  imgPath={C2}
                  isBlog={false}
                  title="OpenBee's pre-sales curriculum"
                />
              </Col>
    
              <Col md={4} className="project-card">
                <CertifCard
                  imgPath={C3}
                  isBlog={false}
                  title="OpenBee's technician curriculum"
                  />
              </Col>
            </Row>
          </Container>
        </Container>
      );
}

export default Certif;