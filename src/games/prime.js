import { game, random } from '../index.js';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }

  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const prime = () => {
  const question = random(1, 1000);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const start = () => {
  game(prime, rule);
};

export default start;
