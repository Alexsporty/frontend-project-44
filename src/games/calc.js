import gameCalc from '../index.js';

const description = 'What is the result of the expression?';

const randomCalc = () => {
  const minNumber = 1;
  const maxNumber = 20;
  const rand = Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
  return rand;
};

const operation = () => {
  const symbol = ['+', '-', '*'];
  const operator = Math.floor(Math.random() * symbol.length);

  return symbol[operator];
};

const getQuestion = () => {
  const randNumberOne = randomCalc();
  const randNumberTwo = randomCalc();
  const randOperator = operation();

  return [randNumberOne, randNumberTwo, randOperator];
};

const getCorrectAnswer = (numberOne, numberTwo, operator) => {
  if (operator === '+') return String(numberOne + numberTwo);
  if (operator === '-') return String(numberOne - numberTwo);
  if (operator === '*') return String(numberOne * numberTwo);

  return String(numberOne / numberTwo);
};

const getQuestionAndAnswer = () => {
  const [randNumberOne, randNumberTwo, randOperator] = getQuestion();
  const question = `${randNumberOne} ${randOperator} ${randNumberTwo}`;
  const correctAnswer = getCorrectAnswer(
    randNumberOne,
    randNumberTwo,
    randOperator,
  );

  return [question, correctAnswer];
};

export default () => {
  gameCalc(description, getQuestionAndAnswer);
};
