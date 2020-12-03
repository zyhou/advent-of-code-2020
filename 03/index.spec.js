import { solveOne, solveTwo } from "./index";

describe("Day 03", () => {
  describe("Solve One", () => {
    it("should return 7 with input", () => {
      const input = `..##.......
#...#...#..
.#....#..#.
..#.#...#.#
.#...##..#.
..#.##.....
.#.#.#....#
.#........#
#.##...#...
#...##....#
.#..#...#.#`;

      expect(solveOne(input, 3, 1)).toBe(7);
    });

    it("should return 2 with input", () => {
      const input = `..##.......
#...#...#..
.#....#..#.
..#.#...#.#
.#...##..#.
..#.##.....
.#.#.#....#
.#........#
#.##...#...
#...##....#
.#..#...#.#`;

      expect(solveOne(input, 1, 1)).toBe(2);
    });

    it("should return 3 with input", () => {
      const input = `..##.......
#...#...#..
.#....#..#.
..#.#...#.#
.#...##..#.
..#.##.....
.#.#.#....#
.#........#
#.##...#...
#...##....#
.#..#...#.#`;

      expect(solveOne(input, 5, 1)).toBe(3);
    });
  });

  describe("Solve Two", () => {
    it("should return 336 with input", () => {
      const input = `..##.......
#...#...#..
.#....#..#.
..#.#...#.#
.#...##..#.
..#.##.....
.#.#.#....#
.#........#
#.##...#...
#...##....#
.#..#...#.#`;

      expect(solveTwo(input)).toBe(336);
    });
  });
});
