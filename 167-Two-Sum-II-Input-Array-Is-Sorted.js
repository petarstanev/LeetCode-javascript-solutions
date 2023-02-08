var twoSum = function (numbers, target) {
  let startIndex = 0;
  let endIndex = numbers.length - 1;

  while (numbers[startIndex] + numbers[endIndex] !== target) {
    const result = numbers[startIndex] + numbers[endIndex];
    if (result > target) {
      endIndex--;
    } else {
      startIndex++;
    }
  }
  return [startIndex + 1, endIndex + 1];
};

console.log(twoSum([2, 7, 11, 15], 9));

// Time O(n);
// Space O(1);
var twoSum2 = function (numbers, target) {
  const map = new Map();

  for (let i = 0; i < numbers.length; i++) {
    if (map.has(numbers[i])) {
      return [map.get(numbers[i]) + 1, i + 1];
    }
    let key = target - numbers[i];
    map.set(key, i);
  }

  return [];
};

console.log(twoSum2([2, 7, 11, 15]));

// // LEARN
// // map.has(x) method
