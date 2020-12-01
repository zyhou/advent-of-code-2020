const { solveOne, solveTwo } = require("./index");

describe("Day 01", () => {
  describe("Solve One", () => {
    it("should return 514579 with input", () => {
      const input = `1721
979
366
299
675
1456`;

      expect(solveOne(input)).toBe(514579);
    });

    it("should throw when input sum is not 2020", () => {
      const input = `
0
1
2
3`;

      expect(() => {
        solveOne(input);
      }).toThrow();
    });
  });

  describe("Solve Two", () => {
    it("should return 241861950 with input", () => {
      const input = `1721
    979
    366
    299
    675
    1456`;

      expect(solveTwo(input)).toBe(241861950);
    });

    it("should throw when input sum is not 2020", () => {
      const input = `
0
1
2
3`;

      expect(() => {
        solveTwo(input);
      }).toThrow();
    });
  });
});
