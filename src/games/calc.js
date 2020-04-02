import pairs from '@hexlet/pairs';
import toGame from '../index.js';
import getRandom from '../utils.js';

const rule = 'What is the result of the expression?';
const arrOfOperations = ['+', '-', '*'];
const getActionAndCorrectAnswer = (num1, num2) => {
  switch (getRandom(1, arrOfOperations.length)) {
    case 1:
      return pairs.cons(arrOfOperations[0], num1 + num2);
    case 2:
      return pairs.cons(arrOfOperations[1], num1 - num2);
    case 3:
      return pairs.cons(arrOfOperations[2], num1 * num2);
    default:
  }
  return pairs.cons(arrOfOperations[0], num1 + num2);
};
const getQuestionAndCorrectAnswerCalc = () => {
  const num1 = getRandom(1, 100);
  const num2 = getRandom(1, 100);
  const actionAndCorrectAnswer = getActionAndCorrectAnswer(num1, num2);
  const question = `${num1} ${pairs.car(actionAndCorrectAnswer)} ${num2}`;
  const correctAnswer = pairs.cdr(actionAndCorrectAnswer);
  return [question, String(correctAnswer)];
};

const run = () => {
  toGame(getQuestionAndCorrectAnswerCalc, rule);
};

export default run;
