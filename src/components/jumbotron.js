/** @jsx jsx */
import { Container, Row, Col } from "react-grid-system"
import { css, jsx } from "@emotion/core"
import Typewriter from "typewriter-effect"
import { Component } from "react"
import anime from 'animejs/lib/anime.es.js';

class JumbotronComp extends Component {
  componentDidMount() {
    anime({
      targets: "div",
      opacity: 1,
      easing: 'easeInQuad',
      duration: 500

    })
  }
  render() {
    return (
      <Container className="jumbotron"
        fluid
        css={css`
          margin-top: 5em;
          margin-bottom: 5em;
          padding-top: 1em;
          max-width: 1800px;
        `}
      >
        <Row nogutter>
          <Col
            css={css`
              width: inherit;
            `}
          >
            <h1
              css={css`
                text-align: right;
                color: black;
                font-weight: 500;
                margin-bottom: 0;
              `}
            >
              <Typewriter
                options={{
                  strings: [
                    "<strong>Hello</strong>, my name is",
                    "<strong>Hola</strong>, me llamo",
                    "<strong>Ciao</strong>, mi chiamo",
                    "<strong>Bonjour</strong>, je m'appelle",
                    "<strong>Hallo</strong>, Mein name ist",
                    "<strong>Hello</strong>, my name is"
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
                color: #00adb5;
                font-weight: 500;
                margin-bottom: 0;
              `}
            >
              Daniel Bastidas
            </h1>
          </Col>
        </Row>
        <Row
          css={css`
            margin-bottom: 3rem;
          `}
        >
          <Col>
            <h4
              className="text-center lead"
              css={css`
                color: #303841;
                font-size: 0.65em;
                font-family: "Source Code Pro";
                font-weight: bold;
              `}
            >
              &lt; Programmer | Photographer | Student /&gt;
            </h4>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default JumbotronComp
