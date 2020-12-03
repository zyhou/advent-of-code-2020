// --- Day 1: Report Repair ---
// https://adventofcode.com/2020/day/1

import fs from "fs";

export const solveOne = (input) => {
  const list = input.split("\n").map((x) => parseInt(x, 10));

  for (let i = 0; i < list.length; i++) {
    for (let j = 0; j < list.length; j++) {
      if (i === j) {
        continue;
      }

      if (list[i] + list[j] === 2020) {
        return list[i] * list[j];
      }
    }
  }

  throw new Error("No solution found!");
};

export const solveTwo = (input) => {
  const list = input.split("\n").map((x) => parseInt(x, 10));

  for (let i = 0; i < list.length; i++) {
    for (let j = 0; j < list.length; j++) {
      if (i === j) {
        continue;
      }

      for (let k = 0; k < list.length; k++) {
        if (i == k || j == k) {
          continue;
        }

        if (list[i] + list[j] + list[k] === 2020) {
          return list[i] * list[j] * list[k];
        }
      }
    }
  }

  throw new Error("No solution found!");
};

if (process.env.NODE_ENV !== "test") {
  const data = fs.readFileSync(new URL("input.txt", import.meta.url), "utf-8");

  console.log("Result one:", solveOne(data));
  console.log("Result two:", solveTwo(data));
}
