/**
 * @param {string} s
 * @return {boolean}
 * 
 * @description Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
 */
const isValid = function (s) {
  let arr = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "{" || s[i] === "(" || s[i] === "[") arr.push(s[i]);
    if (s[i] === "}") {
      if (arr.indexOf("{") === -1) return false;
      else {
        arr[arr.indexOf("{")] = undefined;
      }
    }
    if (s[i] === ")") {
      if (arr.indexOf("(") === -1) return false;
      else {
        arr[arr.indexOf("(")] = undefined;
      }
    }
    if (s[i] === "]") {
      if (arr.indexOf("[") === -1) return false;
      else {
        arr[arr.indexOf("[")] = undefined;
      }
    }
  }
  return true;
};
module.exports = isValid;
