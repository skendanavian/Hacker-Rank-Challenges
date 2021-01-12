var expect = require("chai").expect;
const alternatingCharacters = require("../strings/alternatingCharacter");

const str1 = "AAAA";
const str2 = "BBBBB";
const str3 = "ABABABAB";
const str4 = "BABABA";
const str5 = "AAABBB";

describe("function removes repeating adjacent characters from string", function () {
  it("removes 3 characters", function () {
    expect(alternatingCharacters(str1)).to.equal(3);
  });
  it("removes 4 characters", function () {
    expect(alternatingCharacters(str2)).to.equal(4);
  });
  it("removes 0 characters", function () {
    expect(alternatingCharacters(str3)).to.equal(0);
  });
  it("removes 3 characters", function () {
    expect(alternatingCharacters(str4)).to.equal(0);
  });
  it("removes 3 characters", function () {
    expect(alternatingCharacters(str5)).to.equal(4);
  });
});
