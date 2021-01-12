// A student is taking a cryptography class and has found anagrams to be very useful. Two strings are anagrams of each other if the first string's letters can be rearranged to form the second string. In other words, both strings must contain the same exact letters in the same exact frequency. For example, bacdc and dcbac are anagrams, but bacdc and dcbad are not.

// The student decides on an encryption scheme that involves two large strings. The encryption is dependent on the minimum number of character deletions required to make the two strings anagrams. Determine this number.

// Given two strings,  and , that may or may not be of the same length, determine the minimum number of character deletions required to make  and  anagrams. Any characters can be deleted from either of the strings.

function makeAnagram(a, b) {
  let count = 0;

  //track all the letters that are the longer string and then compare them to the letters from the short string.
  let freq = {};

  const longStr = a.length > b.length ? a : b;
  const shortStr = longStr === a ? b : a;

  // Log all chars from the long string into an object
  for (let char of longStr) {
    freq[char] >= 0 ? (freq[char] += 1) : (freq[char] = 0);
  }

  // see if the character is found in longString --> if so. add to count and subtract from obj
  for (let char of shortStr) {
    if (freq[char] >= 0) {
      count++;
      freq[char] -= 1;
    }
  }
  // The count variable is the common letters between each string
  // subtract count from the length of each string and add result together
  const deletions = longStr.length - count + shortStr.length - count;
  console.log(deletions);
  return deletions;
}

// Test Data

const string1 = "cde";
const string2 = "abc";

makeAnagram(string1, string2); // expect 4
makeAnagram("showman", "woman"); // expect 2
