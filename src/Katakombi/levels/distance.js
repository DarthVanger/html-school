const id = 'distance';
const tests = (f) => [
  {
    name: 'distance({ x: 3, y: 4 }) returns 5',
    test: () => f({ x: 3, y: 4 }) == 5,
  },
  {
    name: 'distance({ x: 30, y: 40 }) returns 50',
    test: () => f({ x: 30, y: 40 }) == 50,
  },
  {
    name: 'distance({ x: 0, y: 0 }) returns 0',
    test: () => f({ x: 0, y: 0 }) == 0 
  },
  {
    name: `distance({ x: 1, y: 1 }) returns ${Math.sqrt(2)}`,
    test: () => f({ x: 1, y: 1 }) == Math.sqrt(2) 
  },
];

export const distance = {
  id,
  tests,
};
