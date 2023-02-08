// stack - monotonic decreasing stack
// Time: O(n);
// Space: O(n);
var dailyTemperatures2 = function (temperatures) {
  const result = Array(temperatures.length);
  let tempStack = [];
  let positionStack = [];
  for (let i = 0; i < temperatures.length; i++) {
    while (
      tempStack.length > 0 &&
      tempStack[tempStack.length - 1] < temperatures[i]
    ) {
      tempStack.pop();
      let position = positionStack.pop();
      result[position] = i - position;
    }
    tempStack.push(temperatures[i]);
    positionStack.push(i);
  }

  while (positionStack.length > 0) {
    const pos = positionStack.pop();
    result[pos] = 0;
  }

  return result;
};

console.log(dailyTemperatures2([73, 74, 75, 71, 69, 72, 76, 73]));

// brute force
// Time: O(n^2);
// Space: O(n);
var dailyTemperatures1 = function (temperatures) {
  let result = Array(temperatures.length).fill(0);

  for (let i = 0; i < temperatures.length; i++) {
    for (let n = i + 1; result[i] === 0 && n < temperatures.length; n++) {
      if (temperatures[i] < temperatures[n]) {
        result[i] = n - i;
      }
    }
  }

  return result;
};

console.log(dailyTemperatures1([73, 74, 75, 71, 69, 72, 76, 73]));

// LEARNING
// It is O(n) if we need to pop every element of stack as in worse case we don't push anything. So for -> pop in stack is still O(n)
// monotonic decreasing stack - is stack where all the items are decreasing 75,74,73 ...
