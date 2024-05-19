import gameGcd from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

const randomNumber = () => {
  const minNumber = 1;
  const maxNumber = 100;
  const rand = Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
  return rand;
};

const getQuestion = () => {
  const randNumber1 = randomNumber();
  const randNumber2 = randomNumber();

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
