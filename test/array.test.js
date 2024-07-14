import { describe, it , expect } from "vitest"
import { arrSum } from "../js/array.js"

describe('arrSum', () => {
    it('should return 21 when adding the two arrays', () => {
        expect(arrSum([1, 2, 3],[4, 5, 6])).toBe(21);
    });
    it('should return -21 when adding the two arrays', () => {
        expect(arrSum([-1, -2, -3],[-4, -5, -6])).toBe(-21);
    });
    it('should return 15 when adding the two arrays', () => {
        expect(arrSum([0, 0, 0],[4, 5, 6])).toBe(15);
    });
    it('should return 2100 when adding the two arrays', () => {
        expect(arrSum([100, 200, 300],[400, 500, 600])).toBe(2100);
    });
})