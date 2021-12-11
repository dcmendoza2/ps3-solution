import React from "react";
import Plot from "react-plotly.js";

import { Container, Row, Table } from "react-bootstrap";
import {
  findSandwichingPoints,
  FUNC,
  quadInterpolant,
  linearInterpolant,
} from "../../utils/dataset";

export default function InterpolantTemplate(props) {
  const [x0, x1, x2] = props.toInterpolate
    ? findSandwichingPoints({
        start: parseFloat(Math.trunc(props.toInterpolate * 10) / 10),
        end: parseFloat(Math.trunc(10 + props.toInterpolate * 10) / 10),
        step: props.step,
        target: props.toInterpolate,
      })
    : [0, 0, 0];
  const y0 = FUNC(x0);
  const y1 = FUNC(x1);
  const y2 = FUNC(x2);
  let xQuad = [];
  let yQuad = [];
  const quadratic = quadInterpolant({
    x0: x0,
    x1: x1,
    x2: x2,
    y0: y0,
    y1: y1,
    y2: y2,
  });
  const linear = linearInterpolant({
    x0: x0,
    x1: x1,
    y0: y0,
    y1: y1,
  });
  for (let i = 0; i < 100; i++) {
    let x = x0 + (i * (x2 - x0)) / 100.0;
    xQuad.push(x);
    yQuad.push(quadratic(x.toFixed(6)));
  }
  return (
    <>
      {props.toInterpolate && (
        <Container>
          <Plot
            config={{ displayModeBar: false }}
            layout={{
              shapes: [
                {
                  line: {
                    color: "black",
                    dash: "solid",
                    width: 0.5,
                  },
                  type: "line",
                  x0: props.toInterpolate,
                  x1: props.toInterpolate,
                  yref: "paper",
                  y0: 0,
                  y1: 1,
                },
              ],
            }}
            data={[
              {
                x: [x0, x1, x2],
                y: [y0, y1, y2],
                type: "scatter",
                mode: "markers",
                marker: { color: "black" },
                name: "Generated data",
              },
              {
                x: [x0, x1],
                y: [y0, y0],
                type: "scatter",
                line: { dash: "dot" },
                mode: "lines+markers",
                marker: { color: "red" },
                name: "PCLE",
              },
              {
                x: [x1, x2],
                y: [y1, y1],
                type: "scatter",
                line: { dash: "dot" },
                mode: "lines+markers",
                marker: { color: "red" },
                name: "PCLE",
                showlegend: false,
              },
              {
                x: [x0, x1],
                y: [y0, y1],
                type: "scatter",
                line: { shape: "linear", dash: "dash" },
                mode: "lines+markers",
                marker: { color: "green" },
                name: "Piecewise-Linear",
              },
              {
                x: [x1, x2],
                y: [y1, y2],
                type: "scatter",
                line: { shape: "linear", dash: "dash" },
                mode: "lines+markers",
                marker: { color: "green" },
                name: "Piecewise-Linear",
                showlegend: false,
              },
              {
                x: xQuad,
                y: yQuad,
                type: "scatter",
                line: { shape: "spline", dash: "longdash" },
                mode: "lines",
                marker: { color: "blue" },
                name: "Quadratic",
              },
            ]}
          />
          <Row>
            <Table className="container" responsive striped size="sm">
              <thead>
                <tr>
                  <th>Interpolant</th>
                  <th>F(x)</th>
                  <th>Error</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>PCLE</td>
                  <td>{y0.toFixed(6)}</td>
                  <td>{Math.abs(y0 - FUNC(props.toInterpolate)).toFixed(12)}</td>
                </tr>
                <tr>
                  <td>Linear</td>
                  <td>{linear(props.toInterpolate).toFixed(6)}</td>
                  <td>
                    {Math.abs(
                      linear(props.toInterpolate) - FUNC(props.toInterpolate)
                    ).toFixed(12)}
                  </td>
                </tr>
                <tr>
                  <td>Quadratic</td>
                  <td>{quadratic(props.toInterpolate).toFixed(6)}</td>
                  <td>
                    {Math.abs(
                      quadratic(props.toInterpolate) - FUNC(props.toInterpolate)
                    ).toFixed(12)}
                  </td>
                </tr>
              </tbody>
            </Table>
          </Row>
        </Container>
      )}
    </>
  );
}
