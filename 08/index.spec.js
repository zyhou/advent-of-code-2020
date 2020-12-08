import { solveOne, solveTwo } from "./index";

describe("Day 08", () => {
  describe("Solve One", () => {
    it("should return 5 with input", () => {
      const input = `nop +0
acc +1
jmp +4
acc +3
jmp -3
acc -99
acc +1
jmp -4
acc +6`;

      expect(solveOne(input)).toBe(5);
    });
  });
});
