// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    //input error handling
    if(!shift) {
      return false;
    }
    if (shift > 25 || shift < -25 || shift === 0) {
      return false;
    }
    //for decoding
    if (encode == false) {
      shift = -shift
    }
    
    const baseAlphabet = "abcdefghijklmnopqrstuvwxyz";
    let encodedText = "";
    const lowerCaseInput = input.toLowerCase();
    
    //maintains that shift is within range
    if (shift < 0) {
      shift += 26;
    }
    
    for (let i = 0; i < lowerCaseInput.length; i++) {
      let character = lowerCaseInput[i];

      if (baseAlphabet.indexOf(character) !== -1) {
        const alphabetIndex = baseAlphabet.indexOf(character);
        let newIndex = (alphabetIndex + shift) % 26 //adjusts placement of alphabet for input
        encodedText += baseAlphabet[newIndex] //input is assigned a new letter and pushed into encodedText
      }
      //skips conversion of characters and adds the input to encodedText
      else {
        encodedText += input[i];
    
      }
    }

    return encodedText;
    
}

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
