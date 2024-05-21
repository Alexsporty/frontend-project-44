const getRandomNumber = (minNumber, maxNumber) => {
  const rand = Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
  return rand;
};

export default getRandomNumber;
