// There is a string, , of lowercase English letters that is repeated infinitely many times. Given an integer, , find and print the number of letter a's in the first  letters of the infinite string.

// Example

// The substring we consider is , the first  characters of the infinite string. There are  occurrences of a in the substring.

// Function Description

// Complete the repeatedString function in the editor below.

// repeatedString has the following parameter(s):

// s: a string to repeat
// n: the number of characters to consider
// Returns

// int: the frequency of a in the substring
// Input Format

// The first line contains a single string, .
// The second line contains an integer, .

function repeatedString(s, n) {
  const stringLength = s.length;
  const aCount = s.split("").filter((e) => e === "a").length;
  const remainder = n % stringLength;

  if (remainder === 0) {
    return evenCount;
  } else {
    let counter = 0;
    for (let i = 0; i < remainder; i++) {
      if (s[i] === "a") counter++;
    }
    console.log(aCount * Math.floor(n / stringLength) + counter);
    return aCount * Math.floor(n / stringLength) + counter;
  }
}

//  test input
const string =
  "epsxyyflvrrrxzvnoenvpegvuonodjoxfwdmcvwctmekpsnamchznsoxaklzjgrqruyzavshfbmuhdwwmpbkwcuomqhiyvuztwvq";
const number = 549382313570;

repeatedString(string, number); //   expect 16481469408

repeatedString("aba", 10); // expect 7
