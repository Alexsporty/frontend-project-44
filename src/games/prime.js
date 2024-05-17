import gamePrime from '../index.js';

const description =
  'Answer "yes" if given number is prime. Otherwise answer "no".';

const getCorrectAnswer = (num) => {
  let isPrime = false;

  for (let i = 2; i <= num - 1; i++) {
    if (num % i === 0) {
      isPrime = true;
    }
  }
  if (isPrime === false) return 'yes';
  else return 'no';
};

const getQuestion = (min, max) => {
  const randNumber = Math.floor(Math.random() * (max - min + 1) + min);
  return randNumber;
};

const getQuestionAndAnswer = () => {
  const question = getQuestion(2, 100);
  const correctAnswer = getCorrectAnswer(question);

  return [question, correctAnswer];
};
export default () => {
  gamePrime(description, getQuestionAndAnswer);
};
