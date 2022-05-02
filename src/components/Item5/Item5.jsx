import React, { useContext } from "react";
import { Card, Table } from "react-bootstrap";
import { StudentNoContext } from "../../contexts/StudentNo";

import {
  FUNC,
  DATASET_INTEGRAL,
  summationRect,
  summationTrap,
} from "../../utils/dataset";
import { InlineMath } from "react-katex";
export default function Item5() {
  const studentNoState = useContext(StudentNoContext).studentNoState;
  const lower =
    studentNoState.studentNo !== ""
      ? parseFloat("6." + studentNoState.studentNo.substring(4, 5))
      : "6.\\alpha";
  const higher =
    studentNoState.studentNo !== ""
      ? parseFloat(
          parseFloat("6." + studentNoState.studentNo.substring(4, 5)) + 0.2
        ).toFixed(1)
      : "6.\\alpha + 0.2";
  const point = parseFloat("6" + studentNoState.studentNo.substring(4, 5)) / 10;

  return (
    <Card>
      <Card.Header>
        #5
        <InlineMath math={`\\int_{${lower}}^{${higher}} f(x) dx`}></InlineMath>
      </Card.Header>

      <Card.Body>
        <Card.Title>Rectangle Rule (left)</Card.Title>
        <Table className="container" responsive striped size="sm">
          <thead>
            <tr>
              <th>h</th>
              <th>
                <InlineMath
                  math={`\\int_{${lower}}^{${higher}} f(x) dx`}
                ></InlineMath>
              </th>
            </tr>
          </thead>
          <tbody>
            {[0.1, 0.05, 0.025].map((step) => (
              <tr key={`rectangle-rule-${step}`}>
                <td>{step}</td>
                <td>
                  {studentNoState.studentNo !== "" && (
                    <InlineMath
                      math={`\\int_{${lower}}^{${higher}} f(x) dx = ${(
                        step * summationRect(lower, higher, step, FUNC)
                      ).toFixed(6)}`}
                    />
                  )}
                  {studentNoState.studentNo === "" && (
                    <InlineMath
                      math={`\\int_{${lower}}^{${higher}} f(x) dx = \\sum {f(x_i)*${step}}`}
                    />
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Card.Title>Trapezoidal</Card.Title>
        <Table className="container" responsive striped size="sm">
          <thead>
            <tr>
              <th>h</th>
              <th>
                <InlineMath
                  math={`\\int_{${lower}}^{${higher}} f(x) dx`}
                ></InlineMath>
              </th>
            </tr>
          </thead>
          <tbody>
            {[0.1, 0.05, 0.025].map((step) => (
              <tr key={`trapezoid-rule-${step}`}>
                <td>{step}</td>
                <td>
                  {studentNoState.studentNo !== "" && (
                    <InlineMath
                      math={`\\int_{${lower}}^{${higher}} f(x) dx = ${(
                        0.5 *
                        step *
                        summationTrap(lower, higher, step, FUNC)
                      ).toFixed(6)}`}
                    />
                  )}
                  {studentNoState.studentNo === "" && (
                    <InlineMath
                      math={`\\int_{${lower}}^{${higher}} f(x) dx = \\sum {(f(x_i) + f(x_{i + 1}))*\\frac{${step}}{2}}`}
                    />
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Card.Title>Errors</Card.Title>

        <Table className="container" responsive striped size="sm">
          {studentNoState.studentNo !== "" && (
            <InlineMath
              math={`{\\int_{${lower}}^{${higher}} f(x) dx}_a = ${DATASET_INTEGRAL[point]}`}
            ></InlineMath>
          )}
          <thead>
            <tr>
              <th>h</th>
              <th>Rectangle</th>
              <th>Trapezoidal</th>
            </tr>
          </thead>
          <tbody>
            {[0.1, 0.05, 0.025].map((step) => (
              <tr key={`error-int-${step}`}>
                <td>{step}</td>
                <td>
                  {studentNoState.studentNo !== "" && (
                    <InlineMath
                      math={`| {\\int_{${lower}}^{${higher}} f(x) dx}_a  -\\int_{${lower}}^{${higher}} f(x) dx|  = ${Math.abs(
                        DATASET_INTEGRAL[point] -
                          step * summationRect(lower, higher, step, FUNC)
                      ).toFixed(6)}`}
                    />
                  )}
                  {studentNoState.studentNo === "" && (
                    <InlineMath
                      math={`| {\\int_{${lower}}^{${higher}} f(x) dx}_a  -\\int_{${lower}}^{${higher}} f(x) dx| = |{\\int_{${lower}}^{${higher}} f(x) dx}_a -\\sum {f(x_i)*${step}}|`}
                    />
                  )}
                </td>
                <td>
                  {studentNoState.studentNo !== "" && (
                    <InlineMath
                      math={`| {\\int_{${lower}}^{${higher}} f(x) dx}_a  -\\int_{${lower}}^{${higher}} f(x) dx| = ${Math.abs(
                        DATASET_INTEGRAL[point] -
                          0.5 * step * summationTrap(lower, higher, step, FUNC)
                      ).toFixed(6)}`}
                    />
                  )}
                  {studentNoState.studentNo === "" && (
                    <InlineMath
                      math={`| {\\int_{${lower}}^{${higher}} f(x) dx}_a  -\\int_{${lower}}^{${higher}} f(x) dx| = |{\\int_{${lower}}^{${higher}} f(x) dx}_a -\\sum {(f(x_i) + f(x_{i + 1}))*\\frac{${step}}{2}}|`}
                    />
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
}
