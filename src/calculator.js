const Calculator = (num1, num2) => {
  const add = () => {
    return num1 + num2;
  };
  const subtract = () => {
    return num1 - num2;
  };
  const divide = () => {
    return num1 / num2;
  };
  const multiply = () => {
    return num1 * num2;
  };
  return { add, divide, subtract, multiply };
};
export default Calculator;
