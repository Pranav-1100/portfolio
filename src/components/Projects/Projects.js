import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import weather from "../../Assets/Screenshot 2024-06-14 113610.png";
import quiz from "../../Assets/image.png";
import editor from "../../Assets/Screenshot 2024-07-29 142227.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects .
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="Video-Flip Editor">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Vide-Flip Editor"
              description="Edit your video with some basic functionalities like crop video in some given frames and manage video speed, volume and get recording of your edited video with live preview"
              ghLink="https://github.com/Pranav-1100/video-flip-editor"
              demoLink="https://video-flip-editor-ten.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="Weather-App"
              description="Your go-to source for real-time weather updates by searching your city."
              ghLink="https://github.com/Pranav-1100/weather-app"
              demoLink="https://custom-weather-react.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={quiz}
              isBlog={false}
              title="Quiz-App"
              description="Just a Small quiz"
              ghLink="https://github.com/Pranav-1100/Quiz"
              demoLink="https://quiz-github123.vercel.app/"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;