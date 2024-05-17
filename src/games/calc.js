import gameCalc from '../index.js';

const description = 'What is the result of the expression?';

const randomCalc = () => {
  let min = 1;
  let max = 20;
  const rand = Math.floor(Math.random() * (max - min + 1) + min);
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
  switch (operator) {
    case '+':
      return String(numberOne + numberTwo);
    case '-':
      return String(numberOne - numberTwo);
    case '*':
      return String(numberOne * numberTwo);
  }
};

const getQuestionAndAnswer = () => {
  const [randNumberOne, randNumberTwo, randOperator] = getQuestion();
  const question = `${randNumberOne} ${randOperator} ${randNumberTwo}`;
  const correctAnswer = getCorrectAnswer(
    randNumberOne,
    randNumberTwo,
    randOperator
  );

  return [question, correctAnswer];
};

export default () => {
  gameCalc(description, getQuestionAndAnswer);
};
