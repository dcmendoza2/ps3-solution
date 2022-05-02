import React, { useContext } from "react";
import { Card, Table } from "react-bootstrap";
import { StudentNoContext } from "../../contexts/StudentNo";
import { InlineMath } from "react-katex";

import { FUNC, DATASET_SECOND_DERIVATIVE } from "../../utils/dataset";

export default function Item4() {
  const studentNoState = useContext(StudentNoContext).studentNoState;
  const point = parseFloat("6" + studentNoState.studentNo.substring(4, 5)) / 10;

  return (
    <Card>
      <Card.Header>
        #4
        <InlineMath
          math={`f''(${
            studentNoState.studentNo !== ""
              ? parseFloat("6." + studentNoState.studentNo.substring(4, 5))
              : "6.\\alpha"
          })`}
        ></InlineMath>
      </Card.Header>
      <Card.Body>
        <Card.Title>Central Difference</Card.Title>
        <Table className="container" responsive striped size="sm">
          <thead>
            <tr>
              <th>h</th>
              <th>f''(x)</th>
              <th>
                error{" "}
                {studentNoState.studentNo !== "" && (
                  <InlineMath
                    math={`f_a''(${point})= ${DATASET_SECOND_DERIVATIVE[point]}`}
                  ></InlineMath>
                )}
              </th>
            </tr>
          </thead>
          <tbody>
            {[0.1, 0.05, 0.025].map((step) => (
              <tr key={`central-diff-${step}`}>
                <td>{step}</td>
                <td>
                  {studentNoState.studentNo !== "" && (
                    <InlineMath
                      math={`f''(${point})= \\frac{f(${(point + step).toFixed(
                        4
                      )}) - 2f(${point.toFixed(4)}) + f(${(point - step).toFixed(4)})}{${step}^{2}}= ${(
                        (FUNC(point + step) -
                          2 * FUNC(point) +
                          FUNC(point - step)) /
                        (step * step)
                      ).toFixed(8)}`}
                    />
                  )}
                  {studentNoState.studentNo === "" && (
                    <InlineMath
                      math={`f''(6.\\alpha) =\\frac{f(6.\\alpha + ${step}) - 2f(6.\\alpha) + f(6.\\alpha - ${step})}{${step}^2}`}
                    />
                  )}
                </td>
                <td>
                  {studentNoState.studentNo !== "" && (
                    <InlineMath
                      math={`|f_a''(${point}) - f''(${point})|=  ${Math.abs(
                        DATASET_SECOND_DERIVATIVE[point] -
                          (FUNC(point + step) -
                            2 * FUNC(point) +
                            FUNC(point - step)) /
                            (step * step)
                      ).toFixed(8)}`}
                    />
                  )}
                  {studentNoState.studentNo === "" && (
                    <InlineMath
                      math={`|f_a''(6.\\alpha) - f''(6.\\alpha)| = | f_a''(6.\\alpha) - \\frac{f(6.\\alpha + ${step}) - 2f(6.\\alpha) + f(6.\\alpha - ${step})}{${step}^2}|`}
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
