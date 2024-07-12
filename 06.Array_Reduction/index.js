const numbers = [1, 5, 6, 7, 21, 3, 98, 1, 5, 98, 4];

const reducedEvenNumberSums = (numbers) => {
  let sum = 0;
  const res = numbers.reduce((acc, curr) => {
    if (curr % 2 === 0) {
      sum = sum + curr;
    }
    return sum;
  }, 0);
};

reducedEvenNumberSums(numbers);
