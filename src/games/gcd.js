import gameGcd from "../index.js";

const description = "Find the greatest common divisor of given numbers.";

const randomNumber = () => {
  let min = 1;
  let max = 100;
  const rand = Math.floor(Math.random() * (max - min + 1) + min);
  return rand;
};

const getQuestion = () => {
  const randNumberOne = randomNumber();
  const randNumberTwo = randomNumber();

  return [randNumberOne, randNumberTwo];
};

const getCorrectAnswer = (numberOne, numberTwo) => {
  let result = 0;
  while (numberTwo !== 0) {
    result = numberTwo;
    numberTwo = numberOne % numberTwo;
    numberOne = result;
  }
  return String(numberOne);
};

const getQuestionAndAnswer = () => {
  const [randNumberOne, randNumberTwo] = getQuestion();
  const question = `${randNumberOne} ${randNumberTwo}`;

  const correctAnswer = getCorrectAnswer(randNumberOne, randNumberTwo);

  return [question, correctAnswer];
};

export default () => {
  gameGcd(description, getQuestionAndAnswer);
};
