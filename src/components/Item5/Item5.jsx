import React, { useContext } from "react";
import { Card } from "react-bootstrap";
import { StudentNoContext } from "../../contexts/StudentNo";

export default function Item5() {
  const studentNoState = useContext(StudentNoContext).studentNoState;

  return (
    <Card>
      <Card.Header>#5</Card.Header>
      <Card.Body>
        <Card.Title>Rectangle Rule (left)</Card.Title>
        <Card.Title>Trapezoidal</Card.Title>
        <Card.Title>Errors</Card.Title>
      </Card.Body>
    </Card>
  );
}
