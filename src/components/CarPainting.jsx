import React from 'react'
import { Col, Container, Row,Image } from 'react-bootstrap'

function CarPainting() {
  return (
    <Container>
        <Col></Col>
        <Row>
        <Col className="d-flex align-items-center justify-content-center">
      <Image
        src="/images/manwithcar1.png"
        className="img-fluid w-100 h-100 object-fit-cover"
      />
    </Col>
    <Col style={{ position: "relative" }}>
  <button style={{ position: "absolute", left: "0", top: "41%",marginLeft:"-1rem", transform: "translateY(-30%)" }}>
    Click Me
  </button>
</Col>
        </Row>
    </Container>
  )
}




export default CarPainting