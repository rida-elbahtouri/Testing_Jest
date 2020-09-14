const ReverseString = (str) => {
  const newstr = str.split('');
  newstr.reverse();
  return newstr.join('');
};
export default ReverseString;
