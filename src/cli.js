import readlineSync from "readline-sync";

export default () => {
  console.log("Welcome to the Brain Games!");
  const name = readlineSync.question("May I have your name? ");
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let minNumber = 1;
  let maxNumber = 20;
  let countRound = 3;
  for (let i = 0; i < countRound; i++) {
    const randNumber = Math.floor(
      Math.random() * (maxNumber - minNumber + 1) + minNumber
    );
    console.log("Question: " + randNumber);
    const answer = readlineSync.question("Your answer: ");
    if (randNumber % 2 === 0 && answer === "yes") {
      console.log("Correct!");
    } else if (randNumber % 2 !== 0 && answer === "no") {
      console.log("Correct!");
    } else {
      console.log(
        `${answer}' is wrong answer ;(. Correct answer was 'no'. Let's try again, ${name}!`
      );
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
