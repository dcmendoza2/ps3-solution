import React from "react";

import { Table, Container } from "react-bootstrap";
import { DATASET } from "../utils/dataset";

export default function Dataset() {
  return (
    <Container className="my-2">
      <Table responsive striped bordered size="sm" className="text-center">
        <thead>
          <tr>
            <th>x</th>
            <th>f(x)</th>
          </tr>
        </thead>
        <tbody>
          {DATASET.map((data) => (
            <tr key={`${data}-set`}>
              <td>{data[0]}</td>
              <td>{data[1]}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}
