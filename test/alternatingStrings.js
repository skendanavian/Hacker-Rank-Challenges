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

  // it('content', function(done) {
  //     request('http://localhost:8080/' , function(error, response, body) {
  //         expect(body).to.equal('Hello World');
  //         done();
  //     });
  // });
});

// alternatingCharacters(str1); // expect 3
// alternatingCharacters(str2); // expect 4
// alternatingCharacters(str3); // expect 0
// alternatingCharacters(str4); // expect 0
// alternatingCharacters(str5); // expect 4
