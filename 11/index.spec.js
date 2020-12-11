import { solveOne, solveTwo, getNextRound, doubleArrayToString } from "./index";

describe("Day 11", () => {
  describe("Solve One", () => {
    it("should return the next round with input", () => {
      const input = [["L", ".", "L", "L", ".", "L", "L", ".", "L", "L"]];
      const expected = [["#", ".", "#", "#", ".", "#", "#", ".", "#", "#"]];

      expect(getNextRound(input)).toMatchObject(expected);
    });

    it("should return a string when input is doublie dimmension array", () => {
      const input = [["L", ".", "L", "L", ".", "L", "L", ".", "L", "L"]];
      const expected = `L.LL.LL.LL`;

      expect(doubleArrayToString(input)).toBe(expected);
    });

    it("should return 37 with input", () => {
      const input = `L.LL.LL.LL
LLLLLLL.LL
L.L.L..L..
LLLL.LL.LL
L.LL.LL.LL
L.LLLLL.LL
..L.L.....
LLLLLLLLLL
L.LLLLLL.L
L.LLLLL.LL`;

      expect(solveOne(input)).toBe(37);
    });
  });

  describe("Solve Two", () => {
    it.skip("should return 8 with input", () => {
      const input = ``;

      expect(solveTwo(input)).toBe(8);
    });
  });
});
