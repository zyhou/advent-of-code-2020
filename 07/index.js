// --- Day 7: Handy Haversacks ---
// https://adventofcode.com/2020/day/7

import fs from "fs";

export const solveOne = (input) => {
  const lines = input.split("\n");

  const bags = lines.reduce((bags, line) => {
    const [, bag, otherBags] = /(\w+ \w+) bags contain (.*)\./.exec(line);

    if (otherBags === "no other bags") {
      bags[bag] = [];
      return bags;
    }

    const childBags = otherBags
      .split(", ")
      .map((otherBag) => /(\w+ \w+) bag(s|\b)/.exec(otherBag)[1]);

    bags[bag] = childBags;
    return bags;
  }, {});

  const filterAllBag = (bag) => {
    const childrenBags = Object.values(bags[bag]);

    childrenBags.forEach((childrenBag) => {
      childrenBags.push(...filterAllBag(childrenBag));
    });

    return childrenBags;
  };

  return Object.keys(bags).filter((bag) =>
    filterAllBag(bag).includes("shiny gold")
  ).length;
};

export const solveTwo = (input) => {
  const lines = input.split("\n");

  const bags = lines.reduce((bags, line) => {
    const [, bag, otherBags] = /(\w+ \w+) bags contain (.*)\./.exec(line);

    if (otherBags === "no other bags") {
      bags[bag] = [];
      return bags;
    }

    const childBags = otherBags.split(", ").map((otherBag) => {
      const [, unit, color] = /(\d) (\w+ \w+) bag(s|\b)/.exec(otherBag);
      return { unit: parseInt(unit, 10), color };
    });

    bags[bag] = childBags;
    return bags;
  }, {});

  const traverse = (bag) => {
    let total = 0;

    Object.values(bags[bag]).forEach(({ unit, color }) => {
      total += unit + unit * traverse(color);
    });

    return total;
  };

  return traverse("shiny gold");
};

if (process.env.NODE_ENV !== "test") {
  const data = fs.readFileSync(new URL("input.txt", import.meta.url), "utf-8");

  console.log("Result one:", solveOne(data));
  console.log("Result two:", solveTwo(data));
}
