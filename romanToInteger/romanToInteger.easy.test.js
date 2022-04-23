const { test, expect } = require("@jest/globals");
const romanToInteger = require("./romanToInteger.easy");

test("Example 1", () => {
  expect(romanToInteger("III")).toBe(3);
});
test("Example 2", () => {
  expect(romanToInteger("IV")).toBe(4);
});
test("Example 3", () => {
  expect(romanToInteger("XXII")).toBe(22);
});
test("Example 4", () => {
  expect(romanToInteger("IX")).toBe(9);
});
