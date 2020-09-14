const Capitalize = (str) => {
  let str_part1 = str.slice(0, 1).toUpperCase();
  let str_part2 = str.slice(1, str.length);
  return str_part1 + str_part2;
};
export default Capitalize;
