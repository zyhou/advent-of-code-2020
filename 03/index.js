// --- Day 3: Toboggan Trajectory ---
// https://adventofcode.com/2020/day/3

import fs from "fs";

export const solveOne = (input, moveX, moveY) => {
  const matrix = input.split("\n").map((line) => line.split(""));
  const rowsLength = matrix[0].length;

  let numberOfTrees = 0;
  let x = 0;
  let y = 0;

  while (y < matrix.length) {
    const adjustedX = x % rowsLength;
    const position = matrix[y][adjustedX];

    if (position === `#`) {
      numberOfTrees++;
    }

    x += moveX;
    y += moveY;
  }

  return numberOfTrees;
};

export const solveTwo = (input) => {
  const slopes = [
    solveOne(input, 1, 1),
    solveOne(input, 3, 1),
    solveOne(input, 5, 1),
    solveOne(input, 7, 1),
    solveOne(input, 1, 2),
  ];

  return slopes.reduce((total, slope) => total * slope);
};

if (process.env.NODE_ENV !== "test") {
  const data = fs.readFileSync(new URL("input.txt", import.meta.url), "utf-8");

  console.log("Result one:", solveOne(data, 3, 1));
  console.log("Result two:", solveTwo(data));
}
