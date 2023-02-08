// Two pointers
// Time: O(n)
// Space: O(1)
var maxArea = function (height) {
  let l = 0;
  let r = height.length - 1;
  let result = 0;

  while (l < r) {
    let minHeight = Math.min(height[l], height[r]);
    let width = r - l;
    let currentArea = minHeight * width;
    result = Math.max(result, currentArea);
    if (minHeight === height[l]) {
      l++;
    } else {
      r--;
    }
  }

  return result;
};
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));

//BRUTE FORCE
// Time: O(n^2) // two for

var maxArea2 = function (height) {
  let maxArea = 0;

  for (let l = 0; l < height.length - 1; l++) {
    for (let r = height.length - 1; l < r; r--) {
      let minHeight = Math.min(height[l], height[r]);
      let width = r - l;
      let currentArea = minHeight * width;
      maxArea = Math.max(maxArea, currentArea);
      r--;
    }
  }

  return maxArea;
};

console.log(maxArea2([1, 8, 6, 2, 5, 4, 8, 3, 7]));

//LEARN
// When we use two pointers we need to move the pointer who is in worse condition
// if l 1 and right is 7; we increment left as right has the better result
