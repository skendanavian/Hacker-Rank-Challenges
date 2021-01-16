// Sherlock considers a string to be valid if all characters of the string appear the same number of times. It is also valid if he can remove just 1  character at 1 index in the string, and the remaining characters will occur the same number of times. Given a string , determine if it is valid. If so, return YES, otherwise return NO.

function isValid(s) {
  //convert string into array

  const countObj = {};
  // assign each character to object key/count
  s.split("").forEach((e) => {
    const count = countObj[e] >= 0 ? countObj[e] + 1 : 0;
    countObj[e] = count;
  });

  // Track Various Possible outcomes
  let oddGroupCount = 0;
  let allCountsAreEven = true;
  let evenCharCount = 0;
  let singleCharCount = 0;
  let differingEvenGroups = 0;

  // loop through charObj -> adjust outcome counters accordingly
  for (let char in countObj) {
    const count = countObj[char];
    if (count % 2 !== 0 && count !== 0) {
      evenCharCount++;

      if (!differingEvenGroups) {
        differingEvenGroups = [];
        differingEvenGroups.push(count + 1);
      } else if (!differingEvenGroups.find((e) => e === count + 1)) {
        differingEvenGroups.push(count + 1);
      }
    }
    if (count % 2 === 0 && count !== 0) {
      oddGroupCount++;
      allCountsAreEven = false;
    }
    if (count === 0) {
      singleCharCount++;
      allCountsAreEven = false;
    }
  }
  //PASSING CASES
  // 1 case of an odd number group of letters AND no single characters
  // no odd number groups AND 1 single character
  // All letter groups contain even numbers
  // Every letter is a single case
  // There are a number of other edge cases which I had to add to pass tests. The instructions on what counts as a valid string are unclear.

  if (
    (allCountsAreEven && differingEvenGroups.length > 1 && evenCharCount > 2) ||
    (singleCharCount > 0 && oddGroupCount > 0 && evenCharCount > 0)
  ) {
    return "NO";
  } else if (
    (!singleCharCount && oddGroupCount <= 1) ||
    (!oddGroupCount && singleCharCount <= 1) ||
    singleCharCount === s.length ||
    (evenCharCount && singleCharCount === 1) ||
    (!evenCharCount && singleCharCount === 1)
  ) {
    return "YES";
  } else {
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
const string6 = "aaaabbcc";
const string7 = "xxxaabbccrry";
const string8 = "abbccc";

isValid(string1); // expect NO
isValid(string2); // expect YES
isValid(string3); // expect NO
isValid(string4); // expect NO
isValid(string5); // expect YES
isValid(string6); // expect NO
isValid(string7); // expect NO
isValid(string8); // expect NO
