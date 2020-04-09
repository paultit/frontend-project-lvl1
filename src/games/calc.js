import playGame from '../index.js';
import getRandom from '../utils.js';

const rule = 'What is the result of the expression?';
const getActionAndCorrectAnswer = (num1, num2, sign) => {
  switch (sign) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
  }
  return num1 + num2;
};
const getGameData = () => {
  const num1 = getRandom(1, 100);
  const num2 = getRandom(1, 100);
  const operations = ['+', '-', '*'];
  const rand = getRandom(0, operations.length - 1);
  const question = `${num1} ${operations[rand]} ${num2}`;
  const correctAnswer = getActionAndCorrectAnswer(num1, num2, operations[rand]);
  return [question, String(correctAnswer)];
};

const run = () => playGame(getGameData, rule);

export default run;
