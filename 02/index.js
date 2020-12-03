// --- Day 2: Password Philosophy ---
// https://adventofcode.com/2020/day/2

const solveOne = (input) => {
  const list = input.split("\n").map((line) => {
    const [
      ,
      min,
      max,
      character,
      password,
    ] = /(\d+)-(\d+) ([a-z]): ([a-z]+)/.exec(line);

    return {
      min: parseInt(min, 10),
      max: parseInt(max, 10),
      character,
      password,
    };
  });

  const isPasswordVaild = ({ character, min, max, password }) => {
    const characterRegex = new RegExp(character, "gi");
    const numOccurs = password.match(characterRegex)?.length;

    return numOccurs >= min && numOccurs <= max;
  };

  return list.filter(isPasswordVaild).length;
};

const solveTwo = (input) => {
  const list = input.split("\n").map((line) => {
    const [
      ,
      min,
      max,
      character,
      password,
    ] = /(\d+)-(\d+) ([a-z]): ([a-z]+)/.exec(line);

    return {
      min: parseInt(min, 10) - 1,
      max: parseInt(max, 10) - 1,
      character,
      password,
    };
  });

  const isPasswordVaild = ({ character, min, max, password }) => {
    const foundMinPosition = password[min] === character;
    const foundMaxPosition = password[max] === character;

    return (
      (foundMinPosition && !foundMaxPosition) ||
      (!foundMinPosition && foundMaxPosition)
    );
  };

  return list.filter(isPasswordVaild).length;
};

if (process.env.NODE_ENV !== "test") {
  const fs = require("fs");
  const path = require("path");
  const data = fs.readFileSync(path.join(__dirname, "input.txt"), "utf-8");

  console.log("Result one:", solveOne(data));
  console.log("Result one:", solveTwo(data));
}

module.exports = { solveOne, solveTwo };
