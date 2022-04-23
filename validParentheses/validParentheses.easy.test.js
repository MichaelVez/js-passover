const isValid = require("./validParentheses.easy");

test("Example1", () => {
  expect(isValid("()")).toBe(true);
});
test("Example2", () => {
  expect(isValid("()[]{}")).toBe(true);
});
test("Example3", () => {
  expect(isValid("(]")).toBe(false);
});
test("Example4", () => {
  expect(isValid("[({})][()]")).toBe(true);
});
