// Sherlock considers a string to be valid if all characters of the string appear the same number of times. It is also valid if he can remove just 1  character at 1 index in the string, and the remaining characters will occur the same number of times. Given a string , determine if it is valid. If so, return YES, otherwise return NO.

function isValid(s) {
  // convert to array
  // sort
  // remove duplicate characters
  // length of removed duplicates should now be exactly 1/2 or 1/2 + 1 of original.

  const lettersArray = s.split("").sort();
  const countObj = {};

  lettersArray.forEach((e) => {
    const count = countObj[e] >= 0 ? countObj[e] + 1 : 0;
    countObj[e] = count;
  });

  let extraChars = 0;
  let allEven = true;

  for (char in countObj) {
    if (countObj[char] % 2 !== 0) {
      extraChars++;
      allEven = false;
    }
  }

  let duplicates = [];
  let remainder = s.length;
  let individuals = 0;

  // for (let i = 0; i < lettersArray.length; i += 2)
  let i = 0;
  while (i < lettersArray.length) {
    console.log(i);
    if (lettersArray[i] === lettersArray[i + 1]) {
      duplicates = [...duplicates, lettersArray[i]];
      remainder -= 2;
      i += 2;
    } else {
      i += 1;
      individuals++;
    }
  }

  // for (let i = 0; i < 20; i++) {
  //   console.log(lettersArray[i]);
  //   console.log(duplicates[i]);
  // }

  // console.log({ duplicates });
  // console.log(duplicates.length);
  // console.log({ lettersArray });
  console.log({ countObj });
  // console.log(lettersArray.length);
  // console.log({ remainder });
  // console.log({ individuals });
  // console.log({ lettersArray });

  // if (
  //   lettersArray.length - duplicates.length * 2 <= 1 ||
  //   duplicates.length < 2
  // ) {
  //   console.log("YES");
  // } else {
  //   console.log("NO");
  // }
}

// test input

const string1 = "aabbccddeefghi";
const string2 = "abcdefghhgfedecba";
const string3 = "aabbcd";
const string4 = "aaaaabc";
const string5 =
  "ibfdgaeadiaefgbhbdghhhbgdfgeiccbiehhfcggchgghadhdhagfbahhddgghbdehidbibaeaagaeeigffcebfbaieggabcfbiiedcabfihchdfabifahcbhagccbdfifhghcadfiadeeaheeddddiecaicbgigccageicehfdhdgafaddhffadigfhhcaedcedecafeacbdacgfgfeeibgaiffdehigebhhehiaahfidibccdcdagifgaihacihadecgifihbebffebdfbchbgigeccahgihbcbcaggebaaafgfedbfgagfediddghdgbgehhhifhgcedechahidcbchebheihaadbbbiaiccededchdagfhccfdefigfibifabeiaccghcegfbcghaefifbachebaacbhbfgfddeceababbacgffbagidebeadfihaefefegbghgddbbgddeehgfbhafbccidebgehifafgbghafacgfdccgifdcbbbidfifhdaibgigebigaedeaaiadegfefbhacgddhchgcbgcaeaieiegiffchbgbebgbehbbfcebciiagacaiechdigbgbghefcahgbhfibhedaeeiffebdiabcifgccdefabccdghehfibfiifdaicfedagahhdcbhbicdgibgcedieihcichadgchgbdcdagaihebbabhibcihicadgadfcihdheefbhffiageddhgahaidfdhhdbgciiaciegchiiebfbcbhaeagccfhbfhaddagnfieihghfbaggiffbbfbecgaiiidccdceadbbdfgigibgcgchafccdchgifdeieicbaididhfcfdedbhaadedfageigfdehgcdaecaebebebfcieaecfagfdieaefdiedbcadchabhebgehiidfcgahcdhcdhgchhiiheffiifeegcfdgbdeffhgeghdfhbfbifgidcafbfcd";

// isValid(string1); // expect NO
// isValid(string2); // expect YES
// isValid(string3); // expect NO
// isValid(string4); // expect NO
isValid(string5); // expect YES
