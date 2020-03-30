import { game, random } from '../index.js';

const isEven = (num) => (num % 2 === 0);
const rule = 'Answer "yes" if the number is even, otherwise answer "no"';

const checkEven = () => {
  const randNum = random(1, 100);
  const question = randNum;
  const correctAnswer = isEven(randNum) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const start = () => {
  game(checkEven, rule);
};

export default start;
