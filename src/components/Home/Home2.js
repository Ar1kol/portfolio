import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiFillInstagram, AiFillFacebook } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm passionate about learning new&nbsp;
              <b className="purple">technology&nbsp;</b>
              and&nbsp;
              <b className="purple">programming&nbsp;</b>
              languages.
              <br />
              <br />
              I'm looking forward to taking part in developing&nbsp;
              <b className="purple">
                the apps that will make this world a better place.
              </b>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="purple">Python, Django, Node.js</b> and&nbsp;
              <b className="purple">React.js.</b>
              <br />
              <br />
              Despite the fact that I'm only at the&nbsp;
              <b className="purple">
                beginning of my journey as a developer,&nbsp;
              </b>
              in the near future, I see myself in the position of a&nbsp;
              <b className="purple">Full Stack Web Developer,&nbsp;</b>
              ready to fully manage projects.
              <br />
              <br />
              <b className="purple">My goal&nbsp;</b>
              in a few years is to grow to the CTO position of a company.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Ar1kol"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/profile.php?id=100000420424724"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillFacebook />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/arkadiy-kolomiets"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/arkashakol92/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
