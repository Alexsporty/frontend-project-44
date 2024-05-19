import gameEven from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const getCorrectAnswer = (number) => (number % 2 === 0 ? 'yes' : 'no');

const getQuestion = (minNumber, maxNumber) => {
  const randNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
  return randNumber;
};

const getQuestionAndAnswer = () => {
  const question = getQuestion(1, 20);
  const correctAnswer = getCorrectAnswer(question);

  return [question, correctAnswer];
};
export default () => {
  gameEven(description, getQuestionAndAnswer);
};
