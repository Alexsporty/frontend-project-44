import readlineSync from "readline-sync";

export default () => {
  console.log("Welcome to the Brain Games!");
  const name = readlineSync.question("May I have your name? ");
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let minNumber = 1;
  let maxNumber = 20;
  const randNum1 = Math.floor(
    Math.random() * (maxNumber - minNumber + 1) + minNumber
  );
  console.log("Question: " + randNum1);
  const answer1 = readlineSync.question("Your answer: ");
  if (randNum1 % 2 === 0 && answer1 === "yes") {
    console.log("Correct!");
  } else if (randNum1 % 2 !== 0 && answer1 === "no") {
    console.log("Correct!");
  } else {
    console.log(
      `'yes' is wrong answer ;(. Correct answer was 'no'. Let's try again, ${name}!`
    );
    return;
  }

  const randNum2 = Math.floor(
    Math.random() * (maxNumber - minNumber + 1) + minNumber
  );
  console.log("Question: " + randNum2);
  const answer2 = readlineSync.question("Your answer: ");
  if (randNum2 % 2 === 0 && answer2 === "yes") {
    console.log("Correct!");
  } else if (randNum2 % 2 !== 0 && answer2 === "no") {
    console.log("Correct!");
  } else {
    console.log(
      `'yes' is wrong answer ;(. Correct answer was 'no'. Let's try again, ${name}!`
    );
    return;
  }

  const randNum3 = Math.floor(
    Math.random() * (maxNumber - minNumber + 1) + minNumber
  );
  console.log("Question: " + randNum3);
  const answer3 = readlineSync.question("Your answer: ");
  if (randNum3 % 2 === 0 && answer3 === "yes") {
    console.log("Correct!");
  } else if (randNum3 % 2 !== 0 && answer3 === "no") {
    console.log("Correct!");
  } else {
    console.log(
      `'yes' is wrong answer ;(. Correct answer was 'no'. Let's try again, ${name}!`
    );
    return;
  }
  console.log(`Congratulations, ${name}!`);
};
