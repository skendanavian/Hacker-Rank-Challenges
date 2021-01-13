var expect = require("chai").expect;
const twoStrings = require("../hash-tables/twoStrings");

const str1 = "hello";
const str2 = "world";
const str3 = "hi";
const str4 = "world";

describe("function removes repeating adjacent characters from string", function () {
  it(" returns Yes", function () {
    expect(twoStrings(str1, str2)).to.equal("YES");
  });
  it("returns No", function () {
    expect(twoStrings(str3, str4)).to.equal("NO");
  });
});
