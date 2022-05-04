import React from "react";
import {
  DATASET,
  quadInterpolant,
  linearInterpolant,
  FUNC,
} from "../../utils/dataset";

export default function Item1C(props) {
  const midpoint = parseFloat(Math.trunc(props.toInterpolate * 10) / 10);
  const midpointIndex = DATASET.findIndex((element) => element[0] === midpoint);
  const mod3 = midpointIndex % 3;
  const DATA = DATASET.slice(midpointIndex, midpointIndex + 2);
  const DATA1 = DATASET.slice(midpointIndex - mod3, midpointIndex + (3- mod3));
  const quadratic =
    DATA.length > 0
      ? quadInterpolant({
        x0: DATA1[0][0],
        x1: DATA1[1][0],
        x2: DATA1[2][0],
        y0: DATA1[0][1],
        y1: DATA1[1][1],
        y2: DATA1[2][1],
      })
      : null;
  const linear =
    DATA.length > 0
      ? linearInterpolant({
          x0: DATA[0][0],
          x1: DATA[1][0],
          y0: DATA[0][1],
          y1: DATA[1][1],
        })
      : null;

  return (
    <div>
      {props.toInterpolate && (
        <ul>
          <strong>
            f({props.toInterpolate}) = {FUNC(props.toInterpolate).toFixed(6)}
          </strong>
          <li>
            PCLE: | F({props.toInterpolate}) - f({props.toInterpolate}) | =
            {" |"}
            {DATA?.length !== 0 ? DATA[0][1] : ""} -{" "}
            {FUNC(props.toInterpolate).toFixed(6)}| =
            <strong>
              {" "}
              {Math.abs(DATA[0][1] - FUNC(props.toInterpolate)).toFixed(12)}
            </strong>
          </li>
          <li>
            Picewise Linear: | F({props.toInterpolate}) - f(
            {props.toInterpolate}) | ={" |"}
            {DATA?.length !== 0
              ? linear(props.toInterpolate).toFixed(6)
              : ""}- {FUNC(props.toInterpolate).toFixed(6)}| =
            <strong>
              {" "}
              {Math.abs(
                linear(props.toInterpolate) - FUNC(props.toInterpolate)
              ).toFixed(12)}
            </strong>
          </li>
          <li>
            Quadratic: | F({props.toInterpolate}) - f({props.toInterpolate}) | =
            {" |"}
            {DATA?.length !== 0
              ? quadratic(props.toInterpolate).toFixed(6)
              : ""}
            - {FUNC(props.toInterpolate).toFixed(6)}| ={" "}
            <strong>
              {" "}
              {Math.abs(
                quadratic(props.toInterpolate) - FUNC(props.toInterpolate)
              ).toFixed(12)}
            </strong>
          </li>
        </ul>
      )}
      {!props.toInterpolate && "Enter your student no."}
    </div>
  );
}
