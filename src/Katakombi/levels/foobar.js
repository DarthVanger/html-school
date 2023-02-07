const id = 'foobar';
const tests = (f) => [
  {
    name: 'foobar(3) returns "foo"',
    test: () => f(3) === 'foo',
  },
  {
    name: 'foobar(5) returns "bar"',
    test: () => f(5) === 'bar',
  },
  {
    name: 'foobar(15) returns "foobar"',
    test: () => f(15) === 'foobar' 
  },
  {
    name: 'foobar(6) returns "foo"',
    test: () => f(6) === 'foo' 
  },
  {
    name: 'foobar(10) returns "bar"',
    test: () => f(10) === 'bar' 
  },
  {
    name: 'foobar(30) returns "foobar"',
    test: () => f(30) === 'foobar' 
  },
];

export const foobar = {
  id,
  tests,
};
