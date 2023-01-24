var longestConsecutive = function (nums) {
  const setNumbers = new Set(nums);

  let longestNumberTimes = 0;

  for (let number of setNumbers) {
    if (setNumbers.has(number - 1)) continue; // start only if we are at the start of sequence
    let currentLength = 1;
    while (setNumbers.has(number + currentLength)) {
      currentLength++;
    }
    longestNumberTimes = Math.max(longestNumberTimes, currentLength);
  }
  return longestNumberTimes;
};

console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));
//Learn
// Set does not have get() because there is nothing to get
// Math.max() // give us max value from array or 2 numbers
// Search where we can optimize when we need to test 1,2,3 don't test 2,3 because they can't be a start
