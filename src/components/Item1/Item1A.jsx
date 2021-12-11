import React from "react";
import Plot from "react-plotly.js";

import { DATASET, quadInterpolant } from "../../utils/dataset";

export default function Item1A(props) {
  const midpoint = parseFloat(Math.trunc(props.toInterpolate * 10) / 10);
  const midpointIndex = DATASET.findIndex((element) => element[0] === midpoint);
  const DATA = DATASET.slice(midpointIndex, midpointIndex + 3);
  let xQuad = [];
  let yQuad = [];
  if (DATA?.length !== 0) {
    const quadratic = quadInterpolant({
      x0: DATA[0][0],
      x1: DATA[1][0],
      x2: DATA[2][0],
      y0: DATA[0][1],
      y1: DATA[1][1],
      y2: DATA[2][1],
    });
    for (let i = 0; i < 100; i++) {
      let x = DATA[0][0] + (i * (DATA[2][0] - DATA[0][0])) / 100.0;
      xQuad.push(x);
      yQuad.push(quadratic(x.toFixed(6)));
    }
  }

  return (
    <>
      {props.toInterpolate && (
        <Plot
          config={{ displayModeBar: false }}
          data={[
            {
              x: DATA.map((data) => data[0]),
              y: DATA.map((data) => data[1]),
              type: "scatter",
              mode: "markers",
              marker: { color: "black" },
              name: "Given dataset",
            },
            {
              x: [DATA[0][0], DATA[1][0]],
              y: [DATA[0][1], DATA[0][1]],
              type: "scatter",
              line: { dash: "dot" },
              mode: "lines+markers",
              marker: { color: "red" },
              name: "PCLE",
            },
            {
              x: [DATA[1][0], DATA[2][0]],
              y: [DATA[1][1], DATA[1][1]],
              type: "scatter",
              line: { dash: "dot" },
              mode: "lines+markers",
              marker: { color: "red" },
              name: "PCLE",
              showlegend: false,
            },
            {
              x: [DATA[0][0], DATA[1][0]],
              y: [DATA[0][1], DATA[1][1]],
              type: "scatter",
              line: { shape: "linear", dash: "dash" },
              mode: "lines+markers",
              marker: { color: "green" },
              name: "Piecewise-Linear",
            },
            {
              x: [DATA[1][0], DATA[2][0]],
              y: [DATA[1][1], DATA[2][1]],
              type: "scatter",
              line: { shape: "linear", dash: "dash" },
              mode: "lines+markers",
              marker: { color: "green" },
              name: "Piecewise-Linear",
              showlegend: false,
            },
            {
              x: xQuad, //DATA.map((data) => data[0]),
              y: yQuad, //DATA.map((data) => data[1]),
              type: "scatter",
              line: { shape: "spline", dash: "longdash" },
              mode: "lines",
              marker: { color: "blue" },
              name: "Quadratic",
            },
          ]}
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
        />
      )}
      {!props.toInterpolate && "Enter your student no."}
    </>
  );
}
