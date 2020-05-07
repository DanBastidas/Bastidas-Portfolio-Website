/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import { Container, Row, Col, Hidden, Visible } from "react-grid-system"
import { Link } from "gatsby"
//import Navbar from "react-bootstrap/Navbar"

import React from "react"

const NavbarComp = () => (
  <div id="nav">
    <Container fluid>
      <Row align="start">
        <Col>
          <div className="navbarlogo">
            <Link to="/">
              DB
            </Link>
          </div>
        </Col>

        <Col xs="content" md="content" className="navbaritem">
          <Link to="/projects">
            projects
          </Link>
        </Col>
        <Col xs="content" md="content" className="navbaritem">
          <Link to="/photography">
            photography
          </Link>
        </Col>
        <Col xs="content" md="content" className="navbaritem">
          <Link to="/resume">
            resume
          </Link>
        </Col>
      </Row>
    </Container>
  </div>
)

export default NavbarComp
