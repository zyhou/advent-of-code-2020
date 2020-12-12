// --- Day 12: Rain Risk ---
// https://adventofcode.com/2020/day/12

import fs from "fs";

export const solveOne = (input) => {
  const instructions = input.split("\n").map((lines) => {
    return {
      action: lines[0],
      value: parseInt(lines.substring(1), 10),
    };
  });

  const rotate = (origin, degrees) => (origin + degrees + 360) % 360;

  const { x, y } = instructions.reduce(
    (ship, { action, value }) => {
      const orientation = ship.orientation;

      ship.x += action === "E" ? value : action === "W" ? -value : 0;
      ship.y += action === "N" ? value : action === "S" ? -value : 0;

      ship.orientation = rotate(
        orientation,
        action === "L" ? value : action === "R" ? -value : 0
      );

      if (action === "F") {
        ship.x += orientation === 0 ? value : orientation === 180 ? -value : 0;
        ship.y += orientation === 90 ? value : orientation === 270 ? -value : 0;
      }

      return ship;
    },
    { orientation: 0, x: 0, y: 0 }
  );

  return Math.abs(x) + Math.abs(y);
};

export const solveTwo = (input) => {
  return 0;
};

if (process.env.NODE_ENV !== "test") {
  const data = fs.readFileSync(new URL("input.txt", import.meta.url), "utf-8");

  console.log("Result one:", solveOne(data));
  console.log("Result two:", solveTwo(data));
}
