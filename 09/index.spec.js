import { solveOne, solveTwo } from "./index";

describe("Day 09", () => {
  describe("Solve One", () => {
    it("should return 127 with input", () => {
      const input = `35
20
15
25
47
40
62
55
65
95
102
117
150
182
127
219
299
277
309
576`;

      expect(solveOne(input, 5)).toBe(127);
    });
  });

  describe("Solve Two", () => {
    it("should return 62 with input", () => {
      const input = `35
20
15
25
47
40
62
55
65
95
102
117
150
182
127
219
299
277
309
576`;

      expect(solveTwo(input, 5)).toBe(62);
    });
  });
});
