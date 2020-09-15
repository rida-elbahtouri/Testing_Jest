const Analysis = (array) => {
  const reducer = (total, num) => total + num;
  const min = Math.min(...array);
  const max = Math.max(...array);
  const { length } = array;
  const average = array.reduce(reducer) / length;
  return {
    min, max, length, average,
  };
};
export default Analysis;
