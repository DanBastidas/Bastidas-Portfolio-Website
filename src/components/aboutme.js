/** @jsx jsx */
import { Container, Row, Col } from "react-grid-system"
import { css, jsx } from "@emotion/core"

const AboutMe = () => (
  <div className="secondary-container">
    <Container>
      <Row
        css={css`
          padding-bottom: 3em;
        `}
      >
        <Col>
          {" "}
          <h2>About Me</h2>
          <p>
            I fell in love with computers the first time I took apart my
            family's desktop computer nearly 17 years ago. Since then, I have
            known that I wanted to pursue a future centered around technology. I
            have spent the past 4 years studying Computer Science and Psychology
            at Boston University in order to accomplish just that.
          </p>
          <p>
            Learning isn't just something that I do in order to pass my classes,
            it's in my blood. Being raised in a household of teachers has given
            me a lifelong pursuit for knowledge and a focus on enriching myself
            and those around me.
          </p>
        </Col>
      </Row>
      <Row nogutter>
        <Col>
          <h3>Photography</h3>
          <p className="demo">~content coming soon~</p>
        </Col>
        <div className="verticalsep">
            
        </div>
        <Col>
          <h3>Programming</h3>
          <p className="demo">~content coming soon~</p>
        </Col>
      </Row>
    </Container>
  </div>
)

export default AboutMe
