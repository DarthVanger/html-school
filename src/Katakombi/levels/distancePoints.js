const id = 'distancePoints';
const tests = (f) => [
  {
    name: 'distancePoints({ x: 0, y: 0 }, { x: 5, y: 0 }) returns 5',
    test: () => f({ x: 0, y: 0 }, { x: 5, y: 0 }) == 5,
  },
  {
    name: 'distancePoints({ x: 0, y: 5 }, { x: 0, y: 0 }) returns 5',
    test: () => f({ x: 0, y: 5 }, { x: 0, y: 0 }) == 5,
  },
  {
    name: 'distancePoints({ x: 0, y: 0 }, { x: 0, y: -5 }) returns 5',
    test: () => f({ x: 0, y: 0 }, { x: 0, y: -5 }) == 5,
  },
  {
    name: 'distancePoints({ x: 1, y: 1 }, { x: 4, y: 5 }) returns 5',
    test: () => f({ x: 1, y: 1 }, { x: 4, y: 5 }) == 5,
  },
];

export const distancePoints = {
  id,
  tests,
};
