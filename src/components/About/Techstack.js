import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiPython,
  DiHtml5,
  DiCss3Full,
  DiAngularSimple,
  DiSass,
} from "react-icons/di";
import {
  SiFirebase,
  SiRedux,
  SiFlask,
  SiDjango,
  SiTypescript,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <a
          className="stack-link"
          target="_blank"
          rel="noreferrer"
          href="https://www.python.org/"
        >
          <DiPython />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a
          className="stack-link"
          target="_blank"
          rel="noreferrer"
          href="https://www.djangoproject.com/"
        >
          <SiDjango />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a
          className="stack-link"
          target="_blank"
          rel="noreferrer"
          href="https://flask.palletsprojects.com/"
        >
          <SiFlask />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a
          className="stack-link"
          target="_blank"
          rel="noreferrer"
          href="https://html.spec.whatwg.org/multipage/"
        >
          <DiHtml5 />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a
          className="stack-link"
          target="_blank"
          rel="noreferrer"
          href="https://drafts.csswg.org/"
        >
          <DiCss3Full />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a
          className="stack-link"
          target="_blank"
          rel="noreferrer"
          href="https://sass-lang.com/"
        >
          <DiSass />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a
          className="stack-link"
          target="_blank"
          rel="noreferrer"
          href="https://www.javascript.com/"
        >
          <DiJavascript1 />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a
          className="stack-link"
          target="_blank"
          rel="noreferrer"
          href="https://nodejs.org/"
        >
          <DiNodejs />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a
          className="stack-link"
          target="_blank"
          rel="noreferrer"
          href="https://www.typescriptlang.org/"
        >
          <SiTypescript />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a
          className="stack-link"
          target="_blank"
          rel="noreferrer"
          href="https://reactjs.org/"
        >
          <DiReact />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a
          className="stack-link"
          target="_blank"
          rel="noreferrer"
          href="https://redux.js.org/"
        >
          <SiRedux />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a
          className="stack-link"
          target="_blank"
          rel="noreferrer"
          href="https://angular.io/"
        >
          <DiAngularSimple />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a
          className="stack-link"
          target="_blank"
          rel="noreferrer"
          href="https://angular.io/"
        >
          <SiFirebase />
        </a>
      </Col>
    </Row>
  );
}

export default Techstack;
