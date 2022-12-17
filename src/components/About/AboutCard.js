import Card from "react-bootstrap/Card";
import { GiPalette } from "react-icons/gi";
import { CgGym } from "react-icons/cg";
import { SiYourtraveldottv } from "react-icons/si";
import { FaHandsHelping } from "react-icons/fa";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            <br />I am a graduate of John Bryce and a junior software developer
            at IdeaSoft company.
            <br />
            <br />
            Besides programming, some other activities that I love to do:
          </p>
          <ul>
            <li className="about-activity">
              <CgGym />&nbsp; Sport - Gym and Running
            </li>
            <li className="about-activity">
              <SiYourtraveldottv />&nbsp; Travelling
            </li>
            <li className="about-activity">
              <FaHandsHelping />&nbsp; Helping People - Volunteer
            </li>

            <li className="about-activity">
              <GiPalette />&nbsp; Art - Visiting Exhibitions and Workshops
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
