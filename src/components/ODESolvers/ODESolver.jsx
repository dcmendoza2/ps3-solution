import React, { useState } from "react";
import { Container, Card, Button, Table } from "react-bootstrap";
import Plot from "react-plotly.js";

import {
  FUNC1A,
  FUNC1B,
  FUNC2A,
  FUNC2B,
  eulerMethod,
  rk4Method,
} from "../../utils/odeUtils";
export default function ODESolver() {
  const [func, setFunc] = useState(() => FUNC1A);
  const [ya, setYa] = useState(1);
  const [y, t] = eulerMethod({
    dy: func,
    h: 0.025,
    bounds: [0, 1],
    y_a: ya,
  });
  const [y1, t1] = eulerMethod({
    dy: func,
    h: 0.05,
    bounds: [0, 1],
    y_a: ya,
  });
  const [y2, t2] = rk4Method({
    dy: func,
    h: 0.025,
    bounds: [0, 1],
    y_a: ya,
  });
  const [y3, t3] = rk4Method({
    dy: func,
    h: 0.05,
    bounds: [0, 1],
    y_a: ya,
  });
  return (
    <Card className="my-2">
      <Container>
        <Button
          onClick={() => {
            setFunc(() => FUNC1A);
            setYa(1);
          }}
        >
          1A
        </Button>
        <Button
          onClick={() => {
            setFunc(() => FUNC1B);
            setYa(1);
          }}
        >
          1B
        </Button>
        <Button
          onClick={() => {
            setFunc(() => FUNC2A);
            setYa(-1);
          }}
        >
          2A
        </Button>
        <Button
          onClick={() => {
            setFunc(() => FUNC2B);
            setYa(1);
          }}
        >
          2B
        </Button>
      </Container>
      <Plot
        config={{ displayModeBar: false, scrollZoom: false, staticPlot: true }}
        data={[
          {
            x: t,
            y: y,
            name: "Euler h = 0.025",
            line: { shape: "linear", dash: "dash" },
            mode: "lines",
            type: "scatter",
          },
          {
            x: t1,
            y: y1,
            name: "Euler h = 0.05",
            line: { shape: "linear", dash: "dashdot" },
            mode: "lines",
            type: "scatter",
          },
          {
            x: t2,
            y: y2,
            line: { shape: "linear", dash: "longdash" },
            name: "RK4 h = 0.025",
            mode: "lines",
            type: "scatter",
          },
          {
            x: t3,
            y: y3,
            line: { shape: "linear", dash: "longdashdot" },
            name: "RK4 h = 0.05",
            mode: "lines",
            type: "scatter",
          },
        ]}
      ></Plot>
      <Container>
        <Table>
          <thead>
            <tr>
              <th>t</th>
              <th>Euler h = 0.025</th>
              <th>Euler h = 0.05</th>
              <th>RK4 h = 0.025</th>
              <th>RK4 h = 0.05</th>
            </tr>
          </thead>
          <tbody>
            {[0.1, 0.2, 0.3, 0.4].map((data) => (
              <tr key={`${data}-row-ode`}>
                <td>{data}</td>
                <td>{y[t.findIndex((e) => e === data)].toFixed(6)}</td>
                <td>{y1[t1.findIndex((e) => e === data)].toFixed(6)}</td>
                <td>{y2[t2.findIndex((e) => e === data)].toFixed(6)}</td>
                <td>{y3[t3.findIndex((e) => e === data)].toFixed(6)}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </Card>
  );
}
