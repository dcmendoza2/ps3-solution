import React, { useContext, useRef } from "react";
import { Container, Form, Button } from "react-bootstrap";

import { StudentNoContext } from "../contexts/StudentNo";
export default function StudentNoInput() {
  const studentNoDispatch = useContext(StudentNoContext).studentNoDispatch;
  const studentNoEl = useRef({ current: null });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      studentNoEl.current.value.match(/20[0-9]{7}/) &&
      studentNoEl.current.value.length === 9
    ) {
      studentNoDispatch({
        type: "update-student-no",
        payload: { studentNo: studentNoEl.current.value, error: null },
      });
    } else {
      studentNoDispatch({
        type: "add-error",
        payload: {
          error: "Student no. must match the format.",
        },
      });
    }
  };
  return (
    <Container className="my-2">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Student No.</Form.Label>
          <Form.Control
            aria-label="Student No."
            type="text"
            placeholder="201224564"
            ref={studentNoEl}
          />
        </Form.Group>
        <Button variant="outline-secondary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}
