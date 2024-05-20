import gameCalc from './index.js';
import randomNumber from './function-random-number.js';

const description = 'What is the result of the expression?';

const operation = () => {
  const symbol = ['+', '-', '*'];
  const operator = Math.floor(Math.random() * symbol.length);

  return symbol[operator];
};

const getQuestion = () => {
  const randNumber1 = randomNumber(1, 20);
  const randNumber2 = randomNumber(1, 20);
  const randOperator = operation();

  return [randNumber1, randNumber2, randOperator];
};

const getCorrectAnswer = (number1, number2, operator) => {
  switch (operator) {
    case '+':
      return String(number1 + number2);
    case '-':
      return String(number1 - number2);
    case '*':
      return String(number1 * number2);
    default:
  }
  return 0;
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
