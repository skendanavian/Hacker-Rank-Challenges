var expect = require("chai").expect;
const maximumToys = require("../sorting/markAndToys");

const prices1 = ["1", "12", "5", "111", "200", "1000", "10"];
const budget1 = 50;

describe("Returns the max number of toys that can be purchased within provided budget", function () {
  it("returns 3 toys", function () {
    expect(maximumToys(prices1, budget1)).to.equal(4);
  });
});
