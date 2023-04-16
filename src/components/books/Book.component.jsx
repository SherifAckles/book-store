import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import "./books.css";

const Book = ({ imgUrl, title, description, price }) => {
  return (
    <Col>
      <Card
        className=" bg-success text-white rounded-lg card text-center p-3 "
        style={{ width: "18rem" }}
      >
        <Card.Img
          variant="top"
          src={imgUrl}
          style={{
            width: "254px",
            height: "254px",
          }}
        />
        <Card.Body>
          <Card.Title>{title} </Card.Title>
          <Card.Text>{description}</Card.Text>
          <div className="mx-5 mt-4">
            <span className=" ">Buy Now</span>
            <Button className="mt-2" variant="light">
              {price}
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Book;
