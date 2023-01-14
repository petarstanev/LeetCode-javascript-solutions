// Time: O(n)
// Space: O(n)

var moveZeroes = function (nums) {
  let checkSize = nums.length;
  for (let i = 0; i < checkSize; i++) {
    if (nums[i] === 0) {
      nums.splice(i, 1);
      nums.push(0);
      i--;
      checkSize--;
    }
  }
};

// Time: O(n)
// Space: O(1)
var moveZeroes = function (nums) {
  let currentZeroIndex = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != 0) {
      const temp = nums[currentZeroIndex];
      nums[currentZeroIndex++] = nums[i];
      nums[i] = temp;
    }
  }
};

testCode(moveZeroes, [0, 1, 0, 3, 12], [1, 3, 12, 0, 0], true);
testCode(moveZeroes, [0, 0, 1], [1, 0, 0], true);
testCode(moveZeroes, [1], [1], true);

function testCode(method, input, expected, inPlace) {
  let result = method(input);
  debugger;
  let output = inPlace ? input : result;

  if (output.toString() === expected.toString()) {
    console.log("PASS - output=" + output);
  } else {
    console.log("FAIL - output=" + output + " expected=" + expected);
  }
}
