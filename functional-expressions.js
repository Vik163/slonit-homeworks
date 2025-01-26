const operationMultiply = (num1, num2) => {
  return num1 * num2;
};
const operationDivide = (num1, num2) => {
  return num1 / num2;
};
const operationSum = (num1, num2) => {
  return num1 + num2;
};
const operationSubtract = (num1, num2) => {
  return num1 - num2;
};

const operations = {
  multiply: operationMultiply,
  divide: operationDivide,
  sum: operationSum,
  subtract: operationSubtract,
};

function calculate(num1, num2, operation) {
  return operation(num1, num2);
}

const selectedOperation = "subtract";
console.log(calculate(6, 3, operations[selectedOperation]));
