import Caesar from '../src/caesar';

test('return an encrupt string', () => {
  expect(Caesar('attack at dawn', 5)).toBe('fyyfhp fy ifbs');
});
test('Should keep the same case', () => {
  expect(Caesar('Hello World', 4)).toBe('Lipps Asvph');
});

test('Should not change punctuation', () => {
  expect(Caesar('Hello, World!', 4)).toBe('Lipps, Asvph!');
});
