import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import bbq from "../../Assets/bbq.jpg";
import pokeImg from "../../Assets/pokemon.png"
import quizi from "../../Assets/quiz.jpg"
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
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
              imgPath={bbq}
              isBlog={false}
              title="Plan it"
              description="App for Planning Social gathering In the easiest way for the user ,Determination of dates, Location ,Ordering participants ,List of equipment and other excellent plugins"
              ghLink="https://github.com/Kuper-S/plan-it-Full-Project"
              demoLink="https://plan-it-monday.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={quizi}
              isBlog={false}
            title="Quizi"
              description="A trivia app with mini-games in between is a great way to pass the time and enrich your knowledge"
              ghLink="https://github.com/Kuper-S/gg"
              demoLink="https://quizi-game.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pokeImg}
              isBlog={false}
              title="Todo List & Pokemon "
              description="A to-do list with a cool twist that also lets you catch Pokémon When Pokemon ID Entred."
              ghLink="https://github.com/Kuper-S/Monday-U-projcets/tree/ex8"
              demoLink="https://github.com/Kuper-S/Monday-U-projcets/tree/ex8"
            />
          </Col>
          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
