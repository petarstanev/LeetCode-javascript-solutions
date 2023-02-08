//Time: Object(log(n))
var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    //LEARN we need <= in binary search !!
    let mid = left + Math.floor((right - left) / 2); //3 (7)
    console.log(left, mid, right);
    if (nums[mid] === target) {
      return mid;
    }

    // check if left side is sorted
    if (nums[left] <= nums[mid]) {
      if (nums[left] <= target && target <= nums[mid]) {
        //target is in the left sorted list
        right = mid - 1;
      } else {
        //target is in the right
        left = mid + 1;
      }
    } else {
      // Right side is sorted
      if (nums[mid] <= target && target <= nums[right]) {
        //target is in the right
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }

  return -1;
};
/*LEARNING
1. In binary search it is always while(l<=r) = is important
2. When it is rotated array and we have middle always left or right part will be sorted we need to find out which one
3. 


*/