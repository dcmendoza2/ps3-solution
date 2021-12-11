import React, { useContext } from "react";

import { Card } from "react-bootstrap";

import { StudentNoContext } from "../../contexts/StudentNo";
import { InlineMath } from "react-katex";

import Item1A from "./Item1A";
import Item1B from "./Item1B";
import Item1C from "./Item1C";

export default function Item1() {
  const studentNoState = useContext(StudentNoContext).studentNoState;
  return (
    <Card>
      <Card.Header>#1</Card.Header>
      <Card.Body>
        <Card.Title>
          a) Graph the (i) Piecewise-Constant, Left-Endpoint interpolant, (ii)
          Piecewise-Linear interpolant, and (iii) Quadratic Interpolant.
        </Card.Title>
        <Item1A
          toInterpolate={
            studentNoState.studentNo !== ""
              ? parseFloat("9." + studentNoState.studentNo.substring(4, 9))
              : null
          }
        />
        <Card.Title>
          b) Approximate 𝑓(9.
          {studentNoState.studentNo !== ""
            ? studentNoState.studentNo.substring(4, 9)
            : "𝛼𝛽𝛾𝛿𝜖"}
          ) using: (i) Piecewise-Constant, Left-Endpoint, (ii) Piecewise-Linear,
          and (iii) Quadratic Interpolation.
        </Card.Title>
        <Item1B
          toInterpolate={
            studentNoState.studentNo !== ""
              ? parseFloat("9." + studentNoState.studentNo.substring(4, 9))
              : null
          }
        />
        <Card.Title>
          c) Compute the error for your interpolation for each interpolant if{" "}
          <InlineMath
            math={"f(x) =\\sqrt{e^{-x^2}+2x+3} - \\sqrt[x]{e^{-x^2}+2x-3}"}
          ></InlineMath>
        </Card.Title>
        <Item1C
          toInterpolate={
            studentNoState.studentNo !== ""
              ? parseFloat("9." + studentNoState.studentNo.substring(4, 9))
              : null
          }
        />
      </Card.Body>
    </Card>
  );
}
