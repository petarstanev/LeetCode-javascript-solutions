// Time: O(n)
// Space: O(n)

var twoSum = function (nums, target) {
  const numbersMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    const foundNumberPosition = numbersMap.get(nums[i]);
    if (foundNumberPosition > -1) {
      return [foundNumberPosition, i];
    }

    const remainder = target - nums[i];
    numbersMap.set(remainder, i);
  }

  return [];
};

// console.log(twoSum([2, 7, 11, 15], 9), [0, 1]);
// console.log(twoSum([3, 2, 4], 6), [1, 2]);
console.log(twoSum([2,7,11,15], 9), [0,1]);
