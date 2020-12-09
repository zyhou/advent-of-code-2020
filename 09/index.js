// --- Day 9: Encoding Error ---
// https://adventofcode.com/2020/day/9

import fs from "fs";

export const solveOne = (input, preambleSize = 25) => {
  const numbers = input.split("\n").map((line) => parseInt(line, 10));

  for (let i = preambleSize; i < numbers.length; i++) {
    let found = false;

    for (let j = i - preambleSize; j < i; j++) {
      for (let k = i - preambleSize; k < i; k++) {
        if (!found && numbers[j] + numbers[k] === numbers[i]) {
          found = true;
        }
      }
    }

    if (!found) {
      return numbers[i];
    }
  }
};

export const solveTwo = (input, preambleSize = 25) => {
  const numbers = input.split("\n").map((line) => parseInt(line, 10));
  const badNumber = solveOne(input, preambleSize);

  for (let index = 0; index < numbers.length; index++) {
    let result = 0;
    let min = Number.MAX_SAFE_INTEGER;
    let max = 0;

    for (let i = index; index < numbers.length; i++) {
      const number = numbers[i];
      result += number;
      if (result > badNumber) {
        break;
      }

      if (number > max) {
        max = number;
      }

      if (number < min) {
        min = number;
      }

      if (result === badNumber && min !== max) {
        return min + max;
      }
    }
  }
};

if (process.env.NODE_ENV !== "test") {
  const data = fs.readFileSync(new URL("input.txt", import.meta.url), "utf-8");

  console.log("Result one:", solveOne(data));
  console.log("Result two:", solveTwo(data));
}
