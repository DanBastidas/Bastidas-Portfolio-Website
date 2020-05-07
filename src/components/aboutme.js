/** @jsx jsx */
import { Container, Row, Col, Hidden, Visible } from "react-grid-system"
import { css, jsx } from "@emotion/core"
import Typewriter from "typewriter-effect"

const AboutMe = () => (
  <div className="secondary-container">
    <div className="maincontent">
      <Container fluid>
        <Row
          nogutter
          css={css`
            padding-bottom: 3em;
          `}
        >
          <Col>
            <h2>
              <Typewriter
                onInit={typewriter => {
                  typewriter
                    .pauseFor(1000)
                    .typeString(
                      '<span class="codeText">const</span> <span class="codeTextSecondary"> Ab</span>'
                    )
                    .pauseFor(250)
                    .deleteChars(2)
                    .typeString('<span class="codeTextSecondary">aboot</span>')
                    .pauseFor(400)
                    .deleteChars(2)
                    .typeString('<span class="codeTextSecondary">utMr </span>')
                    .deleteChars(2)
                    .typeString(
                      '<span class="codeTextSecondary">e</span> <span class="codeTextTertiary">=</span>'
                    )
                    .start()
                }}
              ></Typewriter>
            </h2>
            <p>
              I fell in love with computers the first time I took apart my
              family's desktop computer nearly two decades ago. Since then, I've
              known that I wanted to pursue a future centered around technology.
              I've spent the past 4 years studying Computer Science and
              Psychology at Boston University in order to accomplish just that.
            </p>
            <p>
              Learning isn't just something that I do in order to pass my
              classes, it's in my blood. Being raised in a household of teachers
              has given me a lifelong pursuit for knowledge and a focus on
              enriching myself and those around me.
            </p>
          </Col>
        </Row>
        <Hidden xs s>
          {" "}
          <Row nogutter>
            <Col>
              <h3>
                <span className="codeText">var</span>{" "}
                <span className="codeTextSecondary">programming</span>{" "}
                <span className="codeTextTertiary">=</span>{" "}
              </h3>
              <p className="demo">~content coming soon~</p>
            </Col>
            <Col>
              <h3>
                <span className="codeText">var</span>{" "}
                <span className="codeTextSecondary">photography</span>{" "}
                <span className="codeTextTertiary">=</span>{" "}
              </h3>
              <p className="demo">~content coming soon~</p>
            </Col>
          </Row>
        </Hidden>
        <Visible xs s>
          <Row nogutter>
            <h3>
              <span className="codeText">var</span>{" "}
              <span className="codeTextSecondary">programming</span>{" "}
              <span className="codeTextTertiary">=</span>{" "}
            </h3>
          </Row>
          <Row nogutter>
            <p className="demomob">~content coming soon~</p>
          </Row>
          <Row nogutter>
            <h3>
              <span className="codeText">var</span>{" "}
              <span className="codeTextSecondary">photography</span>{" "}
              <span className="codeTextTertiary">=</span>{" "}
            </h3>
          </Row>
          <Row nogutter>
            <p className="demomob">~content coming soon~</p>
          </Row>
        </Visible>
      </Container>
    </div>
  </div>
)

export default AboutMe
