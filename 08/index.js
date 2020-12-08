// --- Day 8: Handheld Halting ---
// https://adventofcode.com/2020/day/8

import fs from "fs";

export const solveOne = (input) => {
  const lines = input.split("\n");

  let i = 0;
  let accumulator = 0;
  const alreadySeen = [];
  while (true) {
    if (alreadySeen.includes(i)) {
      break;
    }

    alreadySeen.push(i);

    const [operation, value] = lines[i].split(" ");
    const argument = parseInt(value, 10);

    if (operation === "nop") {
      i += 1;
    } else if (operation === "acc") {
      accumulator += argument;
      i += 1;
    } else if (operation === "jmp") {
      i += argument;
    }
  }

  return accumulator;
};

export const solveTwo = (input) => {
  return 0;
};

if (process.env.NODE_ENV !== "test") {
  const data = fs.readFileSync(new URL("input.txt", import.meta.url), "utf-8");

  console.log("Result one:", solveOne(data));
  console.log("Result two:", solveTwo(data));
}
