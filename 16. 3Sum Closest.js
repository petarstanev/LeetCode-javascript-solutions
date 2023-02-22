//Time: O(n^2) //because we have only 2 arrays we change b or c depending on the result
//Space: O(1);
var threeSumClosest = function (nums, target) {
  nums.sort((a, b) => a - b); //

  let bestSum = -1;
  let bestDiff = +Infinity;

  for (let a = 0; a < nums.length - 2; a++) {
    let b = a + 1;
    let c = nums.length - 1;
    while (b < c) {
      let result = nums[a] + nums[b] + nums[c];
      // console.log(result, nums[a], nums[b], nums[c]);
      if (result === target) return result;
      let currentDiff = Math.abs(target - result);
      if (currentDiff < bestDiff) {
        // console.log(a,b,c,currentDiff,bestDiff);
        bestSum = result;
        bestDiff = currentDiff;
      }
      if (result > target) {
        c--;
      } else {
        b++;
      }
    }
  }

  return bestSum;
};

//LEARNING
// 0. when we sort minus number always do a-b because it changes
// 1. .sort() is in place
// 2. for minus numbers we need sort((a,b) => a-b);// to sort them correctly -4, -1, 2 ,3
