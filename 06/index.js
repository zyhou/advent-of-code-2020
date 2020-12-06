// --- Day 6: Custom Customs ---
// https://adventofcode.com/2020/day/6

import fs from "fs";

export const solveOne = (input) => {
  const lines = input.split("\n\n");

  const totalAnswers = lines.reduce((total, line) => {
    const combinedAnswers = line.split("\n").join("");
    const answers = new Set([...combinedAnswers]).size;
    return total + answers;
  }, 0);

  return totalAnswers;
};

export const solveTwo = (input) => {
  const lines = input.split("\n\n");

  const totalAnswers = lines.reduce((totalAnswers, line) => {
    const groups = line.split("\n");
    const combinedAnswers = groups.join("");
    const distinctAnswers = [...new Set(combinedAnswers.split(""))];

    const total = distinctAnswers.reduce((total, answer) => {
      if (groups.every((x) => x.includes(answer))) {
        return total + 1;
      }
      return total;
    }, 0);

    return totalAnswers + total;
  }, 0);

  return totalAnswers;
};

if (process.env.NODE_ENV !== "test") {
  const data = fs.readFileSync(new URL("input.txt", import.meta.url), "utf-8");

  console.log("Result one:", solveOne(data));
  console.log("Result two:", solveTwo(data));
}
