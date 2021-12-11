import React, { useContext } from "react";
import { Card, Table } from "react-bootstrap";
import { StudentNoContext } from "../../contexts/StudentNo";

import { FUNC, DATASET_FIRST_DERIVATIVE } from "../../utils/dataset";
import { InlineMath } from "react-katex";

export default function Item3() {
  const studentNoState = useContext(StudentNoContext).studentNoState;
  const point = parseFloat("9" + studentNoState.studentNo.substring(4, 5)) / 10;
  return (
    <Card>
      <Card.Header>
        #3
        <InlineMath
          math={`f'(${studentNoState.studentNo !== "" ? point : "9.\\alpha"})`}
        ></InlineMath>
      </Card.Header>
      <Card.Body>
        <Card.Title>Forward Difference</Card.Title>
        <Table className="container" responsive striped size="sm">
          <thead>
            <tr>
              <th>h</th>
              <th>f'(x)</th>
            </tr>
          </thead>
          <tbody>
            {[0.1, 0.05, 0.025, 0.0125].map((step) => (
              <tr key={`forward-diff-${step}`}>
                <td>{step}</td>
                <td>
                  {studentNoState.studentNo !== "" && (
                    <InlineMath
                      math={`f'(${point})= \\frac{f(${(point + step).toFixed(
                        4
                      )}) - f(${point})}{${step}}= ${(
                        (FUNC(point + step) - FUNC(point)) /
                        step
                      ).toFixed(6)}`}
                    />
                  )}
                  {studentNoState.studentNo === "" && (
                    <InlineMath
                      math={`f'(9.\\alpha) =\\frac{f(9.\\alpha + 0.1) - f(9.\\alpha)}{0.1}`}
                    />
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Card.Title>Backward Difference</Card.Title>
        <Table className="container" responsive striped size="sm">
          <thead>
            <tr>
              <th>h</th>
              <th>f'(x)</th>
            </tr>
          </thead>
          <tbody>
            {[0.1, 0.05, 0.025, 0.0125].map((step) => (
              <tr key={`backward-diff-${step}`}>
                <td>{step}</td>
                <td>
                  {studentNoState.studentNo !== "" && (
                    <InlineMath
                      math={`f'(${point})= \\frac{f(${point}) - f(${(
                        point - step
                      ).toFixed(4)})}{${step}}= ${(
                        (FUNC(point) - FUNC(point - step)) /
                        step
                      ).toFixed(6)}`}
                    />
                  )}
                  {studentNoState.studentNo === "" && (
                    <InlineMath
                      math={`f'(9.\\alpha) =\\frac{f(9.\\alpha) - f(9.\\alpha - ${step})}{${step}}`}
                    />
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Card.Title>Central Difference</Card.Title>
        <Table className="container" responsive striped size="sm">
          <thead>
            <tr>
              <th>h</th>
              <th>f'(x)</th>
            </tr>
          </thead>
          <tbody>
            {[0.1, 0.05, 0.025, 0.0125].map((step) => (
              <tr key={`central-diff-${step}`}>
                <td>{step}</td>
                <td>
                  {studentNoState.studentNo !== "" && (
                    <InlineMath
                      math={`f'(${point})= \\frac{f(${(point + step).toFixed(
                        4
                      )}) - f(${(point - step).toFixed(4)})}{${2 * step}}= ${(
                        (FUNC(point + step) - FUNC(point - step)) /
                        (2 * step)
                      ).toFixed(6)}`}
                    />
                  )}
                  {studentNoState.studentNo === "" && (
                    <InlineMath
                      math={`f'(9.\\alpha) =\\frac{f(9.\\alpha + ${step}) - f(9.\\alpha - ${step})}{${
                        2 * step
                      }}`}
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
              math={`f_a'(${point})= ${DATASET_FIRST_DERIVATIVE[point]}`}
            ></InlineMath>
          )}
          <thead>
            <tr>
              <th>h</th>
              <th>Forward</th>
              <th>Backward</th>
              <th>Center</th>
            </tr>
          </thead>
          <tbody>
            {[0.1, 0.05, 0.025, 0.0125].map((step) => (
              <tr key={`error-diff-${step}`}>
                <td>{step}</td>
                <td>
                  {studentNoState.studentNo !== "" && (
                    <InlineMath
                      math={`|f_a'(${point}) - f'(${point})|= ${Math.abs(
                        (FUNC(point + step) - FUNC(point)) / step -
                          DATASET_FIRST_DERIVATIVE[point]
                      ).toFixed(6)}`}
                    />
                  )}
                  {studentNoState.studentNo === "" && (
                    <InlineMath
                      math={`|f_a'(9.\\alpha) - f'(9.\\alpha)| = |f_a'(9.\\alpha) - \\frac{f(9.\\alpha + ${step}) - f(9.\\alpha)}{${step}}|`}
                    />
                  )}
                </td>
                <td>
                  {studentNoState.studentNo !== "" && (
                    <InlineMath
                      math={`|f_a'(${point}) - f'(${point})|= ${Math.abs(
                        (FUNC(point) - FUNC(point - step)) / step -
                          DATASET_FIRST_DERIVATIVE[point]
                      ).toFixed(6)}`}
                    />
                  )}
                  {studentNoState.studentNo === "" && (
                    <InlineMath
                      math={`|f_a'(9.\\alpha) - f'(9.\\alpha)| = |f_a'(9.\\alpha) - \\frac{f(9.\\alpha) - f(9.\\alpha - ${step})}{${step}}|`}
                    />
                  )}
                </td>
                <td>
                  {studentNoState.studentNo !== "" && (
                    <InlineMath
                      math={`|f_a'(${point}) - f'(${point})|= ${Math.abs(
                        (FUNC(point + step) - FUNC(point - step)) / (2 * step) -
                          DATASET_FIRST_DERIVATIVE[point]
                      ).toFixed(6)}`}
                    />
                  )}
                  {studentNoState.studentNo === "" && (
                    <InlineMath
                      math={`|f_a'(9.\\alpha) - f'(9.\\alpha)| = |f_a'(9.\\alpha) - \\frac{f(9.\\alpha + ${step}) - f(9.\\alpha - ${step})}{${
                        2 * step
                      }}|`}
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
