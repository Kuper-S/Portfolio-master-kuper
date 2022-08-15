import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";


function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello Everyone, I am <span className="purple">Avihai Kuperberg</span>
            from <span className="purple"> Gilon, Israel.</span>
            <br />I am a junior pursuing Full-Stack Developer.
            <br />Bachelor's degree in Food Engineering and Biotechnology.
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Video Games , Mostly shooting games (FPS).
            </li>
            <li className="about-activity">
              <ImPointRight /> Watch & Play Basketball .
            </li>
            <li className="about-activity">
              <ImPointRight /> Love welding and manual labor.
            </li>
            <li className="about-activity">
              <ImPointRight /> Loves to tell jokes that are usually funny.
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Don’t Think Out of the Box – Think Like there is No Box!"{" "}
          </p>
          <footer className="blockquote-footer">My Moto</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
