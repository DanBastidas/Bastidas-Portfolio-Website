/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Typewriter from "typewriter-effect"

const JumbotronComp = () => (
  <Container
    css={css`
      margin-top: 8rem;
      margin-bottom: 10rem;
    `}
  >
    <Row noGutters="true">
      <Col>
        <h1
          id="heading"
          className="text-right"
          css={css`
            color: white;
          `}
        >
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
        <h1
          css={css`
            color: #00a8e8;
          `}
        >
          Daniel Bastidas
        </h1>
      </Col>
    </Row>
    <Row
      css={css`
        margin-top: 0.5rem;
        margin-bottom: 3rem;
      `}
    >
      <Col>
        <h4
          className="text-center lead"
          css={css`
            color: white;
          `}
        >
          Programmer | Photographer | Student
        </h4>
      </Col>
    </Row>
  </Container>
)

export default JumbotronComp
