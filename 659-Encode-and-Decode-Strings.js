// Time: O(n) // where n is number of words
// Space O(n);
function encode(input) {
  let result = "";
  for (let word of input) {
    result += word.length + "#" + word;
  }

  return result;
}

// Time: O(n) // where n is number of words
// Space O(n);
function decode(input) {
  let result = [];

  let i = 1;
  while (i < input.length) {
    let numberOfChar = parseInt(input[i - 1]);
    let startingIndex = i + 1;
    let endIndex = startingIndex + numberOfChar;

    result.push(input.slice(startingIndex, endIndex));
    i = endIndex + 1;
  }

  return result;
}


const input = ["we", "say", "#", "yes"];
const encodeResult = encode(input);
const output = decode(encodeResult);

const equalArr = (a, b) => {
  for (let i = 0; i < input.length; i++) {
    if (input[i] !== output[i]) {
      return false;
    }
  }
  return true;
};

const correct = equalArr(input, output);

console.log(
  "input-" +
    input +
    " encode-" +
    encodeResult +
    " decode-" +
    output +
    " correct - " +
    correct
);

// LEARN
// how to do charCodeAt(x) opposite;
// parseInt('1') to parse int to number;
