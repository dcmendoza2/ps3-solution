const studentNoReducer = (state, action) => {
  let obj = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case "clear-errors":
      obj.error = null;
      break;
    case "add-error":
      obj.error = action.payload.error;
      break;
    case "update-student-no":
      obj = action.payload;
      break;
    default:
      return;
  }
  return obj;
};

export { studentNoReducer };
