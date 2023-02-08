// Time: O(n);
// Space: O(n log(n));

var largestRectangleArea = function (heights) {
  let maxArea = 0;
  let stack = []; // [index,height]

  for (let i = 0; i < heights.length; i++) {
    let startingIndex = i;
    while (stack.length > 0 && stack[stack.length - 1][1] > heights[i]) {
      // if decrease
      let [index, height] = stack.pop();
      maxArea = Math.max((i - index) * height, maxArea);
      startingIndex = index;
    }
    stack.push([startingIndex, heights[i]]);
  }

  while (stack.length > 0) {
    let [index, height] = stack.pop();
    maxArea = Math.max((heights.length - index) * height, maxArea);
  }

  return maxArea;
};

console.log(largestRectangleArea([2, 1, 5, 6, 2, 3]));
