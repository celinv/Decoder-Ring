// Write your tests here!
const chai = require("chai");
const substitutionModule = require("../src/substitution");
const expect = chai.expect;
const substitution = substitutionModule.substitution;

describe("substitution encoding", () =>  {
    it("correctly encodes string with substitution cipher", () => {
        const expected = "ykrrpik";
        const actual = substitution("message", "plmoknijbuhvygctfxrdzeswaq");

        expect(actual).to.equal(expected);
    })

    it("correctly encodes string with substitution cipher 2", () => {
        const expected = "mlxszxszr"
        const actual = substitution("mochachai", "zyxwvutsrqpomnlkjihgfedcba");

        expect(actual).to.equal(expected);
    })


});

describe("substitution decoding", () =>  {
    it("correctly decodes string with substitution cipher", () => {
        const expected = "message"; 
        const actual = substitution("ykrrpik", "plmoknijbuhvygctfxrdzeswaq", false);

        expect(actual).to.equal(expected);
    })

    it("correctly decodes string with substitution cipher 2", () => {
        const expected = "mochachai";
        const actual = substitution("mlxszxszr", "zyxwvutsrqpomnlkjihgfedcba", false);

        expect(actual).to.equal(expected);
    })

});

describe("error handling", () =>  {
    it("returns false if given alphabet isn't exactly 26 characters long", () => {
        const expected = false; 
        const actual = substitution("nottwentysix", "asdfghjkl");

        expect(actual).to.equal(expected);
    })

    it("returns false if there are duplicate characters in given alphabet", () => {
        const expected = false;
        const actual = substitution("errorcatch", "qwerttuiopasdfghjklzxcvbnm");

        expect(actual).to.equal(expected);
    })

    it("ignores capital letters", () => {
        const expected = "ykrrpik"; 
        const actual = substitution("MesSage", "plmoknijbuhvygctfxrdzeswaq");

        expect(actual).to.equal(expected);
    })
});