//[3,4,5,1,2]
var findMin = function (nums) {
  let l = 0;
  let r = nums.length - 1;
  let res = nums[0];

  while (l <= r) {
    if (nums[l] < nums[r]) {
      res = Math.min(nums[l], res);
      break;
    }

    let mid = l + Math.floor((r - l) / 2);
    res = Math.min(nums[mid], res);

    if (nums[mid] >= nums[l]) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }

  return res;
};

console.log(findMin([2,1]));
