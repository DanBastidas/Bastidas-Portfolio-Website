/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import React from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"
import CardDeck from "react-bootstrap/CardDeck"

const MainCards = () => (
  <Container>
    <p
      className="text-center"
      css={css`
        color: white;
      `}
    >
      This website is still under construction. Please come back soon!
    </p>
  </Container>
)

export default MainCards
