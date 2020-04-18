import React from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"
import CardDeck from "react-bootstrap/CardDeck"


const MainCards = () => (
  <Container>
    <CardDeck>
      <Card>
        <Card.Body>
          <Card.Title>Programming Projects</Card.Title>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <Card.Title>Photography</Card.Title>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <Card.Title>About me</Card.Title>
        </Card.Body>
      </Card>
    </CardDeck>
  </Container>
)

export default MainCards
