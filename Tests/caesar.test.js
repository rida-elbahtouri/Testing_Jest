import Caesar from '../src/caesar';

test('it wrapping from z to a ', () => {
  expect(Caesar('attack at dawn on war z', 5)).toBe('fyyfhp fy ifbs ts bfw e');
});
test('Should keep the same case', () => {
  expect(Caesar('Hello World', 4)).toBe('Lipps Asvph');
});

test('Should not change punctuation', () => {
  expect(Caesar('Hello, World!', 4)).toBe('Lipps, Asvph!');
});
