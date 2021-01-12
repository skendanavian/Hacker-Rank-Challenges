// You are given a string containing characters 'A' and 'B'  only. Your task is to change it into a string such that there are no matching adjacent characters. To do this, you are allowed to delete zero or more characters in the string.

// Your task is to find the minimum number of required deletions.

// returns the minimum number of deletions required

function alternatingCharacters(string) {
  let counter = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === string[i + 1]) counter++;
  }

  return counter;
}

// test input

const str1 = "AAAA";
const str2 = "BBBBB";
const str3 = "ABABABAB";
const str4 = "BABABA";
const str5 = "AAABBB";

module.exports = alternatingCharacters;
