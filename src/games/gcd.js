import gameGcd from './index.js';
import randomNumber from './function-random-number.js';

const description = 'Find the greatest common divisor of given numbers.';

const getQuestion = () => {
  const randNumber1 = randomNumber(1, 100);
  const randNumber2 = randomNumber(1, 100);

  return [randNumber1, randNumber2];
};

const getCorrectAnswer = (number1, number2) => {
  if (number2 > number1) return getCorrectAnswer(number2, number1);
  if (!number2) return number1;
  return String(getCorrectAnswer(number2, number1 % number2));
};

const getQuestionAndAnswer = () => {
  const [randNumber1, randNumber2] = getQuestion();
  const question = `${randNumber1} ${randNumber2}`;

  const correctAnswer = getCorrectAnswer(randNumber1, randNumber2);

  return [question, correctAnswer];
};

export default () => {
  gameGcd(description, getQuestionAndAnswer);
};
