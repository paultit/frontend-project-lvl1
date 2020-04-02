import toGame from '../index.js';
import getRandom from '../utils.js';

const getGcd = (num1, num2) => (num1 ? getGcd(num2 % num1, num1) : num2);
const rule = 'Find the greatest common divisor of given numbers.';

const getQuestionAndCorrectAnswerGcd = () => {
  const num1 = getRandom(1, 100);
  const num2 = getRandom(1, 100);
  const question = `${num1} ${num2}`;
  const correctAnswer = getGcd(num1, num2);
  return [question, String(correctAnswer)];
};

const run = () => {
  toGame(getQuestionAndCorrectAnswerGcd, rule);
};

export default run;
