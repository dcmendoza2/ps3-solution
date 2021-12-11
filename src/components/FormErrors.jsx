import React, { useContext } from "react";

import { Alert } from "react-bootstrap";
import { StudentNoContext } from "../contexts/StudentNo";

export default function FormErrors(props) {
  const { studentNoState, studentNoDispatch } = useContext(StudentNoContext);

  if (studentNoState.error) {
    return (
      <Alert
        variant="danger"
        onClose={() => studentNoDispatch({ type: "clear-errors" })}
        className="position-fixed top-1 start-50 translate-middle"
        dismissible
      >
        {studentNoState.error}
      </Alert>
    );
  } else return <></>;
}
