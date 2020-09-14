const Calculator = (num1, num2) => {
  const add = () => num1 + num2;
  const subtract = () => num1 - num2;
  const divide = () => num1 / num2;
  const multiply = () => num1 * num2;
  return {
    add, divide, subtract, multiply,
  };
};
export default Calculator;
