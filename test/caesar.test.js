// Write your tests here!
const chai = require("chai");
const caesarModule = require("../src/caesar");
const expect = chai.expect;
const caesar = caesarModule.caesar;

describe("caesar encoding", () =>  {
    it("correctly encodes string with positive shift", () => {
        const expected = "wklqnixo";
        const actual = caesar("thinkful", 3);

        expect(actual).to.equal(expected);
    })

    it("correctly encodes string with negative shift", () => {
        const expected = "qefkhcri"
        const actual = caesar("thinkful", -3);

        expect(actual).to.equal(expected);
    })

    it("correctly encodes string with negative shift", () => {
        const expected = "bpqa qa i amkzmb umaaiom!" 
        const actual = caesar("This is a secret message!", 8);

        expect(actual).to.equal(expected);
    })
});

describe("caesar decoding", () =>  {
    it("correctly decodes string with positive shift", () => {
        const expected = "thinkful"; 
        const actual = caesar("wklqnixo", 3, false);

        expect(actual).to.equal(expected);
    })

    it("correctly decodes string with negative shift", () => {
        const expected = "thinkful"
        const actual = caesar("qefkhcri", -3, false);

        expect(actual).to.equal(expected);
    })

    it("correctly decodes string with negative shift", () => {
        const expected = "this is a secret message!" 
        const actual = caesar("bpqa qa i amkzmb umaaiom!", 8, false);

        expect(actual).to.equal(expected);
    })
});

describe("error handling", () =>  {
    it("returns false if shift is not entered", () => {
        const expected = false; 
        const actual = caesar("thinkful");

        expect(actual).to.equal(expected);
    })

    it("returns false if shift is greater than 25", () => {
        const expected = false;
        const actual = caesar("qefkhcri", 30);

        expect(actual).to.equal(expected);
    })

    it("returns false if shift is less than -25", () => {
        const expected = false; 
        const actual = caesar("bpqa qa i amkzmb umaaiom!", -29);

        expect(actual).to.equal(expected);
    })
});





