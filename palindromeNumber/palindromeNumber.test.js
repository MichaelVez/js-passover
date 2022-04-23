const { test, expect } = require("@jest/globals");
const palindromeNumber = require("./palindromeNumber.easy");

test("Example 1", () => {
  expect(palindromeNumber(121)).toBe(true);
});
test("Example 10", () => {
  expect(palindromeNumber(102201)).toBe(true);
});
test("Example 11", () => {
  expect(palindromeNumber(69696)).toBe(true);
});
test("Example 2", () => {
  expect(palindromeNumber(-121)).toBe(false);
});
