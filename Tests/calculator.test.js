import Calculator from '../src/calculator';

test('it add two numbers', () => {
  expect(Calculator.add(10, 2)).toEqual(12);
});

test('it subtract two numbers', () => {
  expect(Calculator.subtract(10, 2)).toEqual(8);
});

test('it divide two numbers', () => {
  expect(Calculator.divide(10, 2)).toEqual(5);
});

test('it multiply two numbers', () => {
  expect(Calculator.multiply(10, 2)).toEqual(20);
});
