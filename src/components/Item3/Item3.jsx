import React, { useContext } from "react";
import { Card } from "react-bootstrap";
import { StudentNoContext } from "../../contexts/StudentNo";

export default function Item3() {
  const studentNoState = useContext(StudentNoContext).studentNoState;

  return (
    <Card>
      <Card.Header>#3</Card.Header>
      <Card.Body>
        <Card.Title>Forward Difference</Card.Title>
        <Card.Title>Backward Difference</Card.Title>
        <Card.Title>Central Difference</Card.Title>
        <Card.Title>Errors</Card.Title>
      </Card.Body>
    </Card>
  );
}
