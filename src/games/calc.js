import pairs from '@hexlet/pairs';
import playGame from '../index.js';
import getRandom from '../utils.js';

const rule = 'What is the result of the expression?';
const getActionAndCorrectAnswer = (num1, num2, sign) => {
  switch (sign) {
    case '+':
      return pairs.cons(sign, num1 + num2);
    case '-':
      return pairs.cons(sign, num1 - num2);
    case '*':
      return pairs.cons(sign, num1 * num2);
    default:
  }
  return pairs.cons(sign, num1 + num2);
};
const getGameData = () => {
  const num1 = getRandom(1, 100);
  const num2 = getRandom(1, 100);
  const operations = ['+', '-', '*'];
  const rand = getRandom(0, operations.length - 1);
  const actionAndCorrectAnswer = getActionAndCorrectAnswer(num1, num2, operations[rand]);
  const question = `${num1} ${pairs.car(actionAndCorrectAnswer)} ${num2}`;
  const correctAnswer = pairs.cdr(actionAndCorrectAnswer);
  return [question, String(correctAnswer)];
};

const run = () => {
  playGame(getGameData, rule);
};

export default run;
