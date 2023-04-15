import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import "./books.css";

const Book = ({ imgUrl, title, description, price }) => {
  return (
    <Col md={4}>
      <Card
        className=" bg-success text-white rounded-lg card"
        style={{width:'18rem' }}
      >
        <Card.Img variant="top" src={imgUrl} />
        <Card.Body>
          <Card.Title>{title} </Card.Title>
          <Card.Text>{description}</Card.Text>
          <Button className="mt-1" variant="light">
            {price}
          </Button>
          <span className="ms-5 ">Buy Now</span>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Book;
