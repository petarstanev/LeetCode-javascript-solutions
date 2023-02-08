// Time: O(n log(n)) - because of the sorting
// Space: O(n) - because of the stack

var carFleet = function (target, position, speed) {
  const positionSpeed = [];
  const stack = [];

  for (let i = 0; i < position.length; i++) {
    positionSpeed[i] = [position[i], speed[i]];
  }

  positionSpeed.sort((a, b) => a[0] - b[0]);

  for (let i = positionSpeed.length - 1; -1 < i; i--) {
    let time = (target - positionSpeed[i][0]) / positionSpeed[i][1];

    stack.push(time);
    if (stack.length > 1) {
      if (stack[stack.length - 1] <= stack[stack.length - 2]) {
        stack.pop();
      }
    }
  }

  return stack.length;
};

console.log(carFleet(12, [10, 8, 0, 5, 3], [2, 4, 1, 1, 3]));
console.log(carFleet(100, [0, 2, 4], [4, 2, 1]));
console.log(carFleet(10, [0, 4, 2], [2, 1, 3])); //1

//LEARNING
// create two dimensional array from 2 arrays - positionSpeed[i] = [position[i], speed[i]];
// sort desc order -  arr.sort((a,b) =>b-a);
