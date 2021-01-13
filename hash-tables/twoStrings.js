//Given two strings, determine if they share a common substring. A substring may be as small as one character.

function twoStrings(s1, s2) {
  // convert string 1 to array
  // use .some on array1.  This will return true as soon as it finds one common value to exist in s2.
  const commonSubString = s1.split("").some((char) => {
    if (s2.indexOf(char) > -1) return true;
  });

  return commonSubString ? "YES" : "NO";
}

module.exports = twoStrings;
