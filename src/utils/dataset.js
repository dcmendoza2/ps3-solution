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

const DATASET_FIRST_DERIVATIVE = {
  9.0: 0.243372,
  9.1: 0.242003,
  9.2: 0.240654,
  9.3: 0.239323,
  9.4: 0.238011,
  9.5: 0.236716,
  9.6: 0.23544,
  9.7: 0.234181,
  9.8: 0.23294,
  9.9: 0.231716,
  10.0: 0.230508,
};
const DATASET_SECOND_DERIVATIVE = {
  9.0: -0.01378065,
  9.1: -0.01358999,
  9.2: -0.01340175,
  9.3: -0.01321603,
  9.4: -0.01303291,
  9.5: -0.01285246,
  9.6: -0.01267473,
  9.7: -0.01249975,
  9.8: -0.01232756,
  9.9: -0.01215816,
  10.0: -0.01199157,
};

const DATASET_INTEGRAL = {
  9.0: 0.651151,
  9.1: 0.655978,
  9.2: 0.660777,
  9.3: 0.665551,
  9.4: 0.670298,
  9.5: 0.67502,
  9.6: 0.679716,
  9.7: 0.684387,
  9.8: 0.689034,
  9.9: 0.693656,
  10.0: 0.698254,
};

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

const summationRect = (start, end, step, sumFunction) => {
  let sum = 0;
  for (
    let i = parseFloat(start);
    i.toFixed(10) < parseFloat(end);
    i = parseFloat((i + step).toFixed(10))
  ) {
    sum += sumFunction(i);
  }
  return sum;
};

const summationTrap = (start, end, step, sumFunction) => {
  let sum = sumFunction(start);
  for (
    let i = start + step;
    i.toFixed(10) < parseFloat(end);
    i = parseFloat((i + step).toFixed(10))
  ) {
    sum += 2 * sumFunction(i);
  }
  sum += sumFunction(end);
  return sum;
};

const findSandwichingPoints = ({ start, end, step, target }) => {
  let sandwiched = 0;
  for (let i = start; i < end; i = parseFloat((i + step).toFixed(4))) {
    if (i >= target) {
      break;
    }
    if (i > sandwiched) {
      sandwiched = i;
    }
  }

  return [
    sandwiched,
    parseFloat((sandwiched + step).toFixed(4)),
    parseFloat((sandwiched + 2 * step).toFixed(4)),
  ];
};
export {
  DATASET,
  DATASET_FIRST_DERIVATIVE,
  DATASET_SECOND_DERIVATIVE,
  DATASET_INTEGRAL,
  FUNC,
  quadInterpolant,
  linearInterpolant,
  summationRect,
  summationTrap,
  findSandwichingPoints,
};
