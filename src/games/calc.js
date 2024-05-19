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
  const randNumber1 = randomCalc();
  const randNumber2 = randomCalc();
  const randOperator = operation();

  return [randNumber1, randNumber2, randOperator];
};

const getCorrectAnswer = (number1, number2, operator) => {
  if (operator === '+') return String(number1 + number2);
  if (operator === '-') return String(number1 - number2);
  if (operator === '*') return String(number1 * number2);

  return String(number1 / number2);
};

const getQuestionAndAnswer = () => {
  const [randNumber1, randNumber2, randOperator] = getQuestion();
  const question = `${randNumber1} ${randOperator} ${randNumber2}`;
  const correctAnswer = getCorrectAnswer(
    randNumber1,
    randNumber2,
    randOperator,
  );

  return [question, correctAnswer];
};

export default () => {
  gameCalc(description, getQuestionAndAnswer);
};
