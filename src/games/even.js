import gameEven from '../index.js';
import getRandomNumber from './function-random-number.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const getCorrectAnswer = (number) => (number % 2 === 0 ? 'yes' : 'no');

const getQuestionAndAnswer = () => {
  const question = getRandomNumber(1, 20);
  const correctAnswer = getCorrectAnswer(question);

  return [question, correctAnswer];
};
export default () => {
  gameEven(description, getQuestionAndAnswer);
};
