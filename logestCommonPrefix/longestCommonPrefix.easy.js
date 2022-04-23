/**
 * @param {string[]} strs
 * @return {string}
 *
 * @description {Write a function to find the longest common prefix string amongst an array of strings.
                If there is no common prefix, return an empty string "".}
 * 
 * Example 1 
 * Input: strs = ["flower","flow","flight"]
 * Output: "fl"
 * 
 *
 * Example 2
 * Input: strs = ["dog","racecar","car"]
 * Output: ""
 *
 */
const longestCommonPrefixOfTwoStrings = function (str1, str2) {
  res = "";
  for (let i = 0, j = 0; i < str1.length, j < str2.length; i++, j++) {
    if (str1[i] !== str2[j]) {
      return res;
    }
    res += str1[i];
  }
  return res;
};
const longestCommonPrefix = function (strs) {
  if (strs.length > 1) {
    let res = strs[0];
    for (let i = 1; i < strs.length; i++) {
      res = longestCommonPrefixOfTwoStrings(res, strs[i]);
    }
    return res;
  } else return strs[0].toString();
};
module.exports = longestCommonPrefix;
