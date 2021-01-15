// Sherlock considers a string to be valid if all characters of the string appear the same number of times. It is also valid if he can remove just 1  character at 1 index in the string, and the remaining characters will occur the same number of times. Given a string , determine if it is valid. If so, return YES, otherwise return NO.

function isValid(s) {
  // convert to array
  // sort
  // remove duplicate characters
  // length of removed duplicates should now be exactly 1/2 or 1/2 + 1 of original.

  const lettersArray = s.split("").sort();
  const duplicates = [];

  for (let i = 0; i < lettersArray.length; i += 2) {
    if (lettersArray[i + 1] === lettersArray[i]) {
      duplicates.push(lettersArray[i]);
    } else {
      i--;
    }
  }

  if (lettersArray.length - duplicates.length * 2 <= 1) {
    console.log("YES");
  } else {
    console.log("NO");
  }
}

// test input

const string1 = "aabbccddeefghi";
const string2 = "abcdefghhgfedecba";
const string3 = "aabbcd";
const string4 = "aaaaabc";

isValid(string1); // expect NO
isValid(string2); // expect YES
isValid(string3); // expect NO
isValid(string4); // expect NO
