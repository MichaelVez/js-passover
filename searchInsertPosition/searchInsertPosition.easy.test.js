const { test, expect } = require("@jest/globals");
const searchInsert = require("./searchInsertPosition.easy");

test("searchInsert ex1", () => {
  expect(searchInsert([1, 3, 5, 6], 5)).toBe(2);
});
test("searchInsert ex2", () => {
  expect(searchInsert([1, 3, 5, 6], 2)).toBe(1);
});
test("searchInsert ex3", () => {
  expect(searchInsert([1, 3, 5, 6], 7)).toBe(4);
});
