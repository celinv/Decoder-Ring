// Write your tests here!
const chai = require("chai");
const polybiusModule = require("../src/polybius");
const expect = chai.expect;
const polybius = polybiusModule.polybius;

describe("polybius encoding", () =>  {
    it("correctly encodes string with polybius shift", () => {
        const expected = "23513434112251";
        const actual = polybius("message");

        expect(actual).to.equal(expected);
    })

    it("correctly encodes the letter i to 42", () => {
        const expected = "42";
        const actual = polybius("i");

        expect(actual).to.equal(expected);
    })

    it("correctly encodes the letter j to 42", () => {
        const expected = "42";
        const actual = polybius("j");

        expect(actual).to.equal(expected);
    })

});

describe("polybius decoding", () =>  {
    it("correctly decodes string with polybius shift", () => {
        const expected = "message"; 
        const actual = polybius("23513434112251", false);

        expect(actual).to.equal(expected);
    })

    it("correctly decodes 42 to i/j", () => {
        const expected = "i/j"
        const actual = polybius("42", false);

        expect(actual).to.equal(expected);
    })

});

describe("error handling", () =>  {
    it("ignores capital letters", () => {
        const expected = "23513434112251"; 
        const actual = polybius("meSsAge");

        expect(actual).to.equal(expected);
    })

    it("maintains spaces in the message", () => {
        const expected = "443251 23513434112251 4234"; 
        const actual = polybius("The message is");

        expect(actual).to.equal(expected);
    })

    it("returns false if length of all numbers is odd", () => {
        const expected = false; 
        const actual = polybius("my message4", false);

        expect(actual).to.equal(expected);
    })

});