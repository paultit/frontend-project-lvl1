import { game, random } from '../index.js';

const getGcd = (num1, num2) => (num1 ? getGcd(num2 % num1, num1) : num2);
const rule = 'Find the greatest common divisor of given numbers.';

const gcd = () => {
  const num1 = random(1, 100);
  const num2 = random(1, 100);
  const question = `${num1} ${num2}`;
  const correctAnswer = getGcd(num1, num2);
  return [question, String(correctAnswer)];
};

const start = () => {
  game(gcd, rule);
};

export default start;
