// --- Day 11: Seating System ---
// https://adventofcode.com/2020/day/11

import fs from "fs";

const adjacentValues = [
  [-1, -1],
  [-1, 0],
  [-1, 1],
  [1, -1],
  [1, 0],
  [1, 1],
  [0, -1],
  [0, 1],
];

export const getNextRound = (seats) => {
  const newSeats = [...seats.map((r) => [...r])];
  for (let indexRow = 0; indexRow < newSeats.length; indexRow++) {
    for (let indexCol = 0; indexCol < newSeats[indexRow].length; indexCol++) {
      const seat = seats[indexRow][indexCol];
      if (seat === ".") {
        continue;
      }

      const adjacentSeats = adjacentValues
        .map(([x, y]) => (seats[indexRow + y] || [])[indexCol + x])
        .filter((seat) => seat === "#");

      if (seat === "L" && adjacentSeats.length === 0) {
        newSeats[indexRow][indexCol] = "#";
      } else if (seat === "#" && adjacentSeats.length >= 4) {
        newSeats[indexRow][indexCol] = "L";
      }
    }
  }
  return newSeats;
};

export const doubleArrayToString = (array) => array.flat().join("");

export const solveOne = (input) => {
  const seats = input.split("\n").map((lines) => lines.split(""));

  let oldSeats = [[]];
  let currentSeats = seats;

  while (doubleArrayToString(oldSeats) !== doubleArrayToString(currentSeats)) {
    oldSeats = currentSeats;
    currentSeats = getNextRound(currentSeats);
  }

  return currentSeats.flat().filter((seat) => seat === "#").length;
};

export const solveTwo = (input) => {
  return 0;
};

if (process.env.NODE_ENV !== "test") {
  const data = fs.readFileSync(new URL("input.txt", import.meta.url), "utf-8");

  console.log("Result one:", solveOne(data));
  console.log("Result two:", solveTwo(data));
}
