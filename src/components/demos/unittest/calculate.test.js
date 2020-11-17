const calculate = require('./calculate').default;

test('1+2 should be equal to 3', () => {
  expect(calculate.sum(1, 2)).toBe(3);
});

test('4/2 should be equal to 2', () => {
  expect(calculate.divide(4, 2)).toBe(2);
});
