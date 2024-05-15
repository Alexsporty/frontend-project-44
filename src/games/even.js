import gameEven from "../index.js";

const description =
  'Answer "yes" if the number is even, otherwise answer "no".';

// const isEven = (num) => num % 2 === 0;

const getCorrectAnswer = (num) => {
  return num % 2 === 0 ? "yes" : "no";
};

const getQuestion = (min, max) => {
  const randNumber = Math.floor(Math.random() * (max - min + 1) + min);
  return randNumber;
};

const getQuestionAndAnswer = () => {
  const question = getQuestion(1, 20);
  const currectAnswer = getCorrectAnswer(question);

  return [question, currectAnswer];
};
export default () => {
  gameEven(description, getQuestionAndAnswer);
};
