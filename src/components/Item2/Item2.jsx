import React, { useContext } from "react";
import { Card } from "react-bootstrap";

import InterpolantTemplate from "./InterpolantTemplate";

import { StudentNoContext } from "../../contexts/StudentNo";

export default function Item2() {
  const studentNoState = useContext(StudentNoContext).studentNoState;

  return (
    <Card>
      <Card.Header>#2</Card.Header>
      <Card.Body>
        <Card.Title>h = 0.05</Card.Title>
        <InterpolantTemplate
          step={0.05}
          toInterpolate={
            studentNoState.studentNo !== ""
              ? parseFloat("6." + studentNoState.studentNo.substring(4, 9))
              : null
          }
        />
        <Card.Title>h = 0.025</Card.Title>
        <InterpolantTemplate
          step={0.025}
          toInterpolate={
            studentNoState.studentNo !== ""
              ? parseFloat("6." + studentNoState.studentNo.substring(4, 9))
              : null
          }
        />
      </Card.Body>
    </Card>
  );
}
