// You are given a string containing characters 'A' and 'B'  only. Your task is to change it into a string such that there are no matching adjacent characters. To do this, you are allowed to delete zero or more characters in the string.

// Your task is to find the minimum number of required deletions.

// returns the minimum number of deletions required

function alternatingCharacters(s) {
  return 3;
}

// test input

const str1 = "AAAA";
const str2 = "BBBBB";
const str3 = "ABABABAB";
const str4 = "BABABA";
const str5 = "AAABBB";

alternatingCharacters(str1); // expect 3
alternatingCharacters(str2); // expect 4
alternatingCharacters(str3); // expect 0
alternatingCharacters(str4); // expect 0
alternatingCharacters(str5); // expect 4

module.exports = alternatingCharacters;
