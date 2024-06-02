import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Pranav Aggarwal </span>
            from <span className="purple"> Sirsa, India.</span>
            <br />
            I am currently a Student at Scaler School of Technology.
            <br />
            I am currently pursuing my B.Tech in Computer Science from BITS Pilani.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> PLaying BasketBall
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Technology makes what was once impossible possible."{" "}
          </p>
          <footer className="blockquote-footer">Pranav</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
