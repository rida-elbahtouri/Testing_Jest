const ReverseString = (str) => {
  let newstr = str.split('');
  newstr.reverse();
  return newstr.join('');
};
export default ReverseString;
