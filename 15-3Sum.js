// Pointers
// O(n log(n)) + O(n^2) -> O(n^2) //sorting and double for
// O(n) or O(1) depending on sorting algorithm
var threeSum = function (nums) {
  let result = [];
  nums.sort((a,b)=> a-b);

  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] == nums[i - 1]) {
      continue;
    }

    let l = i + 1;
    let r = nums.length - 1;

    while (l < r) {
      let threeSum = nums[i] + nums[l] + nums[r];
      if (threeSum > 0) {
        r--;
      } else if (threeSum < 0) {
        l++;
      } else {
        result.push([nums[i], nums[l], nums[r]]);
        l++;
        while (nums[l] == nums[l - 1] && l < r) {
          l++;
        }
      }
    }
  }

  return result;
};

console.log(threeSum([-1,0,1,2,-1,-4,-2,-3,3,0,4]
    )); //[[-1,-1,2],[-1,0,1]]
//   console.log(threeSum2([0,0,0])); //[[-1,-1,2],[-1,0,1]]

// Brute Force
// Time O(n^3)// triple loop
var threeSum2 = function (nums) {
  const result = new Set(nums);

  for (let i = 0; i < nums.length - 2; i++) {
    // console.log(i + "i");
    for (let j = i + 1; j < nums.length - 1; j++) {
      //   console.log(j + "j");
      for (let k = j + 1; k < nums.length; k++) {
        if (nums[i] + nums[j] + nums[k] === 0) {
          result.add([nums[i], nums[j], nums[k]].sort().join(","));
        }
      }
    }
  }

  let resultArr = [];

  for (let arr of result) {
    resultArr.push(arr.split(","));
  }

  return resultArr;
};

// console.log(threeSum([-1, 0, 1, 2, -1, -4])); //[[-1,-1,2],[-1,0,1]]
console.log(threeSum2([0, 0, 0])); //[[-1,-1,2],[-1,0,1]]

// Learn what can be key to set map (array is not working)
// learn yield
// to compare two different arrays with different place values - arr.sort().join(',') === //compare as strings
// .sort() compare values in place
// learning .sort() sort minus numbers wrong [-4,-3,-1,0,1,2].sort(); - [-1, -3, -4, 0, 1, 2] to avoid this use sort((a,b)=> a-b);