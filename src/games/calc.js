import pairs from '@hexlet/pairs';
import { game, random } from '../index.js';

const rule = 'What is the result of the expression?';
const getActionAndCorrectAnswer = (num1, num2) => {
  switch (random(1, 3)) {
    case 1:
      return pairs.cons('+', num1 + num2);
    case 2:
      return pairs.cons('-', num1 - num2);
    case 3:
      return pairs.cons('*', num1 * num2);
    default:
  }
  return pairs.cons('+', num1 + num2);
};
const calc = () => {
  const num1 = random(1, 100);
  const num2 = random(1, 100);
  const actionAndCorrectAnswer = getActionAndCorrectAnswer(num1, num2);
  const question = `${num1} ${pairs.car(actionAndCorrectAnswer)} ${num2}`;
  const correctAnswer = pairs.cdr(actionAndCorrectAnswer);
  return [question, String(correctAnswer)];
};

const start = () => {
  game(calc, rule);
};

export default start;
