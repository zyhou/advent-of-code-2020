import { solveOne, solveTwo } from "./index";

describe("Day 06", () => {
  describe("Solve One", () => {
    it("should return 11 with input", () => {
      const input = `abc

a
b
c

ab
ac

a
a
a
a

b`;

      expect(solveOne(input)).toBe(11);
    });
  });

  describe("Solve Two", () => {
    it("should return 6 with input", () => {
      const input = `abc

a
b
c

ab
ac

a
a
a
a

b`;

      expect(solveTwo(input)).toBe(6);
    });
  });
});
