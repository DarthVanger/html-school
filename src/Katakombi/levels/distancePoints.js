const id = 'distancePoints';
const tests = (f) => [
  {
    name: 'distancePoints({ x: 0, y: 0 }, { x: 0, y: 0 }) returns 0',
    test: () => f({ x: 0, y: 0 }, { x: 0, y: 0 }) == 0,
  },
  {
    name: 'distancePoints({ x: 0, y: 10 }, { x: 0, y: 0 }) returns 10',
    test: () => f({ x: 0, y: 10 }, { x: 0, y: 0 }) == 10,
  },
  {
    name: 'distancePoints({ x: 0, y: 0 }, { x: 0, y: -15 }) returns 15',
    test: () => f({ x: 0, y: 0 }, { x: 0, y: -15 }) == 15,
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
