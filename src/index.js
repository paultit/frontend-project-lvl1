import readlineSync from 'readline-sync';

const numOfRounds = 3;

const random = (start, end) => Math.floor((Math.random() * end) + start);

const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?');
  console.log(`Hello, ${name}!`);
};

const game = (getQuestionAndCorrectAnswer, rule) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?');
  console.log(`Hello, ${name}!`);
  console.log(rule);
  for (let i = 0; i < numOfRounds; i += 1) {
    const [question, correctAnswer] = getQuestionAndCorrectAnswer();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
      console.log(`Let's try again, ${name}`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export { greeting, game, random };
