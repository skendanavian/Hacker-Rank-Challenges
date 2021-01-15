// Sherlock considers a string to be valid if all characters of the string appear the same number of times. It is also valid if he can remove just 1  character at 1 index in the string, and the remaining characters will occur the same number of times. Given a string , determine if it is valid. If so, return YES, otherwise return NO.

function isValid(s) {
  // convert to array
  // remove duplicate characters using filter
  // length of removed duplicates should now be exactly 1/2 or 1/2 + 1 of original.

  const lettersArray = s.split("");
  const removedDuplicates = lettersArray.filter(
    (char, index) => s.indexOf(char) === index
  );
  const removedDuplicatesLength = removedDuplicates.length;
  const halvedOriginalLength = Math.floor(lettersArray.length / 2);
  // console.log({ removedDuplicates });
  // console.log({ removedDuplicatesLength });
  // console.log({ lettersArray });
  // console.log({ halvedOriginalLength });
  // if (
  //   removedDuplicatesLength === halvedOriginalLength ||
  //   removedDuplicatesLength === halvedOriginalLength + 1
  // ) {
  if (lettersArray.length / 2 - removedDuplicates.length > 0) {
    console.log("YES");
  } else {
    console.log("NO");
  }
}

// test input

const string1 = "aabbccddeefghi";
const string2 = "abcdefghhgfedecba";
const string3 = "aabbcd";

isValid(string1); // expect NO
isValid(string2); // expect YES
isValid(string3); // expect NO
