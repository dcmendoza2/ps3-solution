import "./App.css";
import StudentNoInput from "./components/StudentNoInput.jsx";
import FormErrors from "./components/FormErrors.jsx";
import Item1 from "./components/Item1/Item1";
import Item2 from "./components/Item2/Item2";
import Item3 from "./components/Item3/Item3";
import Item4 from "./components/Item4/Item4";
import Item5 from "./components/Item5/Item5";
import ODESolver from "./components/ODESolvers/ODESolver";
import Dataset from "./components/Dataset";
import "katex/dist/katex.min.css";

import { StudentNoContext } from "./contexts/StudentNo";

import { studentNoReducer } from "./reducers/studentNoReducer";

import { useReducer, useState } from "react";

import { Col, Button, Row } from "react-bootstrap";

function App() {
  const [studentNoState, studentNoDispatch] = useReducer(studentNoReducer, {
    studentNo: "",
    error: null,
  });
  const [showDataset, setShowDataset] = useState(false);
  return (
    <StudentNoContext.Provider value={{ studentNoState, studentNoDispatch }}>
      <div className="App container my-5">
        <FormErrors errors={studentNoState.error}></FormErrors>
        <Button onClick={() => setShowDataset(!showDataset)}>
          {showDataset ? "Hide" : "Show"} Dataset
        </Button>
        <Button
          className="mx-2"
          onClick={() => studentNoDispatch({ type: "clear-student-no" })}
        >
          Clear Student No.
        </Button>
        <StudentNoInput />
        {showDataset && <Dataset></Dataset>}
        <Col>
          PS3A:
          <Item1></Item1>
          <Row className="my-3"></Row>
          <Item2></Item2>
          <Row className="my-3"></Row>
          <Item3></Item3>
          <Row className="my-3"></Row>
          <Item4></Item4>
          <Row className="my-3"></Row>
          <Item5></Item5>
          <Row className="my-3"></Row>
        </Col>
        PS3B:
        <ODESolver></ODESolver>
      </div>
    </StudentNoContext.Provider>
  );
}

export default App;
