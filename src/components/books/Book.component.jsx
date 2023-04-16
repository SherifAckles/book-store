import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import "./books.css";

const Book = ({ imgUrl, title, description, price }) => {
  return (
    <Col lg={3} md={6} className="books--container">
      <Card className=" bg-success text-white rounded-lg  text-center  ">
        <Card.Img
          variant="top"
          src={imgUrl}
          style={{
            width: "254px",
            height: "254px",
            margin: "0 auto",
          }}
        />
        <Card.Body>
          <Card.Title>{title} </Card.Title>
          <Card.Text>{description}</Card.Text>
          <div className="mx-1 mt-4">
            <span className="me-5 ">Buy Now</span>
            <Button className="" variant="light">
              {price}
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Book;
