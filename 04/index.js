// --- Day 4: Passport Processing ---
// https://adventofcode.com/2020/day/4

import fs from "fs";

export const solveOne = (input) => {
  const requiredFields = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"];

  const passports = input.split("\n").join(" ").split("  ");

  const passwordValidCount = passports.reduce((validPassport, passport) => {
    if (requiredFields.every((field) => passport.includes(field))) {
      validPassport += 1;
    }
    return validPassport;
  }, 0);

  return passwordValidCount;
};

export const validationFields = {
  byr: (value) => {
    if (value.length !== 4) {
      return false;
    }

    const birthYear = parseInt(value, 10);
    return birthYear >= 1920 && birthYear <= 2002;
  },
  iyr: (value) => {
    if (value.length !== 4) {
      return false;
    }
    const issueYear = parseInt(value, 10);
    return issueYear >= 2010 && issueYear <= 2020;
  },
  eyr: (value) => {
    if (value.length !== 4) {
      return false;
    }
    const expirationYear = parseInt(value, 10);
    return expirationYear >= 2020 && expirationYear <= 2030;
  },
  hgt: (value) => {
    const unit = value.slice(-2);
    if (!["cm", "in"].includes(unit)) {
      return false;
    }

    const height = parseInt(value.slice(0, -2), 10);
    const validateUnit = {
      cm: (heightValue) => heightValue >= 150 && heightValue <= 193,
      in: (heightValue) => heightValue >= 59 && heightValue <= 76,
    };
    return validateUnit[unit](height);
  },
  hcl: (value) => /^#[0-9a-f]{6}$/.test(value),
  ecl: (value) =>
    ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"].includes(value),
  pid: (value) => value.length === 9,
};

export const solveTwo = (input) => {
  const passports = input.split("\n").join(" ").split("  ");

  const passwordValidCount = passports.reduce((validPassport, passport) => {
    const isValidPassport = passport.split(" ").every((passportField) => {
      const [field, value] = passportField.split(":");
      return validationFields[field]?.(value) ?? true;
    });

    const isAllFieldRequired = Object.keys(validationFields).every((field) =>
      passport.includes(field)
    );

    if (isValidPassport && isAllFieldRequired) {
      validPassport += 1;
    }

    return validPassport;
  }, 0);

  return passwordValidCount;
};

if (process.env.NODE_ENV !== "test") {
  const data = fs.readFileSync(new URL("input.txt", import.meta.url), "utf-8");

  console.log("Result one:", solveOne(data));
  console.log("Result two:", solveTwo(data));
}
