import gamePrime from '../index.js';

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

const getQuestion = (minNumber, maxNumber) => {
  const randNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
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
