import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import comingSoon from "../../Assets/Projects/coming-soon.png";
import etherealShoes from "../../Assets/Projects/etherealShoes.png";
import web3 from "../../Assets/Projects/web-3.png";
import game2048 from "../../Assets/Projects/2048.png";
import car from "../../Assets/Projects/self-driving_car.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={etherealShoes}
              title="Etheral Shoes"
              description="E-commerce app building uses Django, React, and Redux. The app implements a complete purchase process from product selection to payment, as well as PayPal and Google Pay payment systems. The app includes the following:
              sign-up & sign-in flow for consumers and merchant, admin dashboard, payment & shipping integrations"
              gitHubLink="https://github.com/Ar1kol/Etheralshoes-shop/"
              demoLink="https://etherealshoes.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={web3}
              title="Krypt"
              description="Web3 app for connecting Metamask Wallet and transferring Ethereum(ETH) to other wallets. The transaction process is implemented through a smart contract. The app is built on React and TailwindCSS as well as the smart contract is written in Solidity."
              gitHubLink="https://github.com/Ar1kol/project_web3/"
              demoLink="https://web3-krypt-project.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={game2048}
              title="2048"
              description="The game 2048 is built using the Python Pygame module. The program has been converted to .exe, which allows to download the game to a computer and start playing. When the game window is closed, an auto-save is made and it is possible to continue from the point at which the game was interrupted. Game results are stored in the database."
              gitHubLink="https://github.com/Ar1kol/pygame_2048/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={car}
              title="Self-Driving Car"
              description="The self-driving car simulation is built on a neural network using pure JavaScript with no using libraries. Complete car driving mechanics, define the environment, simulate some sensors, detect collisions, and make the car control itself using a neural network."
              gitHubLink="https://github.com/gniziemazity/Self-driving-car/"
              demoLink="https://ar1kol.github.io/self-driving_car/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={comingSoon}
              title="Weather App"
              description="A weather application written in React receives weather data from the OpenWeatherMap API. Using the GeoDB API, you can find out the weather in a particular city, as well as get a weather forecast for the next two weeks in this city."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={comingSoon}
              title="Social media app"
              description="Social media app with email and Google Authentication, pagination, search and filtering capabilities, comments, and much more, this app is the best fully responsive MERN social media app."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
