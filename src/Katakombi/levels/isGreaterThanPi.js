const id = 'isGreaterThanPi';
const tests = (f) => [
  {
    name: 'isGreaterThanPi(3) returns false',
    test: () => f(3) === false,
  },
  {
    name: 'isGreaterThanPi(4) returns true',
    test: () => f(4) === true,
  },
  {
    name: 'isGreaterThanPi(3.14158) returns false',
    test: () => f(3.14158) === false
  },
  {
    name: 'isGreaterThanPi(3.1416) returns true',
    test: () => f(3.1416) === true
  },
];

export const isGreaterThanPi = {
  id,
  tests,
};
