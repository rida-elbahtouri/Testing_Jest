const Capitalize = (str) => {
  const strPart1 = str.slice(0, 1).toUpperCase();
  const strPart2 = str.slice(1, str.length);
  return strPart1 + strPart2;
};
export default Capitalize;
