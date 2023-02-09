const id = 'distancePoints';
const tests = (f) => [
  {
    name: 'distancePoints({ x: 0, y: 0 }, { x: 3, y: 4 }) returns 5',
    test: () => f({ x: 0, y: 0 }, { x: 3, y: 4 }) == 5,
  },
  {
    name: 'distancePoints({ x: -10, y: -10 }, { x: -7, y: -6 }) returns 5',
    test: () => f({ x: -10, y: -10 }, { x: -7, y: -6 }) == 5,
  },
  {
    name: 'distancePoints({ x: -1, y: -1 }, { x: 0, y: 0 }) returns sqrt(2)',
    test: () => f({ x: -1, y: -1 }, { x: 0, y: 0 }) == Math.sqrt(2),
  },
  {
    name: 'distancePoints({ x: 666, y: 666 }, { x: 667, y: 667 }) returns sqrt(2)',
    test: () => f({ x: 666, y: 666 }, { x: 667, y: 667 }) == Math.sqrt(2),
  },
  {
    name: 'distancePoints({ x: 15, y: -10 }, { x: 5, y: 0 }) returns 10 * sqrt(2)',
    test: () => f({ x: 15, y: -10 }, { x: 5, y: 0 }) == 10 * Math.sqrt(2),
  },
  {
    name: 'distancePoints({ x: -6, y: -2 }, { x: -3, y: 2 }) returns 5',
    test: () => f({ x: -6, y: -2 }, { x: -3, y: 2 }) == 5,
  },
];

export const distancePoints = {
  id,
  tests,
};
