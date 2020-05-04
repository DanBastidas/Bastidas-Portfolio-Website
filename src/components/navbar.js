/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import { Container, Row, Col,Hidden, Visible } from "react-grid-system"
import { Link } from "gatsby"
//import Navbar from "react-bootstrap/Navbar"

import React from "react"

const NavbarComp = () => (
  <div id="nav">
    <Container fluid>
      <Row align="start">
        <Col>
          <Hidden xs className="navbarlogo"><div className= "navbarlogo"><Link to="" replace>DB</Link></div></Hidden>
          <Visible xs className="navbarlogo"><div id="vislogo"><Link to="" replace>Daniel Bastidas</Link></div></Visible>

        </Col>
        <Col md="content" className="navbaritem"><Link to="#" replace >projects</Link></Col>
        <Col md="content" className="navbaritem"><a href="https://drive.google.com/drive/folders/0B9KXRtDbSfpTMzV1ZnU3YURPOE0?usp=sharing">photography</a></Col>
        <Col md="content" className="navbaritem"><Link to="#" replace>resume</Link></Col>
      </Row>
    </Container>
  </div>
)

export default NavbarComp
