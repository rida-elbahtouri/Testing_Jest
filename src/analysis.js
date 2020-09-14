const Analysis = (array) => {
  const reducer = (total, num) => total + num;
  let min = Math.min(...array);
  let max = Math.max(...array);
  let arrayLength = array.length;
  let average = array.reduce(reducer) / arrayLength;
  return { min, max, arrayLength, average };
};
