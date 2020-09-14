import Calculator from '../src/calculator';

const calculator = new Calculator(10, 2);
test('it add two numbers', () => {
  expect(calculator.add()).toEqual(12);
});

test('it subtract two numbers', () => {
  expect(calculator.subtract()).toEqual(8);
});

test('it divide two numbers', () => {
  expect(calculator.divide()).toEqual(5);
});

test('it multiply two numbers', () => {
  expect(calculator.multiply()).toEqual(20);
});
