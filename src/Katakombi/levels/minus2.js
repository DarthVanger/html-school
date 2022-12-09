const id = 'minus2';
const tests = (f) => [
  {
    name: 'minus2(4) returns 2',
    test: () => f(4) == 2,
  },
  {
    name: 'minus2(100) returns 98',
    test: () => f(100) == 98,
  },
  {
    name: 'minus2(0) returns -2',
    test: () => f(0) == -2
  },
  {
    name: 'minus2(-100500) returns -100502',
    test: () => f(-100500) == 100502,
  },
];

export const minus2 = {
  id,
  tests,
};
