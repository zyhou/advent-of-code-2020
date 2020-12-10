import { solveOne, solveTwo } from "./index";

describe("Day 10", () => {
  describe("Solve One", () => {
    it("should return 22 with input", () => {
      const input = `16
10
15
5
1
11
7
19
6
12
4`;

      expect(solveOne(input)).toBe(35);
    });
  });

  describe("Solve Two", () => {
    it.skip("should return 62 with input", () => {});
  });
});
