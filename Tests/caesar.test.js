import Caesar from '../src/caesar';

test('return an encrupt string', () => {
  expect(Caesar('attack at dawn', 5)).toBe('fyyfhp fy ifbs');
});
