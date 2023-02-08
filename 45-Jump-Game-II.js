// Time: O(n)
var jump = function (nums) {
  let position = 0;
  let jumps = 0;

  while (position < nums.length - 1) {
    //if we can reach the destination just do it now
    if (position + nums[position] >= nums.length - 1) { 
      return ++jumps;
    }

    let availableJumps = nums.slice(
      position + 1,
      position + nums[position] + 1
    );
    let maxJump = 0;
    let maxJumpId = 0;
    for (let i = 0; i < availableJumps.length; i++) {
      if (maxJump < availableJumps[i] + i) {
        maxJump = availableJumps[i] + i;
        maxJumpId = i;
      }
    }
    console.log(maxJump, maxJumpId);

    position += 1 + maxJumpId;
    jumps++;
  }

  return jumps;
};

console.log(jump([3, 2, 1]));
