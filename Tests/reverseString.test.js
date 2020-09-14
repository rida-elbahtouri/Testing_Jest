import ReverseString from '../src/reverseString';

test('it should return the reverse of a string', () => {
  expect(ReverseString('rida elbahtouri')).toBe('iruothable adir');
  expect(ReverseString('elbahtouri')).not.toBe('elbahtouri');
});
