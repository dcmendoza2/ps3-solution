const DATASET = [
  [9, 3.231509],
  [9.1, 3.255778],
  [9.2, 3.27991],
  [9.3, 3.303909],
  [9.4, 3.327775],
  [9.5, 3.351512],
  [9.6, 3.375119],
  [9.7, 3.3986],
  [9.8, 3.421956],
  [9.9, 3.445189],
  [10.0, 3.4683],
  [10.1, 3.491291],
];

const FUNC = (x) => {
  return (
    Math.sqrt(Math.exp(-Math.pow(x, 2)) + 2 * x + 3) -
    Math.pow(Math.exp(-Math.pow(x, 2)) + 2 * x - 3, 1 / x)
  );
};

const quadInterpolant = ({ x0, x1, x2, y0, y1, y2 }) => {
  return (x) => {
    return (
      y0 * (((x - x1) * (x - x2)) / ((x0 - x1) * (x0 - x2))) +
      y1 * (((x - x0) * (x - x2)) / ((x1 - x0) * (x1 - x2))) +
      y2 * (((x - x0) * (x - x1)) / ((x2 - x0) * (x2 - x1)))
    );
  };
};

const linearInterpolant = ({ x0, x1, y0, y1 }) => {
  return (x) => {
    return y0 * ((x1 - x) / (x1 - x0)) + y1 * ((x - x0) / (x1 - x0));
  };
};

export { DATASET, FUNC, quadInterpolant, linearInterpolant };
