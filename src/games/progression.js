import toGame from '../index.js';
import getRandom from '../utils.js';

const lengthProgression = 10;
const rule = 'What number is missing in the progression?';
const getQuestionProgression = (startProgression, stepProgression, posEl) => {
  let progression = '';
  for (let i = 0; i < lengthProgression; i += 1) {
    let elProgression = startProgression + stepProgression * i;
    if (i === posEl) {
      elProgression = '.. ';
    }
    progression = `${progression}${elProgression} `;
  }
  return progression.trim();
};

const getQuestionAndCorrectAnswerProg = () => {
  const startProgression = getRandom(1, 100);
  const stepProgression = getRandom(1, 10);
  const posEl = getRandom(0, lengthProgression - 1);
  const question = getQuestionProgression(startProgression, stepProgression, posEl);
  const correctAnswer = startProgression + (stepProgression * posEl);
  return [question, String(correctAnswer)];
};

const run = () => {
  toGame(getQuestionAndCorrectAnswerProg, rule);
};

export default run;
