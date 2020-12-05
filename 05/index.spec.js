import {
  convertBibarySpaceToSeatId,
  solveOne,
  findMissingNumber,
} from "./index";

describe("Day 05", () => {
  describe("Solve One", () => {
    it.each`
      binarySpace     | seatId
      ${"FBFBBFFRLR"} | ${357}
      ${"BFFFBBFRRR"} | ${567}
      ${"FFFBBBFRRR"} | ${119}
      ${"BBFFBBFRLL"} | ${820}
    `("should return $seatId for $binarySpace", ({ binarySpace, seatId }) => {
      expect(convertBibarySpaceToSeatId(binarySpace)).toBe(seatId);
    });

    it("should return the hight seat on the board", () => {
      const input = `FBFBBFFRLR
BFFFBBFRRR
FFFBBBFRRR
BBFFBBFRLL`;

      expect(solveOne(input)).toBe(820);
    });
  });

  describe("Solve Two", () => {
    it("should return 2 as empty seat", () => {
      const input = [1, 3, 4];
      expect(findMissingNumber(input)).toBe(2);
    });

    it("should return 3 as empty seat", () => {
      const input = [1, 2, 5, 3];
      expect(findMissingNumber(input)).toBe(4);
    });
  });
});
