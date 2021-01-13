// Harold is a kidnapper who wrote a ransom note, but now he is worried it will be traced back to him through his handwriting. He found a magazine and wants to know if he can cut out whole words from it and use them to create an untraceable replica of his ransom note. The words in his note are case-sensitive and he must use only whole words available in the magazine. He cannot use substrings or concatenation to create the words he needs.

// Given the words in the magazine and the words in the ransom note, print Yes if he can replicate his ransom note exactly using whole words from the magazine; otherwise, print No.
// Output: Print Yes or No to the console.

// SOLUTION 1

function checkMagazine(magazineArray, noteArray) {
  const wordsMatch = noteArray.every((word) => {
    const index = magazineArray.indexOf(word);
    if (index > -1) {
      magazineArray.splice(index, 1);
      return true;
    }
  });
  wordsMatch ? console.log("Yes") : console.log("No");
}

// SOLUTION 2

//  *** THIS SOLUTION IS TOO SLOW AND FAILS 3 of 22 TESTS ON HACKER RANK ***

// function checkMagazine(magazine, note) {
//   let noMatches = false;

//   if note is longer than magazine... can't possibly cut out enough matches... print no.
//   if (note.length > magazine.length) {
//     console.log("No");
//     return;
//   }

//   // store each magazine word as object key/number of occurances

//   const magObj = magArr.reduce(
//     (acc, curr) => ((acc[curr] = acc[curr] === 1 ? acc[curr] + 1 : 1), acc),
//     {}
//   );

//   // loop through words in note and check if they exist in the magazine object
//   // if it exists: add 1 to counter and subtract 1 instance of the word from the object

//   for (let word of noteArr) {
//     if (!magObj[word] || magObj[word] < 1) {
//       noMatches = true;
//       break;
//     }
//     if (magObj[word] && magObj[word] > 0) {
//       magObj[word] = magObj[word] - 1;
//     }
//   }
//   noMatches ? console.log("No") : console.log("Yes");
// }

// test input

const mag1 = ["give", "me", "one", "grand", "today", "night"];
const note1 = ["give", "one", "grand", "today"];

const mag2 = ["two", "times", "three", "is", "not", "four"];
const note2 = ["two", "times", "two", "is", "four"];

checkMagazine(mag1, note1); // expect to print Yes
checkMagazine(mag2, note2); // expect to print No
