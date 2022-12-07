import { Col, Row } from "react-bootstrap";
import { DiMongodb } from "react-icons/di";
import { SiSqlite, SiPostgresql, SiMicrosoftsqlserver } from "react-icons/si";

const Database = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <a
          className="stack-link"
          target="_blank"
          rel="noreferrer"
          href="https://www.mongodb.com/"
        >
          <DiMongodb />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a
          className="stack-link"
          target="_blank"
          rel="noreferrer"
          href="https://www.postgresql.org/"
        >
          <SiPostgresql />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a
          className="stack-link"
          target="_blank"
          rel="noreferrer"
          href="https://www.microsoft.com/en-us/sql-server/sql-server-downloads"
        >
          <SiMicrosoftsqlserver />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a
          className="stack-link"
          target="_blank"
          rel="noreferrer"
          href="https://www.sqlite.org"
        >
          <SiSqlite />
        </a>
      </Col>
    </Row>
  );
};

export default Database;
