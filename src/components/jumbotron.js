import Jumbotron from "react-bootstrap/Jumbotron"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Typewriter from "typewriter-effect"
import React from "react"


const JumbotronComp = () => (
  <Jumbotron>
    <Container className="m-3 ">
      <Row noGutters="true">
        <Col>
          <h1 id="heading" className="text-right">
            <Typewriter
              options={{
                strings: [
                  "<strong>Hello</strong>, my name is",
                  "<strong>Hola</strong>, me llamo",
                  "<strong>Ciao</strong>, mi chiamo"
                ],
                loop: true,
                autoStart: true
              }}
            />
          </h1>
        </Col>
        <Col>
          <h1>Daniel Bastidas</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <h4 className="text-center lead">Programmer | Photographer | Student</h4>
        </Col>
      </Row>
    </Container>
  </Jumbotron>
)

export default JumbotronComp
