import { gameCheckEven } from '../index.js';

const isEven = (num) => (num % 2 === 0);

const checkEven = () => {
  const randNum = Math.floor((Math.random() * 100) + 1);
  const question = randNum;
  const correctAnswer = isEven(randNum) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const run = () => {
  gameCheckEven(checkEven);
};

export default run;
