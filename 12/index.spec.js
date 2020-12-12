import { solveOne, solveTwo } from "./index";

describe("Day 12", () => {
  describe("Solve One", () => {
    it("should return 25 with input", () => {
      const input = `F10
N3
F7
R90
F11`;

      expect(solveOne(input)).toBe(25);
    });
  });

  describe("Solve Two", () => {
    it.skip("should return 8 with input", () => {
      const input = ``;

      expect(solveTwo(input)).toBe(8);
    });
  });
});
