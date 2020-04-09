import playGame from '../index.js';
import getRandom from '../utils.js';

const progressionLength = 10;
const rule = 'What number is missing in the progression?';
const getQuestion = (startProgression, stepProgression, posHiddenElementProgression) => {
  let questionGame = '';
  for (let i = 0; i < progressionLength; i += 1) {
    let elProgression = startProgression + stepProgression * i;
    if (i === posHiddenElementProgression) {
      elProgression = '.. ';
    }
    questionGame = `${questionGame}${elProgression} `;
  }
  return questionGame.trim();
};

const getGameData = () => {
  const startProgression = getRandom(1, 100);
  const stepProgression = getRandom(1, 10);
  const posHiddenElementProgression = getRandom(0, progressionLength - 1);
  const question = getQuestion(startProgression, stepProgression, posHiddenElementProgression);
  const correctAnswer = startProgression + (stepProgression * posHiddenElementProgression);
  return [question, String(correctAnswer)];
};

const run = () => playGame(getGameData, rule);

export default run;
