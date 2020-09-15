import Capitalize from '../src/capitalize';

test('capitalize first letter of string', () => {
  expect(Capitalize('rida')).toBe('Rida');
  expect(Capitalize('elbahtouri')).not.toBe('elbahtouri');
});
