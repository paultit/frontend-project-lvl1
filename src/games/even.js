import playGame from '../index.js';
import getRandom from '../utils.js';

const isEven = (num) => (num % 2 === 0);
const rule = 'Answer "yes" if the number is even, otherwise answer "no"';

const getGameData = () => {
  const question = getRandom(1, 100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const run = () => {
  playGame(getGameData, rule);
};

export default run;
