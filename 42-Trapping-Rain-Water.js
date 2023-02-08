var trap = function (height) {
  let maxLeft = [0];
  let maxRight = [0];
  let minValue = [];

  let maxValue = 0;
  for (let i = 1; i < height.length; i++) {
    maxValue = Math.max(maxValue, height[i - 1]);
    maxLeft.push(maxValue);
  }

  maxValue = 0;
  for (let i = height.length - 2; 0 <= i; i--) {
    maxValue = Math.max(maxValue, height[i + 1]);
    maxRight.unshift(maxValue);
  }

  for (let i = 0; i < height.length; i++) {
    minValue.push(Math.min(maxLeft[i], maxRight[i]));
  }

  let result = 0;
  for (let i = 0; i < height.length; i++) {
    let water = minValue[i] - height[i];
    if (water > 0) {
      result += water;
    }
  }

  return result;
};

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])); //6
