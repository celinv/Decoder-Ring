// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {

  function substitution(input, alphabet, encode = true) {

    //error handling
    if(!input || !alphabet || alphabet.length != 26) {
      return false;
    }
    //Array.from converts alphabet string into array
    //using Set() data structure built into Javascript
    if(Array.from(new Set(alphabet)).length !== 26) return false;

    const subAlphabet = "abcdefghijklmnopqrstuvwxyz";
    const subAlphaArr = subAlphabet.split("");

    const lowercaseInput = input.toLowerCase().split('');
    const alphabetArr = alphabet.split("");

    //used for "mapping" substitution values
    let overlay = {};
    let decode = {}; 

    let encodeMessage = ""; //in the case encode = false

    //"maps" subAlphabet as the key and the alphabet parameter as the value
    subAlphaArr.forEach((letter, index) => {
      overlay[letter] = alphabetArr[index];
      decode[alphabetArr[index]] = letter;
    });
    
    //for decoding a message
    //skips over spaces and maps the alphabet parameter as the key and subAlphabet as the value
    if(!encode) overlay = decode;
    lowercaseInput.forEach(input => {
      encodeMessage += input === " " ? " " : overlay[input]
    });
    return encodeMessage;
  
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
