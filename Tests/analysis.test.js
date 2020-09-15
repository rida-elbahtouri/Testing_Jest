import Analysis from '../src/analysis';

test('it return analysis of the array given', () => {
  expect(Analysis([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
