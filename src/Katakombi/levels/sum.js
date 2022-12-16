const id = 'sum';
const tests = (f) => [
  {
    name: 'sum(5, 7) returns 12',
    test: () => f(5, 7) == 12,
  },
  {
    name: 'sum(-3, 8) returns 5',
    test: () => f(-3, 8) == 5,
  },
  {
    name: 'sum(0, 0) returns 0',
    test: () => f(0, 0) == 0 
  },
  {
    name: 'sum(100, -200) returns -100',
    test: () => f(100, -200) == -100
  },
];

export const sum = {
  id,
  tests,
};
