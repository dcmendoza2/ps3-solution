import React, { useContext } from "react";
import { Card } from "react-bootstrap";
import { StudentNoContext } from "../../contexts/StudentNo";

export default function Item2() {
  const studentNoState = useContext(StudentNoContext).studentNoState;

  return (
    <Card>
      <Card.Header>#2</Card.Header>
      <Card.Body>
        <Card.Title>h = 0.05</Card.Title>
        <Card.Title>h = 0.025</Card.Title>
        <Card.Title>h = 0.0125</Card.Title>
      </Card.Body>
    </Card>
  );
}
