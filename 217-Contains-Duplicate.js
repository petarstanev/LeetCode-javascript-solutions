// Brute force
//Time: O(n^2)
//Space: O(1)

var containsDuplicate1 = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let n = i + 1; n < nums.length; n++) {
      if (nums[i] === nums[n]) {
        return true;
      }
    }
  }
  return false;
};

testCode(containsDuplicate1, [1, 2, 3, 1], true, false);
testCode(containsDuplicate1, [1, 2, 3, 4], false, false);

// Sorting
// Time: O(n log(n)) // Mergesort
// Space: O(1)

var containsDuplicate2 = function (nums) {
  nums.sort();

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === nums[i + 1]) {
      return true;
    }
  }
  return false;
};

testCode(containsDuplicate2, [1, 2, 3, 1], true, false);
testCode(containsDuplicate2, [1, 2, 3, 4], false, false);

// HashSet
// Time: O(n); //n because it is O(n) to build the set
// Size: O(n);
var containsDuplicate3 = function (nums) {
  const numbersSet = new Set(nums);
  return nums.length > numbersSet.size;
};

testCode(containsDuplicate3, [1, 2, 3, 1], true, false);
testCode(containsDuplicate3, [1, 2, 3, 4], false, false);

// HashSet 2
// Time: O(n); //n because it is O(n) to build the set
// Size: O(n);
var containsDuplicate4 = function (nums) {
  const numbersSet = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (numbersSet.has(nums[i])) {
      return true;
    }
    numbersSet.add(nums[i]);
  }

  return false;
};

testCode(containsDuplicate4, [1, 2, 3, 1], true, false);
testCode(containsDuplicate4, [1, 2, 3, 4], false, false);

function testCode(method, input, expected, inPlace) {
  let result = method(input);
  let output = inPlace ? input : result;

  if (output === expected) {
    console.log("%c PASS - output=" + output, "color: green");
  } else {
    console.log(
      "%c FAIL - output=" + output + " expected=" + expected,
      "color: red"
    );
  }
}
