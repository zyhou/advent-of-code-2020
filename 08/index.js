// --- Day 8: Handheld Halting ---
// https://adventofcode.com/2020/day/8

import fs from "fs";

export const solveOne = (input) => {
  const instructions = input.split("\n");

  let i = 0;
  let accumulator = 0;
  const alreadySeen = [];
  while (true) {
    if (alreadySeen.includes(i)) {
      break;
    }

    alreadySeen.push(i);

    const [operation, value] = instructions[i].split(" ");
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
  const instructions = input.split("\n");

  for (let index = 0; index < instructions.length; index++) {
    const [, operation, symbol, value] = /([\w]+) ([+|-])([\d]+)/.exec(
      instructions[index]
    );
    const argument = parseInt(value, 10);

    if (operation === "acc") {
      continue;
    }

    const updateInstruction = [...instructions];
    updateInstruction.splice(
      index,
      1,
      `${operation === "nop" ? "jmp" : "nop"} ${symbol}${argument}`
    );

    let i = 0;
    let accumulator = 0;
    const alreadySeen = [];
    while (true) {
      if (alreadySeen.includes(i)) {
        break;
      }

      alreadySeen.push(i);

      const [operation, value] = updateInstruction[i].split(" ");
      const argument = parseInt(value, 10);

      if (operation === "nop") {
        i += 1;
      } else if (operation === "acc") {
        accumulator += argument;
        i += 1;
      } else if (operation === "jmp") {
        i += argument;
      }

      if (i === updateInstruction.length) {
        return accumulator;
      }
    }
  }
};

if (process.env.NODE_ENV !== "test") {
  const data = fs.readFileSync(new URL("input.txt", import.meta.url), "utf-8");

  console.log("Result one:", solveOne(data));
  console.log("Result two:", solveTwo(data));
}
