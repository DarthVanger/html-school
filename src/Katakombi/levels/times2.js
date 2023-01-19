const id = 'times2';
const tests = (f) => [
  {
    name: 'times2(4) returns 8',
    test: () => f(4) == 8,
  },
  {
    name: 'times2(100) returns 200',
    test: () => f(100) == 200,
  },
  {
    name: 'times2(0) returns 0',
    test: () => f(0) == 0
  },
  {
    name: 'times2(-100500) returns -201000',
    test: () => f(-100500) == -201000,
  },
];

export const times2 = {
  id,
  tests,
};
