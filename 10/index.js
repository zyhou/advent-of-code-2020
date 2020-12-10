// --- Day 10: Adapter Array ---
// https://adventofcode.com/2020/day/10

import fs from "fs";

export const solveOne = (input) => {
  let numbers = input
    .split("\n")
    .map((line) => parseInt(line, 10))
    .sort((a, z) => a - z);

  numbers = [0, ...numbers, numbers[numbers.length - 1] + 3];

  let numberOne = 0;
  let numberThree = 0;

  for (let index = 0; index < numbers.length; index++) {
    const number = numbers[index + 1] - numbers[index];

    if (number === 1) {
      numberOne += 1;
    } else if (number === 3) {
      numberThree += 1;
    }
  }

  return numberOne * numberThree;
};

export const solveTwo = (input) => {
  return 0;
};

if (process.env.NODE_ENV !== "test") {
  const data = fs.readFileSync(new URL("input.txt", import.meta.url), "utf-8");

  console.log("Result one:", solveOne(data));
  console.log("Result two:", solveTwo(data));
}
