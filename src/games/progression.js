import { game, random } from '../index.js';

const lengthProgression = 10;
const getProgression = (startProgression, stepProgression, posEl) => {
  let progression = '';
  let currentElProgression = startProgression;
  for (let i = 0; i < lengthProgression; i += 1) {
    if (i === posEl) {
      progression += '.. ';
    } else {
      progression += `${currentElProgression} `;
    }
    currentElProgression += stepProgression;
  }
  return progression.trim();
};
const rule = 'What number is missing in the progression?';

const progression = () => {
  const startProgression = random(1, 100);
  const stepProgression = random(1, 10);
  const posEl = random(0, 9);
  const question = getProgression(startProgression, stepProgression, posEl);
  const correctAnswer = startProgression + (stepProgression * posEl);
  return [question, String(correctAnswer)];
};

const start = () => {
  game(progression, rule);
};

export default start;
