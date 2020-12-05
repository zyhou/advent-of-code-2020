// --- Day 5: Binary Boarding ---
// https://adventofcode.com/2020/day/5

import fs from "fs";

export const convertBibarySpaceToSeatId = (binarySpace) => {
  return parseInt(binarySpace.replace(/B|R/g, 1).replace(/F|L/g, 0), 2);
};

export const solveOne = (input) => {
  const seatIds = input.split("\n").map((line) => {
    return convertBibarySpaceToSeatId(line);
  });

  return Math.max(...seatIds);
};

export const findMissingNumber = (array) => {
  const seatMax = Math.max(...array);
  const seatMin = Math.min(...array);
  for (let i = seatMin; i < seatMax; i++) {
    if (array.indexOf(i) < 0) {
      return i;
    }
  }
};

const solveTwo = (input) => {
  const seatIds = input.split("\n").map((line) => {
    return convertBibarySpaceToSeatId(line);
  });

  return findMissingNumber(seatIds);
};

if (process.env.NODE_ENV !== "test") {
  const data = fs.readFileSync(new URL("input.txt", import.meta.url), "utf-8");

  console.log("Result one:", solveOne(data));
  console.log("Result two:", solveTwo(data));
}
