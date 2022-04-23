const { test, expect } = require("@jest/globals");
const romanToInteger = require("./romanToInteger.easy");

test("Example 1", () => {
  expect(romanToInteger("III")).toBe(3);
});
test("Example 2", () => {
  expect(romanToInteger("IV")).toBe(4);
});
test("Example 12", () => {
  expect(romanToInteger("XL")).toBe(40);
});
test("Example 12.2", () => {
  expect(romanToInteger("XLI")).toBe(41);
});
test("Example 12.2", () => {
  expect(romanToInteger("XCI")).toBe(91);
});
test("Example 13", () => {
  expect(romanToInteger("CDI")).toBe(401);
});
test("Example 13", () => {
  expect(romanToInteger("CMI")).toBe(901);
});
test("Example 3", () => {
  expect(romanToInteger("XXII")).toBe(22);
});
test("Example 4", () => {
  expect(romanToInteger("IX")).toBe(9);
});
