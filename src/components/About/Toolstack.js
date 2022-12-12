import { Col, Row } from "react-bootstrap";
import { DiGit } from "react-icons/di";
import {
  SiVisualstudiocode,
  SiPostman,
  SiDocker,
  SiAnaconda,
  SiPycharm,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <a
          className="stack-link"
          target="_blank"
          rel="noreferrer"
          href="https://code.visualstudio.com/"
        >
          <SiVisualstudiocode />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a
          className="stack-link"
          target="_blank"
          rel="noreferrer"
          href="https://www.postman.com/"
        >
          <SiPostman />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a
          className="stack-link"
          target="_blank"
          rel="noreferrer"
          href="https://git-scm.com/"
        >
          <DiGit />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a
          className="stack-link"
          target="_blank"
          rel="noreferrer"
          href="https://www.docker.com/"
        >
          <SiDocker />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a
          className="stack-link"
          target="_blank"
          rel="noreferrer"
          href="https://www.anaconda.com/"
        >
          <SiAnaconda />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a
          className="stack-link"
          target="_blank"
          rel="noreferrer"
          href="https://www.jetbrains.com/pycharm/"
        >
          <SiPycharm />
        </a>
      </Col>
    </Row>
  );
}

export default Toolstack;
