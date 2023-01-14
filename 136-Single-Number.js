// Time: O(n^2)
// Space: O(1)
var singleNumber = function (nums) {
  let counter = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let y = 0; y < nums.length; y++) {
      if (nums[i] === nums[y]) {
        counter++;
      }
    }
    if (counter === 1) {
      return nums[i];
    }
    counter = 0;
  }
  return -1;
};

// Time: O(n)
// Space: O(n)

// using extra array
var singleNumber = function (nums) {
  let foundNumbers = [];
  for (let i = 0; i < nums.length; i++) {
    let foundIndex = foundNumbers.indexOf(nums[i]);
    if (foundIndex === -1) {
      foundNumbers.push(nums[i]);
    } else {
      foundNumbers.splice(foundIndex, 1);
    }
  }

  return foundNumbers[0];
};

// Time: O(n)
// Space: O(n)

// using sorting
// sort the array so every number next to each other should match like 
// 1,1,2,2,4 
// If no element is found it must be the last element.
var singleNumber = function (nums) {
  nums.sort();

  for (let i = 0; i < nums.length - 1; i++) {
    if (i % 2 === 0 && nums[i] !== nums[i + 1]) {
      return nums[i];
    }
  }
  return nums[nums.length - 1];
};
