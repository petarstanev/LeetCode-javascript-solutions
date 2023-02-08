var isPalindrome = function (s) {
  const lowerString = s.toLowerCase(); //lear toLowerCase
  const zeroCode = "0".charCodeAt(0); // learn charCodeAt
  const nineCode = "9".charCodeAt(0); // learn charCodeAt
  const aCode = "a".charCodeAt(0);
  const zCode = "z".charCodeAt(0);

  let startIndex = 0;
  let endIndex = lowerString.length - 1;

  const isAlphaNumeric = (symbol) => {
    const symbolNumber = symbol.charCodeAt(0);

    if (aCode <= symbolNumber && symbolNumber <= zCode) {
      return true;
    }

    if (zeroCode <= symbolNumber && symbolNumber <= nineCode) {
      return true;
    }

    return false;
  };

  while (startIndex < endIndex) {
    const startSymbol = lowerString[startIndex];
    const endSymbol = lowerString[endIndex]; //check to const

    if (!isAlphaNumeric(startSymbol)) {
      startIndex++;
      continue;
    }
    if (!isAlphaNumeric(endSymbol)) {
      endIndex--;
      continue;
    }

    if (startSymbol !== endSymbol) {
      return false;
    }
    startIndex++;
    endIndex--;
  }
  return true;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));//true
console.log(isPalindrome("race a car"));//false

// var isPalindrome2 = function (s) {
//   const stringArr = s.toLowerCase().split(""); //lear toLowerCase
//   const zeroCode = "0".charCodeAt(0); // learn charCodeAt
//   const nineCode = "9".charCodeAt(0); // learn charCodeAt
//   // learn codes are 0-9(48-57) then symbols then a-z(65-90)
//   const aCode = "a".charCodeAt(0);
//   const zCode = "z".charCodeAt(0);

//   for (let i = 0; i < stringArr.length; i++) {
//     // learn .charCodeAt(0) only for string not array;
//     // learn to check when to use || or &&
//     let symbolCode = stringArr[i].charCodeAt(0);
//     let isNumber = zeroCode <= symbolCode && symbolCode <= nineCode;
//     let isLetter = aCode <= symbolCode && symbolCode <= zCode;

//     if (!(isNumber || isLetter)) {
//       stringArr.splice(i, 1);
//       i--;
//     }
//   }

//   let endIndex = stringArr.length - 1;
//   for (let i = 0; i < endIndex; i++) {
//     if (stringArr[i] !== stringArr[endIndex]) {
//       return false;
//     }
//     endIndex--;
//   }

//   return true;
// };

// console.log(isPalindrome2("race a car"));

// LEARNING
/* 
1.Always check <= and >= when we change logic with if
2. It is toLowerCase() to convert string to lowercase
3. Codes are 0-9(48-57) then symbols then a-z(65-90)
4. string.charCodeAt(0) only for string not array
5. If we have complicated logic (not letter or number ) split it into separate if statements
6. If we are looking for two numbers we can go from back to front and it will be O (n);
7. We can use const inside for if we don't change the value inside it;
*/
