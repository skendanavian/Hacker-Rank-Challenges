// Sherlock considers a string to be valid if all characters of the string appear the same number of times. It is also valid if he can remove just 1  character at 1 index in the string, and the remaining characters will occur the same number of times. Given a string , determine if it is valid. If so, return YES, otherwise return NO.

function isValid(s) {
  // convert to array
  // sort array
  // remove duplicates
  // length should now be exactly 1/2 or 1/2 + 1

  const lettersArray = s.split("");
  const removedDuplicates = lettersArray.filter(
    (char, index) => s.indexOf(char) === index
  );
  console.log(removedDuplicates.length);
  console.log(lettersArray.length);
  const removedDuplicatesLength = removedDuplicates.length;
  const halvedOriginalLength = Math.floor(lettersArray.length / 2);
  if (
    removedDuplicatesLength === halvedOriginalLength ||
    removedDuplicatesLength === halvedOriginalLength + 1
  ) {
    console.log("YES");
  } else {
    console.log("NO");
  }
}

// test input

const string1 = "aabbccddeefghi";
const string2 = "abcdefghhgfedecba";

isValid(string1); // expect to print NO
isValid(string2); // expect to print YES
