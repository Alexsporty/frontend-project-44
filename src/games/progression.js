import gameProgression from "../index.js";

const description = "What number is missing in the progression?";

const randomNumber = (min, max) => {
  const rand = Math.floor(Math.random() * (max - min + 1) + min);
  return rand;
};

const getQuestionAndAnswer = () => {
  const firstNumber = randomNumber(5, 23);
  const stepProgression = randomNumber(3, 6);
  const lengthProgression = randomNumber(5, 10);
  const elementProgression = randomNumber(0, lengthProgression - 1);
  let strProgression = "";
  for (let i = 0; i < lengthProgression; i++) {
    if (i === elementProgression) {
      strProgression += ".. ";
    } else {
      strProgression += String(firstNumber + stepProgression * i) + " ";
    }
  }
  const correctAnswer = String(
    firstNumber + stepProgression * elementProgression
  );
  return [strProgression, correctAnswer];
};

export default () => {
  gameProgression(description, getQuestionAndAnswer);
};
