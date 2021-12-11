import "./App.css";
import StudentNoInput from "./components/StudentNoInput.jsx";
import FormErrors from "./components/FormErrors.jsx";
import Item1 from "./components/Item1/Item1";
import Item2 from "./components/Item2/Item2";
import Item3 from "./components/Item3/Item3";
import Item4 from "./components/Item4/Item4";
import Item5 from "./components/Item5/Item5";
import Dataset from "./components/Dataset";

import { StudentNoContext } from "./contexts/StudentNo";

import { studentNoReducer } from "./reducers/studentNoReducer";

import { useReducer, useState } from "react";

import { Col, Button } from "react-bootstrap";

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
        <StudentNoInput />
        {showDataset && <Dataset></Dataset>}
        <Col>
          <Item1></Item1>
          <Item2></Item2>
          <Item3></Item3>
          <Item4></Item4>
          <Item5></Item5>
        </Col>
      </div>
    </StudentNoContext.Provider>
  );
}

export default App;
