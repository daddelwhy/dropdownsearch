import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./Detail.css";

function Detail(props) {
  const {foods} = props
  
  return (
    <Container>
      <Row>
        {foods.map((item,index) => (
          <Col key={index} md={4} className="mb-4">
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src={item.image_url}
                alt="img"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <Card.Body>
                <main>
                  <Card.Title>menu: {item.menu}</Card.Title>
                  <Card.Text>foodName: {item.foodName}</Card.Text>
                  <Button variant="primary">LINKS</Button>
                </main>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Detail;
