import playGame from '../index.js';
import getRandom from '../utils.js';

const rule = 'What is the result of the expression?';
const calculate = (num1, num2, sign) => {
  switch (sign) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error(`'${sign}' - unknown sign`);
  }
};
const getGameData = () => {
  const num1 = getRandom(1, 100);
  const num2 = getRandom(1, 100);
  const operations = ['+', '-', '*'];
  const rand = getRandom(0, operations.length - 1);
  const question = `${num1} ${operations[rand]} ${num2}`;
  const correctAnswer = calculate(num1, num2, operations[rand]);
  return [question, String(correctAnswer)];
};

const run = () => playGame(getGameData, rule);

export default run;
