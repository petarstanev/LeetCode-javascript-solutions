// Time: O(log(n)) 
// Space: 1
var search = function (nums, target) {
  let l = 0;
  let r = nums.length - 1;

  while (l <= r) {
    let mid = l + Math.floor((r - l) / 2);
    // OR let mid = Math.floor((r + l) / 2);
    console.log(mid + " " + l + " " + r);
    if (nums[mid] > target) {
      r = mid - 1;
    } else if (nums[mid] < target) {
      l = mid + 1;
    } else {
      return mid;
    }
  }
  return -1;
};

console.log(search([-1, 0, 3, 5, 9, 12], 9));

//LEARN splice remove all number of elements
//LEARN if splice doesn't have number of elements remove till the end
// LEARN splice start and how many
// LEARN to find mid point we have two options Math.floor((r + l) / 2);  or l+ Math.floor((r-l)/2) the second one allows us to work with bigger numbers as l+r might be more than max integer
// LEARN binary search is O( log(n)) better than O(n log(n))