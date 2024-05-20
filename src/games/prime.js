import gamePrime from './index.js';
import randomNumber from './function-random-number.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getCorrectAnswer = (number) => {
  let isPrime = false;

  for (let i = 2; i <= number - 1; i += 1) {
    if (number % i === 0) {
      isPrime = true;
    }
  }
  if (isPrime === false) return 'yes';
  return 'no';
};

const getQuestionAndAnswer = () => {
  const question = randomNumber(2, 100);
  const correctAnswer = getCorrectAnswer(question);

  return [question, correctAnswer];
};
export default () => {
  gamePrime(description, getQuestionAndAnswer);
};
