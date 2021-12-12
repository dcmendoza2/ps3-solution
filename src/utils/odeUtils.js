const FUNC1A = (y, t) => {
  return 3 + t - y;
};

const FUNC1B = (y, t) => {
  return 2 * y - 3 * t;
};

const FUNC2A = (y, t) => {
  return (Math.pow(t, 2) - Math.pow(y, 2)) * Math.sin(y);
};

const FUNC2B = (y, t) => {
  return 2 * t + Math.exp(-t * y);
};

const eulerMethod = ({ dy, h, bounds: [a, b], y_a }) => {
  let y = [];
  let t = [];
  for (let i = a; i < b; i = parseFloat((i + h).toFixed(10))) {
    t.push(i);
  }
  y[0] = y_a;
  for (let j = 0; j < t.length - 1; j++) {
    y[j + 1] = y[j] + dy(y[j], t[j]) * h;
  }
  return [y, t];
};

const rk4Method = ({ dy, h, bounds: [a, b], y_a }) => {
  let y = [];
  let t = [];
  for (let i = a; i < b; i = parseFloat((i + h).toFixed(10))) {
    t.push(i);
  }
  y[0] = y_a;
  for (let j = 0; j < t.length - 1; j++) {
    let k1 = h * dy(y[j], t[j]);
    let k2 = h * dy(y[j] + k1 / 2.0, t[j] + h / 2.0);
    let k3 = h * dy(y[j] + k2 / 2.0, t[j] + h / 2.0);
    let k4 = h * dy(y[j] + k3, t[j] + h);
    y[j + 1] = y[j] + k1 / 6.0 + k2 / 3.0 + k3 / 3.0 + k4 / 6.0;
  }
  return [y, t];
};
export { eulerMethod, FUNC1A, FUNC1B, FUNC2A, FUNC2B, rk4Method };
