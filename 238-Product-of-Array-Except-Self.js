// Brute force
// Time: O(n^2)
// Space: O(n)
var productExceptSelf1 = function (nums) {
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    let numberRes = null;
    for (let y = 0; y < nums.length; y++) {
      if (i !== y) {
        if (numberRes === null) {
          numberRes = nums[y];
        } else {
          numberRes = numberRes * nums[y];
        }
      }
    }
    result.push(numberRes);
  }
  return result;
};

//1,2,3,4
//24,12,8,6
var productExceptSelf2 = function (nums) {
  const result = [];
  const preResult = [];
  const postResult = [];
  let currentResult = 1;

  for (let i = 0; i < nums.length; i++) {
    currentResult *= nums[i];
    preResult.push(currentResult);
  }

  currentResult = 1;
  for (let i = nums.length - 1; 0 <= i; i--) {
    currentResult *= nums[i];
    postResult.unshift(currentResult);
  }

  for (let i = 0; i < nums.length; i++) {
    let preFixValue = 1;
    let postFixValue = 1;
    if (i > 0) {
      preFixValue = preResult[i - 1];
    }

    if (i < nums.length - 1) {
      postFixValue = postResult[i + 1];
    }

    result.push(preFixValue * postFixValue);
  }

  return result;
};

productExceptSelf2([1, 2, 3, 4]);
//LEARN
// We can use *= and /= is JS
// How to iterate array opposite way
// Use unshift(x) to put in the beginning of the array and shift to remove

var productExceptSelf3 = function (nums) {
  const result = [];
  let leftMultiplier = 1;
  let rightMultiplier = 1;

  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] = rightMultiplier;
    rightMultiplier *= nums[i];
  }
  // result = [24, 12, 4, 1] - we move everything 1 item to the left
  // Then multiply for each element from the left.

  for (let i = 0; i < nums.length; i++) {
    result[i] *= leftMultiplier;
    leftMultiplier *= nums[i];
  }

  return result;
};

productExceptSelf3([-1, 1, 0, -3, 3]);
