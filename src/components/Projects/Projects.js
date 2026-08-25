import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import RoohElMedina from "../../Assets/Projects/RoohElMedinaMock.png";
import ClothingStore from "../../Assets/Projects/ClothingStoreMock.png";
import FiveSenses from "../../Assets/Projects/FiveSensesMock.png";
import Blackwood from "../../Assets/Projects/BlackwoodMock.png";

function Projects() {
  return (
    <Container fluid className="project-section" id="projects-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few production web platforms I've built and shipped for real clients.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={RoohElMedina}
              isBlog={false}
              title="Rooh El Medina"
              description="Production website for a Tunisian restaurant, built with React, Vite, Tailwind CSS and Supabase (PostgreSQL, Auth, Row Level Security, Storage). Public site with a dynamic menu and events, plus a secure admin dashboard for managing content, discounts and QR-code menus serving ~250 monthly visitors."
              demoLink="https://www.roohelmedina.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ClothingStore}
              isBlog={false}
              title="Clothing Store E-Commerce"
              description="Full-stack e-commerce platform for clothing brands, built with Next.js, TypeScript, Tailwind CSS, Supabase (PostgreSQL, Auth, Row Level Security, Storage) and Zustand. Mobile-first storefront with product variants, persistent cart and WhatsApp checkout, plus an admin dashboard for products, orders, categories and discounts."
              demoLink="https://clothing-e-commerce-eight.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={FiveSenses}
              isBlog={false}
              title="The Five Senses"
              description="Restaurant web app for a Tunisian restaurant, built with React, Vite, Tailwind CSS and Supabase (PostgreSQL, Auth, Row Level Security, Storage). Features a modern, animated landing page, popular-dishes showcase, table booking and bilingual (EN/FR) content."
              demoLink="https://the-five-senses.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Blackwood}
              isBlog={false}
              title="Blackwood"
              description="Restaurant web app for Blackwood in Hammamet, Tunisia, built with React, Vite, Tailwind CSS and Supabase (PostgreSQL, Auth, Row Level Security, Storage). An elegant single-page site covering the story, menu, reviews, awards and table reservations with a refined, editorial visual style."
              demoLink="https://blackwood-restaurant.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
