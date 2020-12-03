import { solveOne, solveTwo } from "./index";

describe("Day 02", () => {
  describe("Solve One", () => {
    it("should return 2 with input", () => {
      const input = `1-3 a: abcde
1-3 b: cdefg
2-9 c: ccccccccc`;

      expect(solveOne(input)).toBe(2);
    });
  });

  describe("Solve Two", () => {
    it("should return 1 with input", () => {
      const input = `1-3 a: abcde
1-3 b: cdefg
2-9 c: ccccccccc`;

      expect(solveTwo(input)).toBe(1);
    });
  });
});
