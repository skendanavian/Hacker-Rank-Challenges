// Sherlock considers a string to be valid if all characters of the string appear the same number of times. It is also valid if he can remove just 1  character at 1 index in the string, and the remaining characters will occur the same number of times. Given a string , determine if it is valid. If so, return YES, otherwise return NO.

function isValid(s) {
  const lettersArray = s.split("");
  const countObj = {};

  // assign each character to object key/count
  lettersArray.forEach((e) => {
    const count = countObj[e] >= 0 ? countObj[e] + 1 : 0;
    countObj[e] = count;
  });

  // Track Various Possible outcomes
  let oddGroupCount = 0;
  let allCountsAreEven = true;
  let evenCharCount = 0;
  let singleCharCount = 0;

  // loop through charObj -> adjust outcome counters accordingly
  for (let char in countObj) {
    if (countObj[char] % 2 !== 0 && countObj[char] !== 0) {
      evenCharCount++;
      allCountsAreEven = false;
    } else if (countObj[char] % 2 === 0 && countObj[char] !== 0) {
      oddGroupCount++;
    }
    if (countObj[char] === 0) {
      singleCharCount++;
      allCountsAreEven = false;
    }
  }
  //PASSING CASES
  // 1 case of an odd number group of letters AND no single characters
  // no odd number groups AND 1 single character
  // All letter groups contain even numbers
  // Every letter is a single case
  // console.log({ countObj });
  // console.log({ singleCharCount });
  // console.log({ oddGroupCount });
  // console.log({ allCountsAreEven });
  // console.log({ evenCharCount });

  if (
    (!singleCharCount && oddGroupCount <= 1) ||
    (!oddGroupCount && singleCharCount <= 1) ||
    singleCharCount === s.length ||
    allCountsAreEven ||
    (!evenCharCount && singleCharCount === 1)
  ) {
    console.log("YES");
    return "YES";
  } else {
    console.log("NO");
    return "NO";
  }
}

// test input

const string1 = "aabbccddeefghi";
const string2 = "abcdefghhgfedecba";
const string3 = "aabbcd";
const string4 = "aaaaabc";
const string5 =
  "ibfdgaeadiaefgbhbdghhhbgdfgeiccbiehhfcggchgghadhdhagfbahhddgghbdehidbibaeaagaeeigffcebfbaieggabcfbiiedcabfihchdfabifahcbhagccbdfifhghcadfiadeeaheeddddiecaicbgigccageicehfdhdgafaddhffadigfhhcaedcedecafeacbdacgfgfeeibgaiffdehigebhhehiaahfidibccdcdagifgaihacihadecgifihbebffebdfbchbgigeccahgihbcbcaggebaaafgfedbfgagfediddghdgbgehhhifhgcedechahidcbchebheihaadbbbiaiccededchdagfhccfdefigfibifabeiaccghcegfbcghaefifbachebaacbhbfgfddeceababbacgffbagidebeadfihaefefegbghgddbbgddeehgfbhafbccidebgehifafgbghafacgfdccgifdcbbbidfifhdaibgigebigaedeaaiadegfefbhacgddhchgcbgcaeaieiegiffchbgbebgbehbbfcebciiagacaiechdigbgbghefcahgbhfibhedaeeiffebdiabcifgccdefabccdghehfibfiifdaicfedagahhdcbhbicdgibgcedieihcichadgchgbdcdagaihebbabhibcihicadgadfcihdheefbhffiageddhgahaidfdhhdbgciiaciegchiiebfbcbhaeagccfhbfhaddagnfieihghfbaggiffbbfbecgaiiidccdceadbbdfgigibgcgchafccdchgifdeieicbaididhfcfdedbhaadedfageigfdehgcdaecaebebebfcieaecfagfdieaefdiedbcadchabhebgehiidfcgahcdhcdhgchhiiheffiifeegcfdgbdeffhgeghdfhbfbifgidcafbfcd";

isValid(string1); // expect NO
isValid(string2); // expect YES
isValid(string3); // expect NO
isValid(string4); // expect NO
isValid(string5); // expect YES
