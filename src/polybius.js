// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  let polybiusAlphabet = {
    a: "11", b: "21", c: "31", d: "41", e: "51", 
    f: "12", g: "22", h: "32", i: "42", j: "42", k: "52", 
    l: "13", m: "23", n: "33", o: "43", p: "53", 
    q: "14", r: "24", s: "34", t: "44", u: "54", 
    v: "15", w: "25", x: "35", y: "45", z: "55"
  }

  let decodedPolybius = {
    11: "a", 21: "b", 31: "c", 41: "d", 51: "e", 
    12: "f", 22: "g", 32: "h", 42: "i/j", 52: "k", 
    13: "l", 23: "m", 33: "n", 43: "o", 53: "p", 
    14: "q", 24: "r", 34: "s", 44: "t", 54: "u", 
    15: "v", 25: "w", 35: "x", 45: "y", 55: "z"
  }

  function polybius(input, encode = true) {

    const lowerCaseInput = input.toLowerCase().split("");
    const regex = /[0-9]/gi;
    
    //for encoding polybius cipher
    if (encode) {
      if(input.match(regex)) return false;
    const encodedMessage = lowerCaseInput.map((character) => {
        //error checking for input value
        if(polybiusAlphabet[character]) {
          return polybiusAlphabet[character];
        }
        //returns the value of polybiusAlphabet
        else {
          return character;
        }
      });
      return encodedMessage.join("");
    } 
    //for decoding polybius cipher
    else {
      let decodedMessage = "";
      for (let i = 0; i < lowerCaseInput.length; i++) {
        let key = lowerCaseInput[i]+lowerCaseInput[i+1]; //creates decodedPolybius keys
        if(key.length !== 2) return false; //returns false if length of all numbers is odd
        if(decodedPolybius[key]) {
          //gets matching decodedPolybius keys and pushes it to decodedMessage
          decodedMessage += decodedPolybius[key]; 
          i++;
        }
        //checks for special characters
        else {
          decodedMessage += lowerCaseInput[i];
        }
      }
      return decodedMessage;
    }
  
}

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
